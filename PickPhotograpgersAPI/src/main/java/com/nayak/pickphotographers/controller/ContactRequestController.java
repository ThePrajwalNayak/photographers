package com.nayak.pickphotographers.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.nayak.pickphotographers.entity.ContactRequest;
import com.nayak.pickphotographers.service.ContactRequestService;

@RestController
public class ContactRequestController {

	@Autowired
	ContactRequestService contactRequestService;

	@GetMapping("/contactRequest")
	public ResponseEntity<List<ContactRequest>> getAllContactRequest() {
		List<ContactRequest> contactRequest = contactRequestService.getAllContactRequest();
		return new ResponseEntity<List<ContactRequest>>(contactRequest, HttpStatus.OK);
	}

	@GetMapping("/contactRequestOpen")
	public ResponseEntity<List<ContactRequest>> getOpenContactRequest() {
		List<ContactRequest> contactRequestOpen = contactRequestService.getOpenContactRequest();
		return new ResponseEntity<List<ContactRequest>>(contactRequestOpen, HttpStatus.OK);
	}

	@PostMapping("/contactRequest")
	public ResponseEntity<ContactRequest> saveContactRequest(@RequestBody ContactRequest contactRequest) {
		ContactRequest savedContactRequest = contactRequestService.saveContactRequest(contactRequest);
		return new ResponseEntity<ContactRequest>(savedContactRequest, HttpStatus.CREATED);
	}

}
