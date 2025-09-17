import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../book.service';
import { Location } from '@angular/common';
import { CartService } from '../../services/cart.service';
import { BookListItem } from '../book-list/book-list.component';

import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  productId: string | null = null;
  book: BookListItem | undefined;


  constructor(
    private route: ActivatedRoute,
    private bookService: BookService,
    private location: Location,
    private cartService: CartService
  ) { }

  ngOnInit() {
    this.productId = this.route.snapshot.paramMap.get('id');
    if (this.productId) {
      const id = Number(this.productId);
      this.book = this.bookService.getBookById(id);
    }
  }

  goBack() {
    this.location.back();
  }

  addToCart() {
    if (this.book) {
      this.cartService.addItem(this.book);
      alert('Book added to cart!');
    }
  }
}


