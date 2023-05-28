import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CulinaryRecipeItemTextComponent } from './culinary-recipe-item-text.component';

describe('CulinaryRecipeItemTextComponent', () => {
  let component: CulinaryRecipeItemTextComponent;
  let fixture: ComponentFixture<CulinaryRecipeItemTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CulinaryRecipeItemTextComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CulinaryRecipeItemTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
