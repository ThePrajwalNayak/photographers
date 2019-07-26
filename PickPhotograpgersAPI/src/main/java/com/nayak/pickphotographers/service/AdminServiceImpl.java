package com.nayak.pickphotographers.service;

import java.util.Date;
import java.util.List;
import java.util.Objects;

import javax.persistence.EntityNotFoundException;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nayak.pickphotographers.constant.PhotographersConstant;
import com.nayak.pickphotographers.entity.ContactRequest;
import com.nayak.pickphotographers.entity.Photographers;
import com.nayak.pickphotographers.model.IdModel;
import com.nayak.pickphotographers.repository.ContactRequestRepository;
import com.nayak.pickphotographers.repository.PhotographersRepository;

@Service
public class AdminServiceImpl implements AdminService {

	@Autowired
	PhotographersRepository photographersRepository;
	
	@Autowired
	ContactRequestRepository contactRequestRepository;

	@Override
	public List<Photographers> getNewPhotogrpahers() {
		return photographersRepository.findByIsActiveAndIsApproved(PhotographersConstant.Y, PhotographersConstant.N);
	}

	@Override
	public void deletePhotographers(@Valid Photographers photographers) {
		photographersRepository.delete(photographers);
	}

	@Override
	public void deleteContactRequest(@Valid ContactRequest contactRequest) {
		contactRequestRepository.save(contactRequest);
	}

	@Override
	public Photographers approveNewPhotographers(@Valid Photographers photographers) {
		Photographers dbCopy = photographersRepository.findAllByPhotographersId(photographers.getPhotographersId());
		if (Objects.isNull(dbCopy) || dbCopy.getPhotographersId() != photographers.getPhotographersId()) {
			throw new EntityNotFoundException("No entity found");
		}
		photographers.setModDt(new Date());
		return photographersRepository.save(photographers);
	}

}
