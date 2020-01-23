package com.nayak.pickphotographers.service;

import java.util.Date;
import java.util.List;
import java.util.Objects;
import java.util.Optional;

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
	public void deletePhotographers(@Valid Long photographerId) {
		Optional<Photographers> dbCopy = photographersRepository.findById(photographerId);
		if(!dbCopy.isPresent()) {
			throw new EntityNotFoundException("No entity found with given id "+photographerId);
		}
		photographersRepository.deleteById(photographerId);
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

	@Override
	public List<ContactRequest> getAllContactRequest() {
		return contactRequestRepository.findAll();
	}

	@Override
	public List<ContactRequest> getNewContactRequest() {
		return contactRequestRepository.findByIsRead(PhotographersConstant.N);
	}

	@Override
	public Integer approveContactRequest(List<ContactRequest> contactRequests) {
		List<ContactRequest> approvedContactRequest = contactRequestRepository.saveAll(contactRequests);
		return approvedContactRequest.size();
	}

}
