package com.nayak.pickphotographers.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.nayak.pickphotographers.entity.Photographers;

@Repository
public interface PhotographersRepository extends JpaRepository<Photographers, Long> {


	Photographers findAllByPhotographersId(Long photographersId);

	Optional<Photographers> findByUserNameAndPassword(String username, String password);

}
