import {Component, Input} from '@angular/core';
import {DataService} from "../../services/data.service";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'user-liked-recipes',
  templateUrl: './user-liked-recipes.component.html',
  styleUrls: ['./user-liked-recipes.component.css']
})
export class UserLikedRecipesComponent {
  public items$: any;
  @Input() filterText: string = '';
  id: string = '';
  filteredItems: any[] = [];
  selectedFoodType: string | null = null;
  public userId = this.authService.getUserId();
  public isAnyLikedEmpty: boolean = false;
  public isAnyFilteredEmpty: boolean = false;

  constructor(private service: DataService, public authService: AuthService, private router: Router) {
  }

  getLiked() {
    this.service.getLikedRecipes(this.userId).subscribe(response => {
      this.items$ = response;
      this.filteredItems = this.items$;
      this.isAnyLiked(this.items$);
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
        location.reload();
      },
      (error) => {
        console.error('Error deleting post:', error);
      }
    );
  }

  ngOnInit() {
    this.getLiked();
    this.filteredItems = this.items$;
    this.updateFilteredItems();
  }

  isAnyLiked(items$: any): void{
    // console.log(items$);
    if(items$.length === 0)
    {
      this.isAnyLikedEmpty = true;
    }
    else {
      this.isAnyLikedEmpty = false;
    }
  }

  filterByFoodType(foodType: string): void {
    this.selectedFoodType = foodType;
    this.updateFilteredItems();
  }

  updateFilteredItems(): void {
    if (this.filterText.trim() === '' && !this.selectedFoodType) {
      this.filteredItems = this.items$;
    } else {
      this.filteredItems = this.items$.filter((item: any) => {
        const titleMatches = item.title.toLowerCase().includes(this.filterText.toLowerCase());
        const foodTypeMatches = !this.selectedFoodType || item.foodType === this.selectedFoodType;
        return titleMatches && foodTypeMatches;
      });
    }
    if (this.filteredItems != undefined){
      if (this.filteredItems.length === 0) {
        this.isAnyFilteredEmpty = true;
      }
      else
      {
        this.isAnyFilteredEmpty = false;
      }
    }
  }

  onFilterChange(filterText: string): void {
    this.filterText = filterText;
    this.updateFilteredItems();
  }

  likeRecipe(recipeId: string): void {
    const userId = this.authService.getUserId();
    this.service.likeRecipe(userId, recipeId).subscribe(
      (response) => {
        console.log('Recipe liked successfully.');
        // location.reload();
        this.getLiked();
      },
      (error) => {
        console.error('Error liking recipe:', error);
      }
    );
  }
}
