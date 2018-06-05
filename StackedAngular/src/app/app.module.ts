import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { OverflowComponent } from './components/overflow/overflow.component';
import { HeaderComponent } from './components/header/header.component';
import { StackComponent } from './components/stack/stack.component';
import { FooterComponent } from './components/footer/footer.component';
import { AutocompleteComponent } from './components/autocomplete/autocomplete.component';
import { MatAutocompleteModule, MatInputModule, MatFormFieldModule } from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    OverflowComponent,
    HeaderComponent,
    StackComponent,
    FooterComponent,
    AutocompleteComponent
    ],
  imports: [
    BrowserModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
