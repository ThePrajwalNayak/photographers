package com.nayak.pickphotographers.entity;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;

@Entity
public class Photographers implements Serializable {
	
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long photographersId;
    @NotNull(message="Username cannot be empty")
	private String userName;
    @NotNull(message="Password cannot be empty")
	private String password;
    @NotNull(message="Firstname cannot be empty")
	private String firstName;
    @NotNull(message="Lastname cannot be empty")
	private String lastName;
	private String location;
	@NotNull(message="Email cannot be empty")
	private String email;
	private String phoneNumber;
	private String profilePicture;
	private String dob;
	private Character sex;
	private String about;
	private String linkFacebook;
	private String linkLinkedin;
	private String linkTwitter;
	private String linkInstagram;
	private String photoLink;
	private String videoLink;
	private String activationLink;
	private Character isActive;
	private Date entDt;	
	private Date modDt;
	private Character saveStatus;
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
	public Character getSaveStatus() {
		return saveStatus;
	}
	public void setSaveStatus(Character saveStatus) {
		this.saveStatus = saveStatus;
	}

	

}
