import { Component, computed, inject, Input, signal } from '@angular/core';
import { CartItem } from '../../cartitem';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart-item',
  imports: [CurrencyPipe, CommonModule],
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.css',
})
export class CartItemComponent {
  @Input({required: true}) set cartItem(ci: CartItem) {
    this.item.set(ci);
  }

  private cartService = inject(CartService);

  item = signal<CartItem>(undefined!);

  exPrice = computed(() => this.item().quantity * this.item().dessert.price);

  onRemoveItem(cartItem: CartItem): void {
    this.cartService.removeFromCart(cartItem);
  }
}
