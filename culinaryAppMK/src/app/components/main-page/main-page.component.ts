import { Component, OnInit} from '@angular/core';
import { DataService } from '../../services/data.service';
import {SnackBarComponent} from "../snack-bar/snack-bar.component";
import {MatSnackBar} from "@angular/material/snack-bar";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
@Component({
  selector: 'main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit{
  public items$: any;
  public filterText: string = '';

  constructor(private service: DataService, private _snackBar: MatSnackBar, public authService: AuthService,
              private router: Router) {
  }

  ngOnInit() {
    // this.getAll();
  }

  openSnackBar(title:string,message:string) {
    this._snackBar.openFromComponent(SnackBarComponent, {data:{Title:title,Text:message},
      duration: 5000,
    });
  }

  showMsg() {
    if(!this.authService.isLoggedIn())
    {
      this.openSnackBar("Utwórz konto, aby przejść do przepisów", "");
    }
    else {
      this.router.navigate(['/userRecipes']);
    }
  }
  // getAll(){
  //   this.service.getAll().subscribe(response => {
  //     this.items$ = response;
  //   });
  // }

}
