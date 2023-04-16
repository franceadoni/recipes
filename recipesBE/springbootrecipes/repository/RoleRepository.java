package com.franceadoni.springbootrecipes.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.franceadoni.springbootrecipes.models.ERole;
import com.franceadoni.springbootrecipes.models.Role;

@Repository
public interface RoleRepository extends JpaRepository<Role, Long>{
	
	Optional<Role> findByName(ERole name);

}
