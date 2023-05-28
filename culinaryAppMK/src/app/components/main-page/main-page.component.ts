import { Component, OnInit} from '@angular/core';
import { DataService } from '../../services/data.service';
@Component({
  selector: 'main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit{
  public items$: any;
  public filterText: string = '';

  constructor(private service: DataService) {
  }

  ngOnInit() {
    // this.getAll();
  }

  // getAll(){
  //   this.service.getAll().subscribe(response => {
  //     this.items$ = response;
  //   });
  // }

}
