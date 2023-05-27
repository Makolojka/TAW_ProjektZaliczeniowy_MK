import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CulinaryRecipeComponent } from './culinary-recipe.component';

describe('CulinaryRecipeComponent', () => {
  let component: CulinaryRecipeComponent;
  let fixture: ComponentFixture<CulinaryRecipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CulinaryRecipeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CulinaryRecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
