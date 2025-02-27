import { Component, inject, Input } from '@angular/core';
import { DesertItem } from '../../desertitem';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-dessert-item',
  imports: [CurrencyPipe, CommonModule],
  templateUrl: './dessert-item.component.html',
  styleUrl: './dessert-item.component.css',
})
export class DessertItemComponent {
  @Input() dessert!: DesertItem;

  private cartService = inject(CartService);

  addToCart(dessert: DesertItem): void {
    this.cartService.addToCart(dessert);
  }

  onFindQuantity(dessert: DesertItem): number {
    return this.cartService.findQuantity(dessert);
  }

  onIncreaseQuantity(dessert: DesertItem): void {
    this.cartService.increaseQuantity(dessert);
  }

  onDecreaseQuantity(dessert: DesertItem): void {
    this.cartService.decreaseQuantity(dessert);
  }
}
