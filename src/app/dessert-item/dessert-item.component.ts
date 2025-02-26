import { Component, inject, Input } from '@angular/core';
import { DesertItem } from '../../desertitem';
import { CurrencyPipe } from '@angular/common';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-dessert-item',
  imports: [CurrencyPipe],
  templateUrl: './dessert-item.component.html',
  styleUrl: './dessert-item.component.css'
})
export class DessertItemComponent {
  @Input() dessert!: DesertItem;

  private cartService = inject(CartService);

  addToCart(dessert: DesertItem): void {
    this.cartService.addToCart(dessert);  
  }
}
