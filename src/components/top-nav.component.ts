import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsyncPipe } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-top-nav',
  standalone: true,
  imports: [CommonModule, AsyncPipe, RouterModule],
  template: `
    <nav style="display: flex; align-items: center; justify-content: space-between; padding: 0.5rem 2rem; background: #222; color: #fff;">
      <a routerLink="/books" style="color: #fff; text-decoration: none; font-weight: bold; font-size: 1.5rem;">Book Library</a>
      <div style="display: flex; gap: 1.5rem; align-items: center;">
        <a routerLink="/profile" style="color: #fff; text-decoration: none;">Profile</a>
        <a [routerLink]="['/cart']" style="color: #fff; text-decoration: none; position: relative;">
          Cart
          <span *ngIf="(cartCount$ | async) as count" style="background: red; color: #fff; border-radius: 50%; padding: 0 8px; font-size: 0.9em; margin-left: 4px;">
            {{ count }}
          </span>
        </a>
      </div>
    </nav>
  `
})
export class TopNavComponent {
  cartCount$: typeof this.cartService.itemsCount$;
  constructor(private cartService: CartService) {
    this.cartCount$ = this.cartService.itemsCount$;
  }
}
