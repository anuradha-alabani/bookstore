import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart.service';

@Component({
    selector: 'app-cart-details',
    standalone: true,
    imports: [CommonModule],
    template: `
    <h2>Cart Details</h2>
    <div *ngIf="cartItems.length === 0">Your cart is empty.</div>
    <ul>
      <li *ngFor="let item of cartItems; let i = index">
        {{ item.title }} - {{ item.price }}
        <button (click)="remove(i)">Remove</button>
      </li>
    </ul>
    <button *ngIf="cartItems.length" (click)="clear()">Clear Cart</button>
  `
})
export class CartDetailsComponent implements OnInit {
    cartItems: any[] = [];
    constructor(private cartService: CartService) { }

    ngOnInit() {
        this.cartItems = this.cartService.getItems();
    }

    remove(index: number) {
        this.cartService.removeItem(index);
        this.cartItems = this.cartService.getItems();
    }

    clear() {
        this.cartService.clear();
        this.cartItems = [];
    }
}

