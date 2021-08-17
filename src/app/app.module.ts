import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentBookComponent } from './component-book/component-book.component';
import {BookserviceService} from './bookservice.service';

@NgModule({
  declarations: [
    AppComponent,
    ComponentBookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [BookserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
