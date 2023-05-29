import {Component, Input} from '@angular/core';
import {DataService} from "../../services/data.service";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'user-recipes',
  templateUrl: './user-recipes.component.html',
  styleUrls: ['./user-recipes.component.css']
})
export class UserRecipesComponent {
  public items$: any;
  @Input() filterText: string = '';

  constructor(private service: DataService, public authService: AuthService) {
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

  isAdmin(): boolean {
    const currentUser = this.authService.currentUser;
    return currentUser && currentUser.isAdmin === true;
  }

  deletePost(id: string) {
    this.service.deletePost(id).subscribe(
      () => {
        console.log('Post deleted successfully');
      },
      (error) => {
        console.error('Error deleting post:', error);
      }
    );
  }
}
