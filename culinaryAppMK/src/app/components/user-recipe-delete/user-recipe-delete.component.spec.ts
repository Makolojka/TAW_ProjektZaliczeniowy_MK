import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRecipeDeleteComponent } from './user-recipe-delete.component';

describe('UserRecipeDeleteComponent', () => {
  let component: UserRecipeDeleteComponent;
  let fixture: ComponentFixture<UserRecipeDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserRecipeDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserRecipeDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
