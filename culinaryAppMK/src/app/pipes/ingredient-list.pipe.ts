import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ingredientList'
})
export class IngredientListPipe implements PipeTransform {
  transform(value: string): string {
    const ingredients = value.split(';');

    const formattedIngredients = ingredients.map(ingredient => {
      const trimmedIngredient = ingredient.trim();
      return `${trimmedIngredient}`;
    });

    return formattedIngredients.join('');
  }
}
