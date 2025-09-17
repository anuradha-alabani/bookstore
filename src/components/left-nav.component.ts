import { Component } from '@angular/core';

@Component({
    selector: 'app-left-nav',
    standalone: true,
    template: `
    <aside style="width: 220px; background: #f5f5f5; padding: 1rem; height: 100vh;">
      <h3>Filters</h3>
      <div>
        <label>
          <input type="checkbox" /> Fiction
        </label>
      </div>
      <div>
        <label>
          <input type="checkbox" /> Non-fiction
        </label>
      </div>
      <div>
        <label>
          <input type="checkbox" /> Science
        </label>
      </div>
      <!-- Add more filters as needed -->
    </aside>
  `
})
export class LeftNavComponent { }
