package com.nayak.pickphotographers.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nayak.pickphotographers.entity.ContactCategory;
import com.nayak.pickphotographers.service.ContactCategoryService;

@RestController
public class ContactCategoryController {

	@Autowired
	private ContactCategoryService contactCategoryService;

	@GetMapping("/contactCategory")
	public ResponseEntity<List<ContactCategory>> getAllActiveContactCategory() {
		List<ContactCategory> contactCategories = contactCategoryService.getActiveContactCategory();
		return new ResponseEntity<List<ContactCategory>>(contactCategories, HttpStatus.OK);
	}

}
