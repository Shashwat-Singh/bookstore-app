import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { BooksService } from "../books.services";


@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {

  constructor(private _bookService: BooksService, private route: ActivatedRoute, private router: Router) { }
book:any={};
id:any;

genre_arr=["fiction","thriller","mystery","comic"];
 format_arr=["paperback","e-book","hardbound","audio-book"]; 

  ngOnInit(): void {
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
    
  
  
onSubmit(formValue){
this.book.title=formValue.title;
this.book.author=formValue.author;
this.book.isbn=formValue.isbn;
this.book.publication_date=formValue.publication_date;
this.book.publisher=formValue.publisher;
this.book.price=formValue.price;
this.book.genre=formValue.genre;
this.book.format=formValue.format;

this._bookService.editBook(this.book._id,this.book).subscribe(data=>data,err=>{},()=>{this.router.navigate(['books']);});

}
  }
