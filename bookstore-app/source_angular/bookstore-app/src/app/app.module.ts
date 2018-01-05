import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { routing }  from './app.routing';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { BooksComponent } from './books/books.component';
import { AddBooksComponent } from './books/add-books/add-books.component';
import { BooksService } from './books/books.services';
import { EditBookComponent } from './books/edit-book/edit-book.component';
import { BookComponent } from './book/book.component';
import { NameFilterPipe } from './name-filter.pipe';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    BooksComponent,
    AddBooksComponent,
    EditBookComponent,
    BookComponent,
    NameFilterPipe
  ],
  imports: [
    BrowserModule,routing,FormsModule,HttpClientModule,HttpModule
  ],
  providers: [ BooksService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
