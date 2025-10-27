import { Component, inject, OnInit, signal } from '@angular/core';
import { BookCollectionComponent } from './book-list/book-collection/book-collection.component';
import { BookListComponent } from './book-list/book-list/book-list.component';
import { selectBookCollection, selectBooks } from './state/books.selectors';
import { Store } from '@ngrx/store';
import { BooksActions, BooksApiActions } from './state/books.actions';
import { GoogleBooksService } from './book-list/book.service';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { AppState } from './store/app.state';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit {
  protected readonly title = signal('basic-angular-app');

  // private store = inject(Store);
  // private booksService = inject(GoogleBooksService);

  // books$ = this.store.select(selectBooks);
  // bookCollection$ = this.store.select(selectBookCollection);

  //counter
  counter$: Observable<number>;

  constructor(private store: Store<AppState>) {
    this.counter$ = this.store.select((state) => state.counter);
  }

  ngOnInit() {
    // this.booksService
    //   .getBooks()
    //   .subscribe((books) => this.store.dispatch(BooksApiActions.retrievedBookList({ books })));
  }

  // onAdd(bookId: string) {
  //   this.store.dispatch(BooksActions.addBook({ bookId }));
  // }

  // onRemove(bookId: string) {
  //   this.store.dispatch(BooksActions.removeBook({ bookId }));
  // }
}
