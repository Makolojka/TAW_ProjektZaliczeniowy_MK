import { Component, Output, EventEmitter } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {
  public filterText: string = '';

  @Output() name = new EventEmitter<string>();

  constructor(private router: Router, private route: ActivatedRoute){ }


  ngOnInit(): void {
  }

  sendFilter(): void {
    this.name.emit(this.filterText);
    this.router.navigate(['/userRecipes'], {
      queryParams: {
        name:
        this.filterText
      }
    });

  }
}

