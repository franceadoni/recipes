import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/core/category.model';
import { Level } from 'src/app/core/level.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Recipe } from 'src/app/core/recipe.model';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {

  recipe$!: Observable<any>
  categories: Category[] = [];
  levels: Level[] = [];

  constructor(
    private httpClient: HttpClient,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params["id"];
    const url = environment.recipesUrl + "/" + id;
    this.recipe$ = this.httpClient.get<Recipe>(url);
  }

}
