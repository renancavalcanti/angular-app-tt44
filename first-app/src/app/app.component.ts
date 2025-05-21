import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'first-app';
  nom = 'Renan';
  imageUrl = "https://th.bing.com/th/id/OIP.6UsvVN8oKuDGQuVQ7_YjTwHaHa?w=600&h=600&rs=1&pid=ImgDetMain";

  clickButton(){
    console.log("Button Clicked")
    this.nom = "Neymar"
    this.imageUrl = "https://storage.needpix.com/rsynced_images/blue-button-1428506_1280.png"
  }
}
