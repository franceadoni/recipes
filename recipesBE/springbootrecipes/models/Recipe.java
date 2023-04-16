package com.franceadoni.springbootrecipes.models;

//import java.io.Serializable;
import jakarta.persistence.Entity;
//import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
//import jakarta.persistence.JoinColumn;
//import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

//import java.io.Serializable;
//import jakarta.persistence.Entity;
//import jakarta.persistence.GeneratedValue;
//import jakarta.persistence.GenerationType;
//import jakarta.persistence.Id;
//import jakarta.persistence.JoinColumn;
//import jakarta.persistence.ManyToOne;
//import jakarta.persistence.Table;
//import lombok.Getter;
//import lombok.NoArgsConstructor;
//import lombok.Setter;



@Getter
@Setter
@NoArgsConstructor
@Entity
@Table (name = "recipes")
public class Recipe /*implements Serializable*/{
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	private String title;
	private String description;
	private String ingredients;
	private int category_id;
	private int level_id;
	private int time;
	
//   @ManyToOne
//   @JoinColumn(name = "category_id" )
//   private Category category;
//   
//   @ManyToOne
//   @JoinColumn(name = "level_id" )
//   private Level level;

}




