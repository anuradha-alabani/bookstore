import { Routes } from '@angular/router';
import { ProductDetailsComponent } from './product-details/product-details.component';


export const routes: Routes = [
    { path: '', redirectTo: 'books', pathMatch: 'full' },
    {
        path: 'books',
        loadComponent: () => import('./book-list/book-list.component').then(m => m.BookListComponent)
    },
    {
        path: "books/:id",
        component: ProductDetailsComponent
    },
    {
        path: 'cart',
        loadComponent: () => import('./cart-details/cart-details.component').then(m => m.CartDetailsComponent)
    }
]
