import { Component, Input, OnInit } from '@angular/core';
import { Form, NgForm } from '@angular/forms';
import { Category } from 'src/app/core/category.model';
import { Recipe } from 'src/app/core/recipe.model';
import { RecipesService } from './recipes.service';
import { RecipesStore } from './recipes.store';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  adminLogged = true
  editorLogged = true
  categories: Category[] = [];
  favourites: Recipe[] = [];

  constructor(
    public recipesStore: RecipesStore,
    private recipesService: RecipesService,    
  ) { }

  ngOnInit(): void {
    this.recipesService.loadAll();   
  }

  delRecipe(recipe: Recipe) {
    this.recipesService.del(recipe);
  }

  saveRecipe(form: NgForm) {
    if (this.recipesStore.active.id) {
      this.editRecipe(form)
    }
    else {
      this.addRecipe(form)
    }
  }

  addRecipe(form: NgForm){
    const newRecipe = {
      id: this.recipesStore.active.id,
      title: form.value.title,
      description: form.value.description,
      ingredients: form.value.ingredients,
      category_id: form.value.category_id,
      level_id: form.value.level_id,
      time: form.value.time
    }
    this.recipesService.add(newRecipe);
  }

  editRecipe(form: NgForm) {
    const newRecipe = {
      id: this.recipesStore.active.id,
      title: form.value.title,
      description: form.value.description,
      ingredients: form.value.ingredients,
      category_id: form.value.category_id,
      level_id: form.value.level_id,
      time: form.value.time
    }
    this.recipesService.update(newRecipe);
    this.resetActive();
  }

  setActive(recipe: Recipe) {
    this.recipesService.setActive(recipe);
  }

  resetActive() {
    this.recipesService.resetActive();
  }

  filterCat(form: NgForm) {
    const catSearch: number = form.value.cat;
    this.recipesService.search(catSearch);
  }

  addFavourites(recipe: Recipe) {
    this.recipesService.addFav(recipe);   
  }

  delFav(favourite: Recipe) {
    this.recipesService.delFav(favourite)
  }
  
}


