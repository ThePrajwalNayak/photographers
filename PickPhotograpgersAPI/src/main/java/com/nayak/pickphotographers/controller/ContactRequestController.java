package com.nayak.pickphotographers.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.nayak.pickphotographers.entity.ContactRequest;
import com.nayak.pickphotographers.service.ContactRequestService;

@RestController
@CrossOrigin(origins = "*")
public class ContactRequestController {

	@Autowired
	ContactRequestService contactRequestService;

	@PostMapping("/contactRequest")
	public ResponseEntity<ContactRequest> saveContactRequest(@Valid @RequestBody ContactRequest contactRequest) {
		System.out.println("COntroller : "+contactRequest);
		ContactRequest savedContactRequest = contactRequestService.saveContactRequest(contactRequest);
		return new ResponseEntity<ContactRequest>(savedContactRequest, HttpStatus.CREATED);
	}

}
