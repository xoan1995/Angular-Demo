
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BookEditComponent} from '../book-edit/book-edit.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import {BookComponent} from './book.component';
const routes: Routes = [
  {path: 'books', component: BookComponent},
  {path: 'books/edit', component: BookEditComponent}
];

@NgModule({
  declarations: [
    BookComponent,
    BookEditComponent,
  ],
  exports: [
    BookComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class BookModule {
}
