package com.nayak.pickphotographers.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nayak.pickphotographers.entity.ContactCategory;

public interface ContactCategoryRepository extends JpaRepository<ContactCategory, Long> {

	List<ContactCategory> findByIsActive(Character y);

}
