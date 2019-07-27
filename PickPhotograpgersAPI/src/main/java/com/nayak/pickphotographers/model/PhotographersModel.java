package com.nayak.pickphotographers.model;

import java.util.Date;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.Size;

import org.hibernate.validator.constraints.NotBlank;

public class PhotographersModel {

	private Long photographersId;

	@Size(max = 20, min = 5, message = "{photographers.username.size}")
	@NotBlank(message = "{photographers.username.empty}")
	private String userName;

	@NotBlank(message = "{photographers.password.empty}")
	private String password;

	@Size(max = 20, min = 3, message = "{photographers.firstname.size}")
	@NotBlank(message = "{photographers.firstname.empty}")
	private String firstName;

	@Size(max = 20, min = 3, message = "{photographers.lastname.size}")
	@NotBlank(message = "{photographers.lastname.empty}")
	private String lastName;

	@Size(max = 100, min = 3, message = "{photographers.location.size}")
	private String location;

	@Size(max = 40, min = 5, message = "{photographers.email.size}")
	@NotBlank(message = "{photographers.email.empty}")
	private String email;

	@Size(max = 20, min = 8, message = "{photographers.phonenumber.size}")
	private String phoneNumber;

	private String profilePicture;

	private String dob;

	private Character sex;

	@Size(max = 500, min = 100, message = "{photographers.about.size}")
	@NotBlank(message = "{photographers.about.empty}")
	private String about;

	@Size(max = 100, min = 10, message = "{photographers.linkfacebook.size}")
	private String linkFacebook;

	@Size(max = 100, min = 10, message = "{photographers.linklinkedin.size}")
	private String linkLinkedin;

	@Size(max = 100, min = 10, message = "{photographers.linktwitter.size}")
	private String linkTwitter;

	@Size(max = 100, min = 10, message = "{photographers.linkinstagram.size}")
	private String linkInstagram;

	@Size(max = 100, min = 5, message = "{photographers.photolink.size}")
	private String photoLink;

	@Size(max = 100, min = 5, message = "{photographers.videolink.size}")
	private String videoLink;

	private String activationLink;
	private Character isActive;
	private Character isApproved;
	private Date entDt;
	private Date modDt;
}
