import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProductItemComponent } from '../product-item/product-item.component';

@Component({
  selector: 'app-list-products',
  imports: [CommonModule, ProductItemComponent],
  templateUrl: './list-products.component.html',
  styleUrl: './list-products.component.scss'
})
export class ListProductsComponent {
  products = [
    {id: 1, name: 'Product A', price: 10.99},
    {id: 2, name: 'Product B', price: 7.99},
    {id: 3, name: 'Product C', price: 3.99},
  ]
  sum = 0

  onAddToCart(product: any){
    console.log(product)
    this.sum += product.price;
  }
}
