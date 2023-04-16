package com.franceadoni.springbootrecipes.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.franceadoni.springbootrecipes.models.Recipe;

public interface RecipeRepository extends JpaRepository<Recipe, Integer>{

}
