import { Component } from '@angular/core';
import {DataService} from "../../services/data.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-user-recipe-delete',
  templateUrl: './user-recipe-delete.component.html',
  styleUrls: ['./user-recipe-delete.component.css']
})
export class UserRecipeDeleteComponent {
  constructor(private route: ActivatedRoute, private dataService: DataService) {}

  // deletePost(id: string) {
  //   this.dataService.deletePost(id).subscribe(
  //     () => {
  //       console.log('Post deleted successfully');
  //       // Perform any additional actions after deleting the post
  //     },
  //     (error) => {
  //       console.error('Error deleting post:', error);
  //       // Handle the error appropriately
  //     }
  //   );
  // }
  //
  // ngOnInit() {
  //   this.route.params.subscribe(params => {
  //     const id = params['id']; // Assuming the route parameter is named 'id'
  //     this.deletePost(id);
  //   });
  // }
}
