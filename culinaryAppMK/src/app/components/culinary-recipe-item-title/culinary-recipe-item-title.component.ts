import {Component, Input} from '@angular/core';

@Component({
  selector: 'culinary-recipe-item-title',
  templateUrl: './culinary-recipe-item-title.component.html',
  styleUrls: ['./culinary-recipe-item-title.component.css']
})
export class CulinaryRecipeItemTitleComponent {
  @Input() title?: string;
  constructor() { }

  ngOnInit(): void {
  }
}
