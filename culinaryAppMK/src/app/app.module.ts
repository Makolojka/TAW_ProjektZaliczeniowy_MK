import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import {HttpClientModule} from "@angular/common/http";
import {DataService} from "./services/data.service";
import { CulinaryRecipeComponent } from './components/culinary-recipe/culinary-recipe.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    CulinaryRecipeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
