import { Component } from '@angular/core';
import { DessertListComponent } from "./dessert-list/dessert-list.component";
import { CartComponent } from "./cart/cart.component";

@Component({
  selector: 'app-root',
  imports: [DessertListComponent, CartComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'product-list-app';
}
