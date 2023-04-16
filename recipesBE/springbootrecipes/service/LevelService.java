package com.franceadoni.springbootrecipes.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.franceadoni.springbootrecipes.models.Level;
import com.franceadoni.springbootrecipes.repository.LevelRepository;

@Service
public class LevelService {
	
	@Autowired
	private LevelRepository repository;
	
	public List<Level> listAll() {
		return repository.findAll();
	}
	
	public Level store(Level level) {
		return repository.save(level);
	}
	
	public void delete(int id) {
		repository.deleteById(id);
	}
	
	public Level update(int id, Level newLevel) {
		Level level = repository.findById(id).get();
		level.setName(newLevel.getName());		
		return repository.save(level);
	}

}
