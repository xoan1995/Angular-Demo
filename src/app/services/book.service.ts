import {Injectable} from '@angular/core';
import {IBook} from '../book/bookInterface';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private url = 'http://localhost:3000/';
    books: IBook[] =[];
  private selectedBook: IBook = {
    id: -1,
    name: '',
    author: '',
    publishingYear: '',
  }
  private _formMode = 'EDIT';
 
  get fromMode(){
     return this._formMode;
  }
  set fromMode(value: any){
    this._formMode = value;
  }
  constructor(private http: HttpClient) {
  }

  getBook(): Observable<IBook[]> {
    return this.http.get<IBook[]>(this.url + 'books');
  }
  setselectedBook(selectedBook: IBook){
    this.selectedBook = selectedBook
  }
  getselecteBook(){return this.selectedBook}
  add(book: IBook): Observable<IBook> {
    return this.http.post<IBook>(this.url + 'books', book);
  }

  findBookById(id: number): Observable<IBook> {
    return this.http.get<IBook>(this.url + 'books/' + id);
  }

  update(book: Object, idBook: number) {
    return this.http.put(this.url + 'books/' + idBook , (book));
  }

  delete(idProduct: number): Observable<IBook> {
    return this.http.delete<IBook>(this.url + 'books/' + idProduct);
  }
  searchBook(textSearch: string) {
    this.getBook().subscribe(value => {
      this.books = value;
    });
    console.log(this.books.filter(book =>  book.name.indexOf(textSearch) !== -1 ));
    return this.books.filter(book =>  book.name.includes(textSearch) );
  }
}