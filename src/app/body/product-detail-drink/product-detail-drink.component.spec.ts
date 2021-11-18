import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailDrinkComponent } from './product-detail-drink.component';

describe('ProductDetailDrinkComponent', () => {
  let component: ProductDetailDrinkComponent;
  let fixture: ComponentFixture<ProductDetailDrinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductDetailDrinkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDetailDrinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
