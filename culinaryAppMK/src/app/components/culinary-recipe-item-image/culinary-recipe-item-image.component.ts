import {Component, Input} from '@angular/core';

@Component({
  selector: 'culinary-recipe-item-image',
  templateUrl: './culinary-recipe-item-image.component.html',
  styleUrls: ['./culinary-recipe-item-image.component.css']
})
export class CulinaryRecipeItemImageComponent {
  @Input() image?: string;
}
