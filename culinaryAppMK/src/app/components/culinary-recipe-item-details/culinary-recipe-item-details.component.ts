import { Component } from '@angular/core';
import {DataService} from "../../services/data.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'culinary-recipe-item-details',
  templateUrl: './culinary-recipe-item-details.component.html',
  styleUrls: ['./culinary-recipe-item-details.component.css']
})
export class CulinaryRecipeItemDetailsComponent {
  public image: string = '';
  public text: string = '';
  public title: string = '';

  constructor(private service: DataService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    let id: string = '';
    this.route.paramMap
      .subscribe((params: any) => {
        id = params.get('id');
      });

    this.service.getById(id).subscribe((res: any) => {
      this.image = res['image'];
      this.text = res['text'];
      this.title = res['title'];
    });
  }
}
