import {Directive, ElementRef, HostListener} from '@angular/core';
import {SnackBarComponent} from "../components/snack-bar/snack-bar.component";
import {MatSnackBar} from "@angular/material/snack-bar";

@Directive({
  selector: '[PasswordStrengthDirective]'
})
export class PasswordStrengthDirective {

  constructor(private elementRef: ElementRef, private _snackBar: MatSnackBar) { }

  openSnackBar(title:string,message:string) {
    this._snackBar.openFromComponent(SnackBarComponent, {
      data: { Title: title, Text: message },
      duration: 5000,
    });
  }

  @HostListener('input')
  onInput() {
    const password = this.elementRef.nativeElement.value;
    const strongRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{5,15}$/;
    const isStrong = strongRegex.test(password);

    if (!isStrong) {
      console.log('Weak pass');
      this.openSnackBar("Wypełnij wszystkie pola", "");
    } else {
      console.log('Strong password');
    }
  }

}
