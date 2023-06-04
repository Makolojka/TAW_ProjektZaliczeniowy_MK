import {Component, Input} from '@angular/core';

@Component({
  selector: 'culinary-recipe-item-image',
  templateUrl: './culinary-recipe-item-image.component.html',
  styleUrls: ['./culinary-recipe-item-image.component.css']
})
export class CulinaryRecipeItemImageComponent {
  @Input() image?: string;
  fallbackImage = 'https://www.maczfit.pl/blog/wp-content/uploads/2021/03/fast_food-960x639.jpeg';

  //Secure for incorrect image url
  handleImageError() {
    this.image = this.fallbackImage;
  }
}
