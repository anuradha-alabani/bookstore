import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { BookService } from '../book.service';

export interface BookListItem {
  id: number;
  title: string;
  price: number;
  description: string;
  imageUrl: string;
}

@Component({
  selector: 'app-book-list',
  imports: [CommonModule, RouterModule],
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
  standalone: true
})
export class BookListComponent {
  books: BookListItem[] = [];
  constructor(private cartService: CartService, private bookService: BookService) {
    this.books = this.bookService.books;
  }

  addToCart(book: BookListItem) {
    this.cartService.addItem(book);
  }
}
