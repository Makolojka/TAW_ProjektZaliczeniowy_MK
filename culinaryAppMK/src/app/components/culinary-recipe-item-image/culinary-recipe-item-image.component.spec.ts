import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CulinaryRecipeItemImageComponent } from './culinary-recipe-item-image.component';

describe('CulinaryRecipeItemImageComponent', () => {
  let component: CulinaryRecipeItemImageComponent;
  let fixture: ComponentFixture<CulinaryRecipeItemImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CulinaryRecipeItemImageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CulinaryRecipeItemImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
