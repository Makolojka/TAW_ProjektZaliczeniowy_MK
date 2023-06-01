import {Component, Input, SimpleChanges} from '@angular/core';
import {DataService} from "../../services/data.service";
import {AuthService} from "../../services/auth.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'user-recipes',
  templateUrl: './user-recipes.component.html',
  styleUrls: ['./user-recipes.component.css']
})
export class UserRecipesComponent {
  public items$: any;
  @Input() filterText: string = '';
  id: string = '';
  filteredItems: any[] = [];
  selectedFoodType: string | null = null;
  public userId = this.authService.getUserId();

  constructor(private service: DataService, public authService: AuthService, private router: Router) {
  }

  getAll() {
    this.service.getAll().subscribe(response => {
      this.items$ = response;
      this.filteredItems = this.items$;
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
    this.getAll();
    this.filteredItems = this.items$;
    this.updateFilteredItems();
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
  }

  onFilterChange(filterText: string): void {
    this.filterText = filterText;
    this.updateFilteredItems();
  }
}
