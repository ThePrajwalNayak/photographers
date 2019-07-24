package com.nayak.pickphotographers.service;

import java.util.List;

import com.nayak.pickphotographers.entity.Photographers;

public interface PhotographersService {

	public List<Photographers> getAllPhotographers();

	public Photographers savePhotgraphers(Photographers photographers);

	public Photographers updatePhotographers(Photographers photographers);

	public Photographers deletePhotographers(Photographers photographers);

}
