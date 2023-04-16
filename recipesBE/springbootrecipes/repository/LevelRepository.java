package com.franceadoni.springbootrecipes.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.franceadoni.springbootrecipes.models.Level;

public interface LevelRepository extends JpaRepository<Level, Integer> {

}
