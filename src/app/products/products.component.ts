import { Component, Input, input } from '@angular/core';
import { IProduct } from '../Interface/Iproduct';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  @Input() product:IProduct
  
}
