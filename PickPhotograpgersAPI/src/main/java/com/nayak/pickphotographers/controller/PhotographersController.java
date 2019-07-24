package com.nayak.pickphotographers.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.nayak.pickphotographers.entity.Photographers;
import com.nayak.pickphotographers.service.PhotographersService;

@RestController
public class PhotographersController {

	@Autowired
	PhotographersService photographersService;

	@GetMapping("/photographers")
	public ResponseEntity<List<Photographers>> getAllNotes() {
		List<Photographers> photographers = photographersService.getAllPhotographers();
		return new ResponseEntity<List<Photographers>>(photographers, HttpStatus.OK);
	}

	@PostMapping("/photographers")
	public ResponseEntity<Photographers> savePhotographers(@RequestBody Photographers photographers) {
		Photographers savedPhotographers = photographersService.savePhotgraphers(photographers);
		return new ResponseEntity<Photographers>(savedPhotographers, HttpStatus.CREATED);
	}

	@PutMapping("/photographers")
	public ResponseEntity<Photographers> updatePhotographers(@RequestBody Photographers photographers) {
		Photographers updatedPhotographers = photographersService.updatePhotographers(photographers);
		return new ResponseEntity<Photographers>(updatedPhotographers, HttpStatus.OK);
	}

	@DeleteMapping("/photographers")
	public ResponseEntity<Photographers> deletePhotographers(@RequestBody Photographers photographers) {
		Photographers deletedPhotographers = photographersService.deletePhotographers(photographers);
		return new ResponseEntity<Photographers>(deletedPhotographers, HttpStatus.OK);
	}

}
