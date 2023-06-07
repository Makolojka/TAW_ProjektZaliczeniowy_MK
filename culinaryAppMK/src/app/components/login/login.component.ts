import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";
import {SnackBarComponent} from "../snack-bar/snack-bar.component";

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public credentials = {
    login: '',
    password: ''
  };

  public logged?: boolean;
  public logout?: boolean;

  constructor(public authService: AuthService,
              private router: Router, private _snackBar: MatSnackBar) {
  }


  ngOnInit(): void {

  }

  openSnackBar(title:string,message:string) {
    this._snackBar.openFromComponent(SnackBarComponent, {data:{Title:title,Text:message},
      duration: 5000,
    });
  }

  signIn() {
    if (!this.credentials.login || !this.credentials.password) {
      this.openSnackBar("Błąd:", "Wypełnij wszystkie pola");
      return;
    }

    return this.authService.authenticate(this.credentials).subscribe(
      (result) => {
        if (!result) {
          this.logged = false;
          this.openSnackBar("Błąd:", "Coś poszło nie tak");
        } else {
          this.logout = false;
          this.credentials = {
            login: '',
            password: ''
          };
          this.router.navigate(['/']);
        }
      },
      (error) => {
        if (error.status === 401 || error.status === 404) {
          this.logged = false;
          this.openSnackBar("Błąd:", "Nieprawidłowe dane");
        } else {
          console.error(error);
        }
      }
    );
  }

}
