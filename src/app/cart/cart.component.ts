import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { CartItem } from '../../cartitem';
import { CartService } from '../cart.service';
import { CartItemComponent } from '../cart-item/cart-item.component';

@Component({
  selector: 'app-cart',
  imports: [CommonModule, CommonModule, CartItemComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent {
  cartTitle = 'Your Cart';

  private cartService = inject(CartService);

  cartItems = this.cartService.cartItems;
  cartCount = this.cartService.cartCount;
  total = this.cartService.total;
  orderConfirmed = false;

  onConfirmOrder(): void {
    this.orderConfirmed = true;
  }

  onStartNewOrder(): void {
    this.cartService.emptyCart();
    this.orderConfirmed = false;
  }
}
