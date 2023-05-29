import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'user-recipe-add',
  templateUrl: './user-recipe-add.component.html',
  styleUrls: ['./user-recipe-add.component.css']
})
export class UserRecipeAddComponent {
  public credentials = {
    image: '',
    text: '',
    title: '',
  };

  constructor(private authService: AuthService,private dataService: DataService, public router: Router) {
  }

  ngOnInit() {
  }

  createPost() {
    if(this.authService.isLoggedIn()) {
      this.dataService.createPost(this.credentials).subscribe((result) => {
        return result;
      });
      this.router.navigate(['/']);
    }
  }
}
