import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/auth.guard';
import { CategoriesComponent } from './features/categories/categories.component';
import { HomeComponent } from './features/home/home.component';
import { LevelsComponent } from './features/levels/levels.component';
import { LoginComponent } from './features/login/login.component';
import { RecipeComponent } from './features/recipe/recipe.component';
import { RecipesComponent } from './features/recipes/recipes.component';
import { RegisterComponent } from './features/register/register.component';

const routes: Routes = [{
  path: "", component: HomeComponent  
}, {
  path: "recipes", component: RecipesComponent,
  canActivate: [AuthGuard]
}, {
  path: "categories", component: CategoriesComponent
}, {
  path: "levels", component: LevelsComponent
}, {
  path: "register", component: RegisterComponent
}, {
  path: "recipes/:id", component: RecipeComponent
}, {
  path: "login", component: LoginComponent  
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
