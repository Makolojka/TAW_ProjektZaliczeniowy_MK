import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CulinaryRecipeItemTypeComponent } from './culinary-recipe-item-type.component';

describe('CulinaryRecipeItemTypeComponent', () => {
  let component: CulinaryRecipeItemTypeComponent;
  let fixture: ComponentFixture<CulinaryRecipeItemTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CulinaryRecipeItemTypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CulinaryRecipeItemTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
