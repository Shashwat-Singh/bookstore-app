import { Routes, RouterModule } from '@angular/router';

import {AboutComponent} from './about/about.component';
import { BooksComponent } from './books/books.component';
import { AddBooksComponent } from './books/add-books/add-books.component';
import { EditBookComponent } from './books/edit-book/edit-book.component';
import {BookComponent} from './book/book.component';

const appRoutes: Routes = [
  { path: '', component: AboutComponent },
  { path: 'books', component: BooksComponent },
 { path: 'books/:id', component: BookComponent },
  { path: 'addBook', component: AddBooksComponent},
  { path: 'editBook/:id', component: EditBookComponent},
  // { path: 'displayBook/:id', component: BookComponent}
];

export const routing = RouterModule.forRoot(appRoutes);