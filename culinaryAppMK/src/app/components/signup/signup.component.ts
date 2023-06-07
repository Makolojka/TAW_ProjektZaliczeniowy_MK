import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from "@angular/router";
import {SnackBarComponent} from "../snack-bar/snack-bar.component";
import {MatSnackBar} from "@angular/material/snack-bar";

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

  @ViewChild('cpasswordInput') cpasswordInput: any;
  public cpassword = '';
  isFormSubmitted = false;

  constructor(private authService: AuthService, public router: Router, private _snackBar: MatSnackBar) {}

  ngOnInit() {}

  submitForm() {
    this.isFormSubmitted = true;
    const cpassword = this.cpasswordInput.nativeElement.value;
    const password = this.credentials.password;

    if (this.isFormInvalid()) {
      // Empty fields
      return;
    } else if (this.credentials.password !== cpassword) {
      // Password mismatch
      return;
    } else if (!this.isStrongPassword(password)) {
      // Weak password
      return;
    } else {
      // Form viable, create user
      this.create();
    }
  }

  create() {
    this.authService.createOrUpdate(this.credentials).subscribe((result) => {
      this.router.navigate(['/']);
      return result;
    },
      (error) => {
        if (error.status === 400) {
          this.openSnackBar("Email lub login zajęte.", "");
        } else {
          console.error(error);
        }
      });
  }

  isFormInvalid() {
    return (
      !this.credentials.name ||
      !this.credentials.email ||
      !this.credentials.password
    );
  }

  isStrongPassword(password: string): boolean {
    const strongRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{5,15}$/;
    return strongRegex.test(password);
  }

  openSnackBar(title:string,message:string) {
    this._snackBar.openFromComponent(SnackBarComponent, {data:{Title:title,Text:message},
      duration: 5000,
    });
  }

}

