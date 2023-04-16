import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Recipe } from 'src/app/core/recipe.model';

@Component({
  selector: 'app-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.css']
})
export class RecipeFormComponent implements OnInit {

  @Input() active: Recipe = {} as Recipe
  @Output() resetActive: EventEmitter<any>= new EventEmitter<any>();
  @Output() saveRecipe: EventEmitter<NgForm> = new EventEmitter<NgForm>();

  constructor() { }

  ngOnInit(): void {
  }

}
