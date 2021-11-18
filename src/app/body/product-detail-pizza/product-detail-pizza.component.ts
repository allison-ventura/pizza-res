import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail-pizza',
  templateUrl: './product-detail-pizza.component.html',
  styleUrls: ['./product-detail-pizza.component.scss']
})
export class ProductDetailPizzaComponent implements OnInit {
  product_id!: string;
  
  constructor(private actRoute: ActivatedRoute) { 
    this.product_id = this.actRoute.snapshot.params.id;
  }

  ngOnInit(): void {
  }

}
