import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './body/about-us/about-us.component';
import { CartComponent } from './body/cart/cart.component';
import { ContactUsComponent } from './body/contact-us/contact-us.component';
import { DessertComponent } from './body/dessert/dessert.component';
import { DrinksComponent } from './body/drinks/drinks.component';
import { HomeComponent } from './body/home/home.component';
import { MenuComponent } from './body/menu/menu.component';
import { PizzaComponent } from './body/pizza/pizza.component';
import { ProductDetailDessertComponent } from './body/product-detail-dessert/product-detail-dessert.component';
import { ProductDetailDrinkComponent } from './body/product-detail-drink/product-detail-drink.component';
import { ProductDetailPizzaComponent } from './body/product-detail-pizza/product-detail-pizza.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'menu', component: MenuComponent },
  
  { path: 'aboutUs', component: AboutUsComponent },
  { path: 'contactUs', component: ContactUsComponent },
  { path: 'cart', component: CartComponent },

     //we will create sending and getting routes paramaters
     { path: 'pizza', component: PizzaComponent  },
     { path: 'product-detail-pizza/:id', component: ProductDetailPizzaComponent },

     { path: 'drink', component: DrinksComponent  },
     { path: 'product-detail-drink/:id', component: ProductDetailDrinkComponent },


     { path: 'dessert', component: DessertComponent },
     { path: 'product-detail-dessert/:id', component: ProductDetailDessertComponent },

  

  { path: '**', component: HomeComponent }// If no matching route found, go back to home route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
