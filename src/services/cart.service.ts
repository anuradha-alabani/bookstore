import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { CartItem } from '../interfaces/CartItem';
import { BookListItem } from '../app/book-list/book-list.component';

@Injectable({ providedIn: 'root' })
export class CartService {
    private items = new BehaviorSubject<CartItem[]>([]);
    items$ = this.items.asObservable();

    itemsCount$ = this.items.asObservable().pipe(
        map(items => items.length)
    );

    addItem(item: BookListItem) {
        const existingIndex = this.items.value.findIndex(ci => ci.bookListItem.id === item.id);
        if (existingIndex !== -1) {
            const updatedItems = [...this.items.value];
            const existingItem = updatedItems[existingIndex];
            existingItem.quantity += 1;
            existingItem.totalPrice = (existingItem.bookListItem.price || 0) * existingItem.quantity;
            this.items.next(updatedItems);
            return;
        }
        const cartItem: CartItem = {
            bookListItem: item,
            quantity: 1,
            totalPrice: item.price || 0
        };

        this.items.next([...this.items.value, cartItem]);
    }

    removeItem(index: number) {
        const updated = [...this.items.value];
        updated.splice(index, 1);
        this.items.next(updated);
    }

    clear() {
        this.items.next([]);
    }

    getItems() {
        return this.items.value;
    }

    getTotal(): string | number {
        return this.items.value.reduce((acc, item) => acc + (item.totalPrice || 0), 0);
    }
}
