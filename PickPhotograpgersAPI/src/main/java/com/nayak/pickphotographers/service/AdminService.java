package com.nayak.pickphotographers.service;

import java.util.List;

import javax.validation.Valid;

import com.nayak.pickphotographers.entity.ContactRequest;
import com.nayak.pickphotographers.entity.Photographers;
import com.nayak.pickphotographers.model.IdModel;

public interface AdminService {

	List<Photographers> getNewPhotogrpahers();

	void deletePhotographers(@Valid Long photographerId);

	void deleteContactRequest(@Valid ContactRequest contactRequest);

	Photographers approveNewPhotographers(@Valid Photographers photographers);

	List<ContactRequest> getAllContactRequest();

	List<ContactRequest> getNewContactRequest();

	Integer approveContactRequest(List<ContactRequest> contactRequests);

}
