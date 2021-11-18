import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailPizzaComponent } from './product-detail-pizza.component';

describe('ProductDetailPizzaComponent', () => {
  let component: ProductDetailPizzaComponent;
  let fixture: ComponentFixture<ProductDetailPizzaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductDetailPizzaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDetailPizzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
