import { Component } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {DataService} from "../../services/data.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-user-recipe-edit',
  templateUrl: './user-recipe-edit.component.html',
  styleUrls: ['./user-recipe-edit.component.css']
})
export class UserRecipeEditComponent {
  public credentials = {
    image: '',
    text: '',
    title: '',
    ingredients: '',
    challenge: 1,
    foodType: '',
    timeToPrepare: '',
  };
  public recipeId: string = '';
  foodTypes: string[] = ['Śniadanie', 'Obiad', 'Kolacja', 'Deser'];

  constructor(private service: DataService, private route: ActivatedRoute, private authService: AuthService, private dataService: DataService, public router: Router) {
  }

  ngOnInit() {
    let id: string = '';
    this.route.paramMap
      .subscribe((params: any) => {
        id = params.get('id');
        this.recipeId = id;
      });

    this.service.getById(id).subscribe((res: any) => {
      this.credentials = res;
    });
  }
}
