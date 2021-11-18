import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailDessertComponent } from './product-detail-dessert.component';

describe('ProductDetailDessertComponent', () => {
  let component: ProductDetailDessertComponent;
  let fixture: ComponentFixture<ProductDetailDessertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductDetailDessertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDetailDessertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
