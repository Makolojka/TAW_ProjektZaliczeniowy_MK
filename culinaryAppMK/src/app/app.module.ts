import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import {HttpClientModule} from "@angular/common/http";
import {DataService} from "./services/data.service";
import { CulinaryRecipeComponent } from './components/culinary-recipe/culinary-recipe.component';
import { CulinaryRecipeItemTextComponent } from './components/culinary-recipe-item-text/culinary-recipe-item-text.component';
import { CulinaryRecipeItemImageComponent } from './components/culinary-recipe-item-image/culinary-recipe-item-image.component';
import { CulinaryRecipeItemDetailsComponent } from './components/culinary-recipe-item-details/culinary-recipe-item-details.component';
import { SummaryPipe } from './pipes/summary.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    CulinaryRecipeComponent,
    CulinaryRecipeItemTextComponent,
    CulinaryRecipeItemImageComponent,
    CulinaryRecipeItemDetailsComponent,
    SummaryPipe
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
