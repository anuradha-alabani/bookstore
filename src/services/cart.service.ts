import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class CartService {
    private items = new BehaviorSubject<any[]>([]);
    items$ = this.items.asObservable();
    itemsCount$ = this.items.asObservable().pipe(
        map(items => items.length)
    );

    addItem(item: any) {
        this.items.next([...this.items.value, item]);
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
}
