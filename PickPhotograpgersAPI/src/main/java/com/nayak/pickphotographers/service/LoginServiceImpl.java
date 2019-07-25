package com.nayak.pickphotographers.service;

import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nayak.pickphotographers.entity.Photographers;
import com.nayak.pickphotographers.model.PhotographersLoginRequest;
import com.nayak.pickphotographers.repository.PhotographersRepository;

@Service
public class LoginServiceImpl implements LoginService {

	@Autowired
	PhotographersRepository photographersRepository;

	@Override
	public Photographers validatePhotographers(@Valid PhotographersLoginRequest photographersLoginRequest) {
		Optional<Photographers> photographers = photographersRepository.findByUserNameAndPassword(
				photographersLoginRequest.getUsername(), photographersLoginRequest.getPassword());
		if (!photographers.isPresent()) {
			return new Photographers();
		}
		return photographers.get();
	}

}
