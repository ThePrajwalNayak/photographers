package com.nayak.pickphotographers.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.nayak.pickphotographers.entity.ContactRequest;

@Repository
public interface ContactRequestRepository extends JpaRepository<ContactRequest, Long> {

	List<ContactRequest> findByIsRead(char c);

}
