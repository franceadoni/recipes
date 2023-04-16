package com.franceadoni.springbootrecipes.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.franceadoni.springbootrecipes.repository.RecipeRepository;
import com.franceadoni.springbootrecipes.models.Recipe;

@Service
public class RecipeService {
	
	@Autowired
	private RecipeRepository repository;
	
	public List<Recipe> listAll() {
		return repository.findAll();
	}
	
	public Recipe find(int id) {
		return repository.findById(id).get();
	}
	
	public Recipe store(Recipe recipe) {
		return repository.save(recipe);
	}
	
	public void delete(int id) {
		repository.deleteById(id);
	}
	
	public Recipe update(int id, Recipe newRecipe) {
		Recipe recipe = repository.findById(id).get();
		recipe.setTitle(newRecipe.getTitle());
		recipe.setDescription(newRecipe.getDescription());
		recipe.setIngredients(newRecipe.getIngredients());
		recipe.setCategory_id(newRecipe.getCategory_id());
		recipe.setTime(newRecipe.getTime());
		return repository.save(recipe);
	}
	

}
