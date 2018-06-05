import { Component } from '@angular/core';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  template: `
  <!-- header
  <app-header></app-header> -->

  <!-- routes will be rendered here
  <router-outlet></router-outlet>-->

  <!-- footer -->
  <app-footer></app-footer>
`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}
