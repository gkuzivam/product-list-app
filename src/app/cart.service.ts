import { computed, effect, Injectable, signal } from '@angular/core';
import { CartItem } from '../cartitem';
import { DesertItem } from '../desertitem';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartItems = signal<CartItem[]>([]);

  eLength = effect(() => console.log('Cart Length:', this.cartItems().length));

  cartCount = computed(() => this.cartItems().reduce((accQty, item) => accQty + item.quantity, 0));

  total = computed(() => this.cartItems().reduce((accTotal, item) => accTotal + (item.dessert.price * item.quantity), 0));

  addToCart(dessert: DesertItem): void {
    this.cartItems.update(items => [...items, { dessert, quantity: 1 }]);
  }
}
