package com.nayak.pickphotographers.entity;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.Size;

import org.hibernate.validator.constraints.NotBlank;

@Entity
public class ContactRequest implements Serializable {

	private static final long serialVersionUID = -7368892080214437870L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long contactRequestId;

	@NotBlank(message = "{contactrequest.contactcategory.empty}")
	private String contactCategory;
	
	@Size(max = 30, min = 5, message = "{contactrequest.fullname.size}")
	@NotBlank(message = "{contactrequest.fullname.empty}")
	private String fullName;

	@Size(max = 30, min = 5, message = "{contactrequest.email.size}")
	@NotBlank(message = "{contactrequest.email.empty}")
	private String email;

	@Size(max = 100, min = 5, message = "{contactrequest.mobile.size}")
	@NotBlank(message = "{contactrequest.mobile.empty}")
	private String mobile;

	@Size(max = 500, min = 5, message = "{contactrequest.message.size}")
	@NotBlank(message = "{contactrequest.message.empty}")
	private String message;

	private char isRead;

	private Date entDt;

	public Long getContactRequestId() {
		return contactRequestId;
	}

	public void setContactRequestId(Long contactRequestId) {
		this.contactRequestId = contactRequestId;
	}

	public String getContactCategory() {
		return contactCategory;
	}

	public void setContactCategory(String contactCategory) {
		this.contactCategory = contactCategory;
	}

	public String getFullName() {
		return fullName;
	}

	public void setFullName(String fullName) {
		this.fullName = fullName;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getMobile() {
		return mobile;
	}

	public void setMobile(String mobile) {
		this.mobile = mobile;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public char getIsRead() {
		return isRead;
	}

	public void setIsRead(char isRead) {
		this.isRead = isRead;
	}

	public Date getEntDt() {
		return entDt;
	}

	public void setEntDt(Date entDate) {
		this.entDt = entDate;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}

	@Override
	public String toString() {
		return "ContactRequest [contactRequestId=" + contactRequestId + ", contactCategory=" + contactCategory
				+ ", fullName=" + fullName + ", email=" + email + ", mobile=" + mobile + ", message=" + message
				+ ", isRead=" + isRead + ", entDt=" + entDt + "]";
	}
	
	

}
