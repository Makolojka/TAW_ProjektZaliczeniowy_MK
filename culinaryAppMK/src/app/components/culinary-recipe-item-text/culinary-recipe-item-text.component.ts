import {Component, Input} from '@angular/core';

@Component({
  selector: 'culinary-recipe-item-text',
  templateUrl: './culinary-recipe-item-text.component.html',
  styleUrls: ['./culinary-recipe-item-text.component.css']
})
export class CulinaryRecipeItemTextComponent {
  @Input() text?: string;
  @Input() id?: number;
  constructor() { }

  ngOnInit(): void {
  }
}
