package com.nayak.pickphotographers.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nayak.pickphotographers.entity.ContactRequest;
import com.nayak.pickphotographers.entity.Photographers;
import com.nayak.pickphotographers.service.AdminService;

@RestController
@RequestMapping("/admin")
public class AdminController {

	@Autowired
	AdminService adminService;

	@GetMapping("/newPotogrpahers")
	public ResponseEntity<List<Photographers>> getNewPhotogrpahers() {
		List<Photographers> photographers = adminService.getNewPhotogrpahers();
		return new ResponseEntity<List<Photographers>>(photographers, HttpStatus.OK);
	}
	
	@PutMapping("/approveNewPhotographers")
	public ResponseEntity<Photographers> approveNewPhotographers(@Valid @RequestBody Photographers photographers){
		Photographers updatedPhotographers = adminService.approveNewPhotographers(photographers);
		return new ResponseEntity<Photographers>(updatedPhotographers, HttpStatus.OK);
	}
	
	@DeleteMapping("/photographers")
	public ResponseEntity<String> deletePhotographers(@Valid @RequestBody Photographers photographers){
		adminService.deletePhotographers(photographers);
		return new ResponseEntity<String>("Deleted", HttpStatus.OK);
	}
	
	@DeleteMapping("/contactRequest")
	public ResponseEntity<String> deleteContactRequest(@Valid @RequestBody ContactRequest contactRequest){
		adminService.deleteContactRequest(contactRequest);
		return new ResponseEntity<String>("Deleted", HttpStatus.OK);
	}

}