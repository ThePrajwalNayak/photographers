package com.nayak.pickphotographers.service;

import java.util.List;

import com.nayak.pickphotographers.entity.ContactRequest;

public interface ContactRequestService {

	public List<ContactRequest> getAllContactRequest();

	public ContactRequest saveContactRequest(ContactRequest contactRequest);

	public List<ContactRequest> getAllContactRequestBYStatus(Character status);


}
