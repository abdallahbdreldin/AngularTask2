import { Component } from '@angular/core';
import { products } from './Data.ts/db-data';
import { IProduct } from './Interface/Iproduct';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ecommerce-task';
  prodducts = products

  addToProducts(prod:IProduct){
    this.prodducts.push(prod)
  }
}
