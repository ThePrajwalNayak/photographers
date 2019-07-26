package com.nayak.pickphotographers.service;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nayak.pickphotographers.constant.PhotographersConstant;
import com.nayak.pickphotographers.entity.ContactRequest;
import com.nayak.pickphotographers.repository.ContactRequestRepository;

@Service
public class ContactRequestServiceImpl implements ContactRequestService {

	@Autowired
	ContactRequestRepository contactRequestRepository;

	@Override
	public List<ContactRequest> getAllContactRequest() {
		return contactRequestRepository.findAll();
	}

	@Override
	public ContactRequest saveContactRequest(ContactRequest contactRequest) {
		contactRequest.setIsRead(PhotographersConstant.Y);
		contactRequest.setEntDt(new Date());
		return contactRequestRepository.save(contactRequest);
	}

	@Override
	public List<ContactRequest> getAllContactRequestBYStatus(Character status) {
		return contactRequestRepository.findByIsRead(status);
	}

}
