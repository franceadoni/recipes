import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { HomeComponent } from './features/home/home.component';
import { RecipesComponent } from './features/recipes/recipes.component';
import { CategoriesComponent } from './features/categories/categories.component';
import { LevelsComponent } from './features/levels/levels.component';
import { RecipeComponent } from './features/recipe/recipe.component';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './features/register/register.component';
import { FormsModule } from '@angular/forms';
import { AuthGuard } from './core/auth.guard';
import { RecipeFormComponent } from './features/recipe-form/recipe-form.component';
import { LoginComponent } from './features/login/login.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    HomeComponent,
    RecipesComponent,
    CategoriesComponent,
    LevelsComponent,
    RecipeComponent,
    RegisterComponent,
    RecipeFormComponent,
    LoginComponent,        
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
