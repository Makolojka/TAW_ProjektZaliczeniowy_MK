import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { SnackBarComponent } from '../components/snack-bar/snack-bar.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Directive({
  selector: '[RequiredInputs]'
})
export class RequiredInputsDirective {
  @Input() recipeId: string = '';
  private userId = this.authService.getUserId();

  constructor(
    private el: ElementRef,
    private authService: AuthService,
    private dataService: DataService,
    private router: Router,
    private _snackBar: MatSnackBar
  ) {}

  //Snackbar msg
  openSnackBar(title: string, message: string) {
    this._snackBar.openFromComponent(SnackBarComponent, {
      data: { Title: title, Text: message },
      duration: 5000
    });
  }

  @HostListener('click')
  onButtonClick() {
    const form = this.el.nativeElement.closest('form');
    const inputs: HTMLInputElement[] = Array.from(form.getElementsByTagName('input'));

    //Finds all empty inputs
    const emptyInputs = inputs.filter((input: HTMLInputElement) => !input.value);

    if (emptyInputs.length > 0) {
      emptyInputs.forEach((input: HTMLInputElement) => {
        input.classList.add('error');
      });
      this.openSnackBar('Błąd:', 'Wypełnij wszystkie pola');
    } else {
      if (this.authService.isLoggedIn()) {
        const credentials = {
          userId: this.userId,
          id: this.recipeId,
          image: form.querySelector('#image').value,
          text: form.querySelector('#text').value,
          title: form.querySelector('#title').value,
          ingredients: form.querySelector('#ingredients').value,
          challenge: form.querySelector('#challenge').value,
          foodType: form.querySelector('#foodType').value,
          timeToPrepare: form.querySelector('#timeToPrepare').value,
        };

        // Update or create?
        const isCreateForm = form.getAttribute('action') === 'post';

        if (isCreateForm) {
          this.dataService.createPost(credentials).subscribe((result) => {
            this.router.navigate(['/userRecipes']);
          });
        } else {
          this.dataService.updatePost(credentials).subscribe((result) => {
            this.router.navigate(['/userRecipes']);
          });
        }
      }
    }
  }
}
