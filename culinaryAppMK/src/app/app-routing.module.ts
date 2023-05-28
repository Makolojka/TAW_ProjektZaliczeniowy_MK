import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainPageComponent} from "./components/main-page/main-page.component";
import {
  CulinaryRecipeItemDetailsComponent
} from "./components/culinary-recipe-item-details/culinary-recipe-item-details.component";
import {UserRecipesComponent} from "./components/user-recipes/user-recipes.component";

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
    component: UserRecipesComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
