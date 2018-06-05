import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { OverflowComponent } from './components/overflow/overflow.component';
import { HeaderComponent } from './components/header/header.component';
import { StackComponent } from './components/stack/stack.component';
import { FooterComponent } from './components/footer/footer.component';
import { AutocompleteComponent } from './components/autocomplete/autocomplete.component';
import { MatAutocompleteModule, MatInputModule, MatFormFieldModule, MatButton } from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatMenuModule, MatButtonModule, MatIconModule} from '@angular/material';

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
    FormsModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
