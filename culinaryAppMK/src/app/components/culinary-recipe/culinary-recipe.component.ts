import { Component, Input } from '@angular/core';

@Component({
  selector: 'culinary-recipe',
  templateUrl: './culinary-recipe.component.html',
  styleUrls: ['./culinary-recipe.component.css']
})
export class CulinaryRecipeComponent {
  @Input() image?: string;
  @Input() text?: string;
  @Input() id?: number;

  constructor() { }

  ngOnInit(): void {
  }

}
