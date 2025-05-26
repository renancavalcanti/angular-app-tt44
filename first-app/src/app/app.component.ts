import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CounterComponent } from './components/counter/counter.component';
import { CommonModule } from '@angular/common';
import { ListProductsComponent } from './components/list-products/list-products.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CounterComponent, CommonModule, ListProductsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'first-app';
  nom = 'Renan';
  imageUrl = "https://th.bing.com/th/id/OIP.6UsvVN8oKuDGQuVQ7_YjTwHaHa?w=600&h=600&rs=1&pid=ImgDetMain";
  isLoggedIn = false;
  items = ["Item A", "Item B", "Item C", "Item D", "Item A", "Item B", "Item C", "Item D"]
  isActive = false;
  textColor = 'green';
  fontSize = 50;

  clickButton(){
    console.log("Button Clicked")
    this.nom = "Neymar"
    this.imageUrl = "https://storage.needpix.com/rsynced_images/blue-button-1428506_1280.png"
    this.fontSize--;
  }

  login(){
    this.isLoggedIn = true;
  }

  logout(){
    this.isLoggedIn = false;
  }
}
