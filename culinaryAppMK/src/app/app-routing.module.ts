import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainPageComponent} from "./components/main-page/main-page.component";
import {
  CulinaryRecipeItemDetailsComponent
} from "./components/culinary-recipe-item-details/culinary-recipe-item-details.component";
import {UserRecipesComponent} from "./components/user-recipes/user-recipes.component";
import {AuthGuard} from "./services/auth.guard";
import {LoginComponent} from "./components/login/login.component";
import {SignupComponent} from "./components/signup/signup.component";
import {UserRecipeAddComponent} from "./components/user-recipe-add/user-recipe-add.component";
import {AboutMeComponent} from "./components/about-me/about-me.component";
import {UserRecipeEditComponent} from "./components/user-recipe-edit/user-recipe-edit.component";
import {UserLikedRecipesComponent} from "./components/user-liked-recipes/user-liked-recipes.component";

const routes: Routes = [
  {
    path: '',
    component: MainPageComponent,
  },
  {
    path: 'recipe/detail/:id',
    component: CulinaryRecipeItemDetailsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'userRecipes',
    component: UserRecipesComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'addRecipe',
    component: UserRecipeAddComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'about',
    component: AboutMeComponent
  },
  {
    path: 'editRecipe/:id',
    component: UserRecipeEditComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'user/liked',
    component: UserLikedRecipesComponent,
    canActivate: [AuthGuard]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
