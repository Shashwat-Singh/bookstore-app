import { Component, OnInit } from '@angular/core';
import { BooksService } from "./books.services";
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})



export class BooksComponent implements OnInit {

books:any[];
title_check="true";
author_check="true";
isbn_check="true";
publication_date_check="true";
publisher_check="true";
price_check="true";
genre_check="true";
format_check="true";

constructor(private _bookService: BooksService, private route: ActivatedRoute, private router: Router) { }
  ngOnInit() {
this._bookService.getBooks().subscribe(
      (books:any) =>  this.books = books,
      err => console.log(err)
    );
    
}


Delete(id){
console.log(parseInt(id));
this._bookService.DeleteBook(id).subscribe(data=>data,err=>{},()=>{this._bookService.getBooks().subscribe(
      (books:any) =>  this.books = books,
      err => console.log(err)
    );});

}

}
