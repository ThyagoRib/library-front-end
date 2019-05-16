import { Component, OnInit } from '@angular/core';
import { LibraryService } from './library.service';
import { Book } from './book.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Library';
  books: Book[]
  error: any

  constructor(private library: LibraryService) { }

  ngOnInit(){
    this.library.getBooks().subscribe(
      (books: Book[]) => this.books = books,
      (error: any) => this.error = error,
    )
  }

  add(bookTitle: string, bookAuthor: string, bookYear: number, bookDescription: string) {
    this.library.createBook(bookTitle, bookAuthor, bookYear, bookDescription).subscribe(
      (book: Book) => this.books.push(book)
    )
  }

  delete(id: number) {
    this.library.deleteBook(id).subscribe(
      (success: any) => this.books.splice(
        this.books.findIndex(book => book.id === id )
      )
    )
  }
}
