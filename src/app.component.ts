import { Component } from '@angular/core';
import { TopNavComponent } from './components/top-nav.component';
import { LeftNavComponent } from './components/left-nav.component';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-root',
    template: `
    <app-top-nav></app-top-nav>
    <div style="display: flex;">
      <app-left-nav></app-left-nav>
      <main style="flex: 1; padding: 2rem;">
        <!-- ...existing main content... -->
        <router-outlet></router-outlet>
      </main>
    </div>
  `,
    standalone: true,
    imports: [TopNavComponent, LeftNavComponent, RouterOutlet]
})
export class AppComponent { }