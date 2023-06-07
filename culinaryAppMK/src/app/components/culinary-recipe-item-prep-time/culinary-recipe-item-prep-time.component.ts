import {Component, Input} from '@angular/core';

@Component({
  selector: 'culinary-recipe-item-prep-time',
  templateUrl: './culinary-recipe-item-prep-time.component.html',
  styleUrls: ['./culinary-recipe-item-prep-time.component.css']
})
export class CulinaryRecipeItemPrepTimeComponent {
  @Input() timeToPrepare?: string;
}
