package com.nayak.pickphotographers.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import com.nayak.pickphotographers.service.AdminService;

@RestController
public class AdminController {

	@Autowired
	AdminService adminService;

}
