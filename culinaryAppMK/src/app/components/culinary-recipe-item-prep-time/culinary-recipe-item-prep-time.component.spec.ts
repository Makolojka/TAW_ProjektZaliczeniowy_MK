import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CulinaryRecipeItemPrepTimeComponent } from './culinary-recipe-item-prep-time.component';

describe('CulinaryRecipeItemPrepTimeComponent', () => {
  let component: CulinaryRecipeItemPrepTimeComponent;
  let fixture: ComponentFixture<CulinaryRecipeItemPrepTimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CulinaryRecipeItemPrepTimeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CulinaryRecipeItemPrepTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
