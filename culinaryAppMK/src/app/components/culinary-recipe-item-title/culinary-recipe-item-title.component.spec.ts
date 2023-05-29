import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CulinaryRecipeItemTitleComponent } from './culinary-recipe-item-title.component';

describe('CulinaryRecipeItemTitleComponent', () => {
  let component: CulinaryRecipeItemTitleComponent;
  let fixture: ComponentFixture<CulinaryRecipeItemTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CulinaryRecipeItemTitleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CulinaryRecipeItemTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
