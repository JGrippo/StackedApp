import { Component } from '@angular/core';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-root',
  template: `
  <!-- header  -->
  <app-header></app-header>

  <!-- routes will be rendered here -->
  <app-stack></app-stack>

  <!-- footer -->
  <app-footer></app-footer>
`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}
