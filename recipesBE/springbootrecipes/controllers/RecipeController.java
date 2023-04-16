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

import com.franceadoni.springbootrecipes.models.Recipe;
import com.franceadoni.springbootrecipes.service.RecipeService;

@RestController
public class RecipeController {
	
	@Autowired
	private RecipeService service;
	
	@GetMapping("/api/recipes")
	//@PreAuthorize("hasRole('USER') or hasRole('MODERATOR') or hasRole('ADMIN')")
	@CrossOrigin(origins = "http://localhost:4200", allowCredentials = "true")
	
	public List<Recipe> index() {
		return service.listAll();
	}	
	
	@GetMapping("/api/recipes/{id}")	
	@CrossOrigin(origins = "*")
	//@PreAuthorize("hasRole('ADMIN')")
	public Recipe show(@PathVariable int id) {
		return service.find(id);
	}
	
	
	@PostMapping("/api/recipes")
	@ResponseStatus(code = HttpStatus.CREATED)
	@CrossOrigin(origins = "*")
	//@PreAuthorize("hasRole('MODERATOR') or hasRole('ADMIN')")
	public Recipe create(@RequestBody Recipe recipe) {
		return service.store(recipe);
	}
	
	@DeleteMapping("/api/recipes/{id}")
	@ResponseStatus(code = HttpStatus.NO_CONTENT)
	@CrossOrigin(origins = "*")
	//@PreAuthorize("hasRole('ADMIN')")
	public void delete(@PathVariable int id) {
		service.delete(id);
	}
	
	@PutMapping("/api/recipes/{id}")
	@CrossOrigin(origins = "*")
	//@PreAuthorize("hasRole('MODERATOR') or hasRole('ADMIN')")
	public Recipe update(@RequestBody Recipe recipe, @PathVariable int id) {
		return service.update(id, recipe);		
	}
	
	

}
