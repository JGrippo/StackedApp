import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { OverflowComponent } from './components/overflow/overflow.component';
import { HeaderComponent } from './components/header/header.component';
import { StackComponent } from './components/stack/stack.component';
import { FooterComponent } from './components/footer/footer.component';
import { OverflowComponent } from './components/overflow/overflow.component';

@NgModule({
  declarations: [
    AppComponent,
    OverflowComponent,
    HeaderComponent,
    StackComponent,
    FooterComponent,
    OverflowComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
