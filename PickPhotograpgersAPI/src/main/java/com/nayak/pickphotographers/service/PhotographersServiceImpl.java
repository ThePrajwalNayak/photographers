package com.nayak.pickphotographers.service;

import java.util.Date;
import java.util.List;
import java.util.Objects;
import java.util.Optional;

import javax.persistence.EntityNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nayak.pickphotographers.constant.PhotographersConstant;
import com.nayak.pickphotographers.entity.Photographers;
import com.nayak.pickphotographers.exception.RecordNotFoundException;
import com.nayak.pickphotographers.repository.PhotographersRepository;

@Service
public class PhotographersServiceImpl implements PhotographersService {

	@Autowired
	PhotographersRepository photographersRepository;

	@Override
	public List<Photographers> getAllPhotographers() {
		return photographersRepository.findByIsActiveAndIsApproved(PhotographersConstant.Y, PhotographersConstant.N);
	}

	@Override
	public Photographers getPhotographersById(Long photographersId) {
		Optional<Photographers> photographers = photographersRepository.findById(photographersId);
		if(!photographers.isPresent()) {
			throw new RecordNotFoundException("Photographer not found with "+photographersId + " Id");
		}
		return photographers.get();
	}

	@Override
	public Photographers savePhotgraphers(Photographers photographers) {
		photographers.setIsActive(PhotographersConstant.Y);
		photographers.setIsApproved(PhotographersConstant.N);
		photographers.setEntDt(new Date());
		photographers.setModDt(new Date());
		return photographersRepository.save(photographers);
	}

	@Override
	public Photographers updatePhotographers(Photographers photographers) {
		Photographers dbCopy = photographersRepository.findAllByPhotographersId(photographers.getPhotographersId());
		if (Objects.isNull(dbCopy) || dbCopy.getPhotographersId() != photographers.getPhotographersId()) {
			throw new EntityNotFoundException("No entity found");
		}
		photographers.setModDt(new Date());
		return photographersRepository.save(photographers);
	}

	@Override
	public List<Photographers> getTopPhotographers() {
		return photographersRepository.findByIsActiveAndIsApproved(PhotographersConstant.Y, PhotographersConstant.N);
	}


}
