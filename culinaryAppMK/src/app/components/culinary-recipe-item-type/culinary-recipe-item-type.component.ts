import {Component, Input} from '@angular/core';

@Component({
  selector: 'culinary-recipe-item-type',
  templateUrl: './culinary-recipe-item-type.component.html',
  styleUrls: ['./culinary-recipe-item-type.component.css']
})
export class CulinaryRecipeItemTypeComponent {
  @Input() foodType?: string;
  constructor() { }

  ngOnInit(): void {
  }
}
