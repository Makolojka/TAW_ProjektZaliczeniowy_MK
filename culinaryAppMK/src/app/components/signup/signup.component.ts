import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from "@angular/router";
import { MatSnackBar } from "@angular/material/snack-bar";
import { SnackBarComponent } from "../snack-bar/snack-bar.component";

@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public credentials = {
    name: '',
    email: '',
    password: '',
  };

  @ViewChild('cpasswordInput') cpasswordInput!: ElementRef<HTMLInputElement>;
  isFormSubmitted = false;

  constructor(private authService: AuthService, public router: Router, private _snackBar: MatSnackBar) {}

  ngOnInit() {}

  openSnackBar(title:string,message:string) {
    this._snackBar.openFromComponent(SnackBarComponent, {
      data: { Title: title, Text: message },
      duration: 5000,
    });
  }

  create() {
    if (this.isFormInvalid()) {
      this.openSnackBar("Błąd:", "Wypełnij wszystkie pola");
      return;
    }

    const cpassword = this.cpasswordInput.nativeElement.value;

    if (this.credentials.password !== cpassword) {
      this.openSnackBar("Błąd:", "Hasła się nie zgadzają");
      return;
    }

    this.authService.createOrUpdate(this.credentials).subscribe((result) => {
      return result;
    });
    this.router.navigate(['/']);
  }

  isFormInvalid() {
    return (
      !this.credentials.name ||
      !this.credentials.email ||
      !this.credentials.password
    );
  }
}
