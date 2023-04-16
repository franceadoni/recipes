package com.franceadoni.springbootrecipes.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
//import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.franceadoni.springbootrecipes.models.Level;
import com.franceadoni.springbootrecipes.service.LevelService;

@RestController
public class LevelController {
	
	@Autowired
	private LevelService service;
	
	@GetMapping("/api/levels")
	//@PreAuthorize("hasRole('USER') or hasRole('MODERATOR') or hasRole('ADMIN')")
	@CrossOrigin(origins = "*")
	public List<Level> index() {
		return service.listAll();
	}
	
	@PostMapping("/api/levels")
	@ResponseStatus(code = HttpStatus.CREATED)
	@CrossOrigin(origins = "*")
	//@PreAuthorize("hasRole('MODERATOR') or hasRole('ADMIN')")
	public Level create(@RequestBody Level level) {
		return service.store(level);
	}
	
	@DeleteMapping("/api/levels/{id}")
	@ResponseStatus(code = HttpStatus.NO_CONTENT)
	@CrossOrigin(origins = "*")
	//@PreAuthorize("hasRole('ADMIN')")
	public void delete(@PathVariable int id) {
		service.delete(id);
	}
	
	@PutMapping("/api/levels/{id}")
	@CrossOrigin(origins = "*")
	//@PreAuthorize("hasRole('ADMIN')")
	public Level update(@RequestBody Level level, @PathVariable int id) {
		return service.update(id, level);		
	}

}
