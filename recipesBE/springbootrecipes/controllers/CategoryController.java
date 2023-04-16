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

import com.franceadoni.springbootrecipes.models.Category;
import com.franceadoni.springbootrecipes.service.CategoryService;

@RestController
public class CategoryController {
	
	@Autowired
	private CategoryService service;
	
	@GetMapping("/api/categories")
	//@PreAuthorize("hasRole('USER') or hasRole('MODERATOR') or hasRole('ADMIN')")
	@CrossOrigin(origins = "*")
	public List<Category> index() {
		return service.listAll();
	}
	
	@PostMapping("/api/categories")
	@ResponseStatus(code = HttpStatus.CREATED)
	@CrossOrigin(origins = "*")
	//@PreAuthorize("hasRole('MODERATOR') or hasRole('ADMIN')")
	public Category create(@RequestBody Category category) {
		return service.store(category);
	}
	
	@DeleteMapping("/api/categories/{id}")
	@ResponseStatus(code = HttpStatus.NO_CONTENT)
	@CrossOrigin(origins = "*")
	//@PreAuthorize("hasRole('ADMIN')")
	public void delete(@PathVariable int id) {
		service.delete(id);
	}
	
	@PutMapping("/api/categories/{id}")
	@CrossOrigin(origins = "*")
	//@PreAuthorize("hasRole('ADMIN')")
	public Category update(@RequestBody Category category, @PathVariable int id) {
		return service.update(id, category);		
	}


}
