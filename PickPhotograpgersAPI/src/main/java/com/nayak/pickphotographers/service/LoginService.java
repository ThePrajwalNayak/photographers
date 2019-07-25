package com.nayak.pickphotographers.service;

import javax.validation.Valid;

import com.nayak.pickphotographers.entity.Photographers;
import com.nayak.pickphotographers.model.PhotographersLoginRequest;

public interface LoginService {

	Photographers validatePhotographers(@Valid PhotographersLoginRequest photographersLoginRequest);

}
