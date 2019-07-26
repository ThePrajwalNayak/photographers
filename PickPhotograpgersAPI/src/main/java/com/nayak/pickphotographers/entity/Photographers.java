package com.nayak.pickphotographers.entity;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.Size;

import org.hibernate.validator.constraints.NotBlank;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;

@Entity
public class Photographers implements Serializable {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long photographersId;

	@Size(max = 20, min = 5, message = "{photographers.username.size}")
	@NotBlank(message = "{photographers.username.empty}")
	private String userName;

	@Size(max = 20, min = 5, message = "{photographers.password.size}")
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

	public Long getPhotographersId() {
		return photographersId;
	}

	public void setPhotographersId(Long photographersId) {
		this.photographersId = photographersId;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPhoneNumber() {
		return phoneNumber;
	}

	public void setPhoneNumber(String phoneNumber) {
		this.phoneNumber = phoneNumber;
	}

	public String getProfilePicture() {
		return profilePicture;
	}

	public void setProfilePicture(String profilePicture) {
		this.profilePicture = profilePicture;
	}

	public String getDob() {
		return dob;
	}

	public void setDob(String dob) {
		this.dob = dob;
	}

	public Character getSex() {
		return sex;
	}

	public void setSex(Character sex) {
		this.sex = sex;
	}

	public String getAbout() {
		return about;
	}

	public void setAbout(String about) {
		this.about = about;
	}

	public String getLinkFacebook() {
		return linkFacebook;
	}

	public void setLinkFacebook(String linkFacebook) {
		this.linkFacebook = linkFacebook;
	}

	public String getLinkLinkedin() {
		return linkLinkedin;
	}

	public void setLinkLinkedin(String linkLinkedin) {
		this.linkLinkedin = linkLinkedin;
	}

	public String getLinkTwitter() {
		return linkTwitter;
	}

	public void setLinkTwitter(String linkTwitter) {
		this.linkTwitter = linkTwitter;
	}

	public String getLinkInstagram() {
		return linkInstagram;
	}

	public void setLinkInstagram(String linkInstagram) {
		this.linkInstagram = linkInstagram;
	}

	public String getPhotoLink() {
		return photoLink;
	}

	public void setPhotoLink(String photoLink) {
		this.photoLink = photoLink;
	}

	public String getVideoLink() {
		return videoLink;
	}

	public void setVideoLink(String videoLink) {
		this.videoLink = videoLink;
	}

	public String getActivationLink() {
		return activationLink;
	}

	public void setActivationLink(String activationLink) {
		this.activationLink = activationLink;
	}

	public Character getIsActive() {
		return isActive;
	}

	public void setIsActive(Character isActive) {
		this.isActive = isActive;
	}

	public Character getIsApproved() {
		return isApproved;
	}

	public void setIsApproved(Character isApproved) {
		this.isApproved = isApproved;
	}

	public Date getEntDt() {
		return entDt;
	}

	public void setEntDt(Date entDt) {
		this.entDt = entDt;
	}

	public Date getModDt() {
		return modDt;
	}

	public void setModDt(Date modDt) {
		this.modDt = modDt;
	}

}
