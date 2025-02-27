import { computed, effect, Injectable, signal } from '@angular/core';
import { CartItem } from '../cartitem';
import { DesertItem } from '../desertitem';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartItems = signal<CartItem[]>([]);

  eLength = effect(() => console.log('Cart Length:', this.cartItems().length));

  cartCount = computed(() =>
    this.cartItems().reduce((accQty, item) => accQty + item.quantity, 0)
  );

  total = computed(() =>
    this.cartItems().reduce(
      (accTotal, item) => accTotal + item.dessert.price * item.quantity,
      0
    )
  );

  addToCart(dessert: DesertItem): void {
    this.cartItems.update((items) => [...items, { dessert, quantity: 1 }]);
  }

  findQuantity(dessert: DesertItem): number {
    return (
      this.cartItems().find((item) => item.dessert === dessert)?.quantity || 0
    );
  }

  increaseQuantity(dessert: DesertItem): void {
    this.cartItems.update((items) =>
      items.map((item) =>
        item.dessert === dessert
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  }

  decreaseQuantity(dessert: DesertItem): void {
    this.cartItems.update((items) =>
      items
        .map((item) =>
          item.dessert === dessert
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  }

  removeFromCart(cartItem: CartItem): void {
    this.cartItems.update((items) => items.filter((item) => item !== cartItem));
  }
}
