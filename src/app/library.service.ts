import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class LibraryService {

  private apiRoot = 'http://localhost:8000/';

  constructor(private http: HttpClient) { }

  getBooks() {
    return this.http.get(this.apiRoot.concat('book/'));
  }

  createBook(Title: string, Author: string, year: number, description: string) {
    return this.http.post(
      this.apiRoot.concat('book/'),
      { Title, Author, year, description }
    );
  }

  deleteBook(id: number) {
    return this.http.delete(this.apiRoot.concat(`book/${id}/`));
  }
}
