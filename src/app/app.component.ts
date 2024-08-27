import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ HomeComponent],
  styleUrl: './app.component.css',
  template: `
  <main>
    <header class="brand-name">
      <img class="brand-logo" src="./assets/logo.png" alt="logo" aria-hidden="true">
    </header>
    <section class="content">
      <app-home></app-home>
    </section>
  </main>
`,
})
export class AppComponent {
  title = 'ReserveAqui';
}
