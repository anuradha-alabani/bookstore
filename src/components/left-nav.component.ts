import { Component } from '@angular/core';
import { BookService } from '../app/book.service';

@Component({
  selector: 'app-left-nav',
  standalone: true,
  template: `
    <aside style="width: 220px; background: #f5f5f5; padding: 1rem; height: 100vh;">
      <h3>Filters</h3>
      <div>
        <label>
          <input type="checkbox" (change)="selectFilter($event, 'fiction')"/> Fiction
        </label>
      </div>
      <div>
        <label>
          <input type="checkbox" (change)="selectFilter($event, 'non-fiction')"/> Non-fiction
        </label>
      </div>
      <div>
        <label>
          <input type="checkbox" (change)="selectFilter($event, 'science')"/> Science
        </label>
      </div>
      <!-- Add more filters as needed -->
    </aside>
  `
})
export class LeftNavComponent {

  constructor(private bookService: BookService) {
  }

  selectedFilters: Set<string> = new Set();

  selectFilter(event: any, type: string) {
    if (event.target.checked) {
      this.selectedFilters.add(type);
    } else {
      this.selectedFilters.delete(type);
    }

    this.bookService.setFilters(Array.from(this.selectedFilters));
  }
}
