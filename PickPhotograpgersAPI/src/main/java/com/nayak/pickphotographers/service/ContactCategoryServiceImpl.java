package com.nayak.pickphotographers.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nayak.pickphotographers.constant.PhotographersConstant;
import com.nayak.pickphotographers.entity.ContactCategory;
import com.nayak.pickphotographers.repository.ContactCategoryRepository;

@Service
public class ContactCategoryServiceImpl implements ContactCategoryService {

	@Autowired
	private ContactCategoryRepository contactRequestRepository;

	@Override
	public List<ContactCategory> getActiveContactCategory() {
		return contactRequestRepository.findByIsActive(PhotographersConstant.Y);
	}

}
