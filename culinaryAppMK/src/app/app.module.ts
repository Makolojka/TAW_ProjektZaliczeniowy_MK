import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {DataService} from "./services/data.service";
import { CulinaryRecipeComponent } from './components/culinary-recipe/culinary-recipe.component';
import { CulinaryRecipeItemTextComponent } from './components/culinary-recipe-item-text/culinary-recipe-item-text.component';
import { CulinaryRecipeItemImageComponent } from './components/culinary-recipe-item-image/culinary-recipe-item-image.component';
import { CulinaryRecipeItemDetailsComponent } from './components/culinary-recipe-item-details/culinary-recipe-item-details.component';
import { SummaryPipe } from './pipes/summary.pipe';
import { UserRecipesComponent } from './components/user-recipes/user-recipes.component';
import { SearchBarComponent } from './shared/search-bar/search-bar.component';
import {FormsModule} from "@angular/forms";
import { FilterTextPipe } from './pipes/filter-text.pipe';
import { TextFormatDirective } from './directives/text-format.directive';
import {AuthService} from "./services/auth.service";
import {AuthInterceptor} from "./services/auth.interceptor";
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { UserRecipeAddComponent } from './components/user-recipe-add/user-recipe-add.component';
import { CulinaryRecipeItemTitleComponent } from './components/culinary-recipe-item-title/culinary-recipe-item-title.component';
import {MatMenuModule} from '@angular/material/menu';
import { FoodCarouselComponent } from './components/food-carousel/food-carousel.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { UserRecipeDeleteComponent } from './components/user-recipe-delete/user-recipe-delete.component';
import { StepsFormatPipe } from './pipes/steps-format.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    CulinaryRecipeComponent,
    CulinaryRecipeItemTextComponent,
    CulinaryRecipeItemImageComponent,
    CulinaryRecipeItemDetailsComponent,
    SummaryPipe,
    UserRecipesComponent,
    SearchBarComponent,
    FilterTextPipe,
    TextFormatDirective,
    LoginComponent,
    SignupComponent,
    NavbarComponent,
    UserRecipeAddComponent,
    CulinaryRecipeItemTitleComponent,
    FoodCarouselComponent,
    AboutMeComponent,
    UserRecipeDeleteComponent,
    StepsFormatPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule
  ],
  providers: [
    DataService,
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
