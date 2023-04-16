package com.franceadoni.springbootrecipes.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.franceadoni.springbootrecipes.models.Category;

public interface CategoryRepository extends JpaRepository<Category, Integer> {

}
