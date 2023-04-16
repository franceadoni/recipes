import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable, LOCALE_ID } from "@angular/core";
import { Category } from "src/app/core/category.model";
import { Recipe } from "src/app/core/recipe.model";
import { environment } from "src/environments/environment";
import { RecipesStore } from "./recipes.store";

@Injectable({
    providedIn: 'root'
  })
  
  export class RecipesService {
  
    constructor(
      private httpClient: HttpClient,
      private recipesStore: RecipesStore
    ) { }
  
    loadAll() {
      const url = environment.baseUrl + "/api/recipes";
      this.httpClient.get<Recipe[]>(url, { headers: new HttpHeaders({
        'Content-Type': 'application/json'         
        }), withCredentials: true}).subscribe( data => this.recipesStore.loadAll(data) );
    }  
        
    del(recipe: Recipe) {
      const url = environment.recipesUrl + "/" + recipe.id;
      this.httpClient.delete<any>(url).subscribe ( () => this.recipesStore.del(recipe));
    }

    add(recipe: Recipe) {
      const url = environment.recipesUrl;
      this.httpClient.post<Recipe>(url, recipe).subscribe( data => this.recipesStore.add(data));
    }
  
    update(recipe: Recipe) {
      const url = environment.recipesUrl +'/'+ recipe.id;
      this.httpClient.put<Recipe>(url, recipe).subscribe( data => this.recipesStore.update(data));
    }
  
    setActive(recipe: Recipe) {
      this.recipesStore.setActive(recipe);
    }
  
    resetActive() {
      this.recipesStore.resetActive();
    }

    search(n: number) {
        const url = environment.baseUrl + "/api/recipes";
        this.httpClient.get<Recipe[]>(url).subscribe( r => this.recipesStore.search(r, n)) 
    }   

    addFav(recipe: Recipe) {
        this.recipesStore.addFav(recipe);       
    }

    delFav(favourite: Recipe) {
        const url = environment.recipesUrl + "/" + favourite.id;
        this.httpClient.delete<any>(url).subscribe ( () => this.recipesStore.del(favourite)); 
    }

}
  