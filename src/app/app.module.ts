import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { BodyComponent } from './body/body.component';
import { TopComponent } from './top/top.component';
import { BottomComponent } from './bottom/bottom.component';
import { NavbarComponent } from './top/navbar/navbar.component';
import { FooterComponent } from './bottom/footer/footer.component';
import { HomeComponent } from './body/home/home.component';
import { ProductDetailPizzaComponent } from './body/product-detail-pizza/product-detail-pizza.component';
import { ProductDetailDrinkComponent } from './body/product-detail-drink/product-detail-drink.component';
import { ProductDetailDessertComponent } from './body/product-detail-dessert/product-detail-dessert.component';
import { CartDetailComponent } from './body/cart-detail/cart-detail.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    TopComponent,
    BottomComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    ProductDetailPizzaComponent,
    ProductDetailDrinkComponent,
    ProductDetailDessertComponent,
    CartDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule //to solve error in pizza
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
