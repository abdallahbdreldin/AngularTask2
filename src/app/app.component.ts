import { Component, ViewEncapsulation } from '@angular/core';
import { products } from './Data.ts/db-data';
import { IProduct } from './Interface/Iproduct';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'ecommerce-task';
  prodducts = products

  addToProducts(prod:IProduct){
    this.prodducts.push(prod)
  }
}
