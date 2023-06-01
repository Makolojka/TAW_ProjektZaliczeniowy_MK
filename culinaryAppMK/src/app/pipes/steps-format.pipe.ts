import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stepsFormat'
})
export class StepsFormatPipe implements PipeTransform {
  transform(value: string): string {
    const steps = value.split('Krok ');

    steps.shift();

    //Zabezpieczenie przed brakiem "Krok"
    if (steps.length === 0) {
      return value;
    }
    const formattedSteps = steps.map(step => {
      const stepNumber = step.substring(0, 1);
      const stepText = step.substring(1).trim();
      return `<strong>Krok ${stepNumber}<br></strong> ${stepText}`;
    });
    return formattedSteps.join('<br><br>');
  }
}
