import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { OverflowComponent } from './components/overflow/overflow.component';
import { HeaderComponent } from './components/header/header.component';
import { StackComponent } from './components/stack/stack.component';
import { FooterComponent } from './components/footer/footer.component';

import { MatCardModule } from '@angular/material/card';  //Angular matrial 
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'; //Angular material 

@NgModule({
  declarations: [
    AppComponent,
    OverflowComponent,
    HeaderComponent,
    StackComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule, MatCardModule, BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


