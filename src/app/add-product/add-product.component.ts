import { Component, EventEmitter, Output } from '@angular/core';
import { IProduct } from '../Interface/Iproduct';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.scss'
})
export class AddProductComponent { 
  product:IProduct= {
    name: '',
    img: 'https://via.placeholder.com/150',          
    description: '',
    price: ''
  };
@Output() productAdded = new EventEmitter<IProduct>()


  onAddProduct(){
    this.productAdded.emit(this.product)
    this.product = {
      name: '',
      img: 'https://via.placeholder.com/150',
      description: '',
      price: ''
    };
  }
}
