import {Component, Input} from '@angular/core';
import {DataService} from "../../services/data.service";

@Component({
  selector: 'user-recipes',
  templateUrl: './user-recipes.component.html',
  styleUrls: ['./user-recipes.component.css']
})
export class UserRecipesComponent {
  public items$: any;
  @Input() filterText: string = '';

  constructor(private service: DataService) {
  }

  ngOnInit() {
    this.getAll();
  }

  getAll(){
    this.service.getAll().subscribe(response => {
      this.items$ = response;
    });
  }

  getName($event: string): void {
    this.filterText = $event;
  }
}
