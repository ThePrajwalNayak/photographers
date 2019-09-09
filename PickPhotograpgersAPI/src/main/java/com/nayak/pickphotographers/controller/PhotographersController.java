package com.nayak.pickphotographers.controller;

import java.util.ArrayList;
import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nayak.pickphotographers.entity.Photographers;
import com.nayak.pickphotographers.service.PhotographersService;

@RestController
@CrossOrigin(origins = "*")
public class PhotographersController {

	@Autowired
	PhotographersService photographersService;

	@GetMapping("/photographers")
	public ResponseEntity<List<Photographers>> getAllNotes() {
		List<Photographers> photographers = photographersService.getAllPhotographers();
		return new ResponseEntity<List<Photographers>>(photographers, HttpStatus.OK);
	}
	
	@GetMapping("/photographers/{photographersId}")
	public ResponseEntity<Photographers> getPhotographersById(@PathVariable("photographersId") Long photographersId) {
		Photographers photographers = photographersService.getPhotographersById(photographersId);
		return new ResponseEntity<Photographers>(photographers, HttpStatus.OK);
	}
	
	@GetMapping("/topPhotographers")
	public ResponseEntity<List<Photographers>> getTopPhotographers() {
//		List<Photographers> photographers = photographersService.getTopPhotographers();
		System.out.println("topPhotographers");
		List<Photographers> photographers = new ArrayList<Photographers>();
		Photographers p = new Photographers();
		p.setUserName("iamRaj");
		p.setAbout("hahahahahha");
		photographers.add(p);
		return new ResponseEntity<List<Photographers>>(photographers, HttpStatus.OK);
	}
	
    @RequestMapping("/")
    String index() {
        return "Hello world";
    }

	@PostMapping("/photographers")
	public ResponseEntity<Photographers> savePhotographers(@Valid @RequestBody Photographers photographers) {
		Photographers savedPhotographers = photographersService.savePhotgraphers(photographers);
		return new ResponseEntity<Photographers>(savedPhotographers, HttpStatus.CREATED);
	}

	
	@PutMapping("/photographers")
	public ResponseEntity<Photographers> updatePhotographers(@Valid @RequestBody Photographers photographers) {
		Photographers updatedPhotographers = photographersService.updatePhotographers(photographers);
		return new ResponseEntity<Photographers>(updatedPhotographers, HttpStatus.OK);
	}

}
