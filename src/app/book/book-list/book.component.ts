import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from '../../services/book.service';
import { IBook } from './../bookInterface';

@Component({  
  selector: 'app-book',
  templateUrl: './all-book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  title = "List books";
  bookList: IBook[] = [];
  stt = 0;
  constructor(private bookService: BookService,
              private route: Router) { }
  ngOnInit(): void {
    this.stt;
    this.getAll();
  }
  getAll() {
    this.bookService.getBook().subscribe((data: IBook[]) => {
      this.bookList = data;
    });
  }
  
  onEditBookClickted(selectedBook: any){
    this.bookService.setselectedBook(selectedBook);
    this.bookService.fromMode = "EDIT";
    this.route.navigate(['books/edit'])
  }
  onCreateClick(){
    this.bookService.fromMode = 'CREATE';
    this.route.navigate(['books/edit']);
  }
  onReadBookClickted(selectedBook: any){
    this.bookService.setselectedBook(selectedBook);
    this.bookService.fromMode = 'READ';
    this.route.navigate(['books/id'])
  }
  deleteBook(id:number) {
    if (confirm('Are you delete this book?')) {
      this.bookService.delete(id).subscribe(() => {
        this.route.navigate(['/books']);
      });
    }
  }
}