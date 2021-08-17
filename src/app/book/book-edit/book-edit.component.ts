import {Component, OnInit} from '@angular/core';
import {BookService} from '../../services/book.service';
import {FormBuilder, Validators} from '@angular/forms';
import { Router} from '@angular/router';
import { IBook } from '../bookInterface';

@Component({
  selector: 'book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {
  edit  = "Edit ";
  creater  = "Create Book";
  detail  = "Detail";
selectedBook: IBook = {
    id: -1,
    name: 'string',
    author: 'string',
    publishingYear: '02:02:2020',
  };
  bookForm = this.fb.group({
    name: ['', Validators.required],
    author: ['', Validators.required],
    publishingYear: ['', Validators.required]
  });
  mode = 'CREATE';
  constructor(private bookService: BookService,
              private fb: FormBuilder,
              private router: Router) {
  }

  ngOnInit(){
    this.selectedBook = this.bookService.getselecteBook();
    this.bookService.findBookById( this.selectedBook.id).subscribe(data => {
      this.bookForm.patchValue({
        name: data.name,
        author: data.author,
        publishingYear: data.publishingYear
      });
    });
    this.mode = this.bookService.fromMode;
  }
  update() {
    const bookData = this.bookForm.value;
    if (confirm('Are you update this book?')) {
      this.bookService.update(bookData,this.selectedBook.id).subscribe(() => {
        this.router.navigate(['/books']);
      });
    }
  }

  create() {
    const newBook = this.bookForm.value;
    if (confirm('Are you create this book?')) {
      this.bookService.add(newBook).subscribe(data => {
        this.router.navigate(['/books']);
      });
    }
  } 
  get name() {
    return this.bookForm.get('name');
  }
  get author() {
    return this.bookForm.get('author');
  }
  get publishingYear() {
    return this.bookForm.get('publishingYear');
  }
  get f():any{
    return this.bookForm.controls;
  }
}