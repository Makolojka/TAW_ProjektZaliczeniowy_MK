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

const routes: Routes = [
  {
    path: '',
    component: MainPageComponent,
  },
  {
    path: 'recipe/detail/:id',
    component: CulinaryRecipeItemDetailsComponent
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
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
