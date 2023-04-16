import { Injectable } from "@angular/core"
import { Category } from "src/app/core/category.model"
import { Recipe } from "src/app/core/recipe.model"

@Injectable({
    providedIn: 'root'
  })
  
  export class RecipesStore {
  
    
    recipes: Recipe[] = []
    active: Recipe = {} as Recipe
    favourites: Recipe[] = []
  
    loadAll(recipes: Recipe[]) {
      this.recipes = recipes
    }

    del(recipe: Recipe) {
      this.recipes = this.recipes.filter( r => r.id !== recipe.id);
    }

    add(recipe: Recipe) {
      this.recipes = [...this.recipes, recipe];
    }
  
    update(recipe: Recipe) {
      this.recipes = this.recipes.map( r => r.id === recipe.id ? recipe : r);
    }
  
    setActive(recipe: Recipe) {
      this.active = recipe;
    }
  
    resetActive() {
      this.active = {} as Recipe;
    }

    search(categories: Category[], catSearch: number) {
        this.recipes = this.recipes.filter(r => r.category_id == catSearch );
    }  
    
    addFav(recipe: Recipe) {
        console.log('miao')
        console.log(this.favourites)
        this.favourites.push(recipe);        
    }  
    
    delFav(favourite: Recipe) {
        this.favourites = this.favourites.filter( f => f.id !== favourite.id);
      }
     
  }