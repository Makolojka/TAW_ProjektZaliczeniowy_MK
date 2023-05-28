import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CulinaryRecipeItemDetailsComponent } from './culinary-recipe-item-details.component';

describe('CulinaryRecipeItemDetailsComponent', () => {
  let component: CulinaryRecipeItemDetailsComponent;
  let fixture: ComponentFixture<CulinaryRecipeItemDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CulinaryRecipeItemDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CulinaryRecipeItemDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
