import { Component, inject, Input } from '@angular/core';
import { CartItem } from '../../cartitem';
import { CurrencyPipe } from '@angular/common';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart-item',
  imports: [CurrencyPipe],
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.css',
})
export class CartItemComponent {
  @Input() cartItem!: CartItem;

  private cartService = inject(CartService);

  onRemoveItem(cartItem: CartItem): void {
    this.cartService.removeFromCart(cartItem);
  }
}
