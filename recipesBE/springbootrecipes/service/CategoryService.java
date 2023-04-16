package com.franceadoni.springbootrecipes.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.franceadoni.springbootrecipes.models.Category;
import com.franceadoni.springbootrecipes.repository.CategoryRepository;

@Service
public class CategoryService {
	
	@Autowired
	private CategoryRepository repository;
	
	public List<Category> listAll() {
		return repository.findAll();
	}
	
	public Category store(Category category) {
		return repository.save(category);
	}
	
	public void delete(int id) {
		repository.deleteById(id);
	}
	
	public Category update(int id, Category newCategory) {
		Category category = repository.findById(id).get();
		category.setTitle(newCategory.getTitle());		
		return repository.save(category);
	}

}
