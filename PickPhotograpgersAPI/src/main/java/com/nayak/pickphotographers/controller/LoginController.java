package com.nayak.pickphotographers.controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.nayak.pickphotographers.entity.Photographers;
import com.nayak.pickphotographers.model.PhotographersLoginRequest;
import com.nayak.pickphotographers.service.LoginService;

@RestController
public class LoginController {

	@Autowired
	LoginService loginService;

	@PostMapping("/photographersLogin")
	public ResponseEntity<Photographers> photographerLogin(
			@Valid @RequestBody PhotographersLoginRequest photographersLoginRequest) {
		Photographers photographers = loginService.validatePhotographers(photographersLoginRequest);
		return new ResponseEntity<Photographers>(photographers, HttpStatus.OK);
	}

}
