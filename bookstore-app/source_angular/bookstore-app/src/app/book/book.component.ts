import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { BooksService } from "../books/books.services";

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  constructor(private _bookService: BooksService, private route: ActivatedRoute, private router: Router) { }
book:any;
id:any;

  ngOnInit() {
          
this.id='';
      this.route.params.forEach((params: Params) => {
          console.log(params['id']);
     this.id+=params['id'];
     console.log(this.id);
          
      });
  
   this._bookService.getBook(this.id).subscribe(
      (book:any) =>  this.book = book,
      err => console.log(err)
    );

 
  }

}
