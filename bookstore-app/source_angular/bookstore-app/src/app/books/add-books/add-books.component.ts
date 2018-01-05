import { Component, OnInit } from '@angular/core';
import { BooksService } from "../books.services";
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-add-books',
  templateUrl: './add-books.component.html',
  styleUrls: ['./add-books.component.css']
})
export class AddBooksComponent implements OnInit {
value="Not Added";
genre_arr=["fiction","thriller","mystery","comic"];
 format_arr=["paperback","e-book","hardcover","audio-book"];  
  constructor(private _bookService: BooksService, private router: Router) { }

  ngOnInit() {
  }

onSubmit(formValue){
let newBook = {         
          title: formValue.title,
          author: formValue.author,
          isbn:formValue.isbn,
          publication_date:formValue.publication_date,
          publisher:formValue.publisher,
          price: formValue.price,
          genre: formValue.genre,
          format:formValue.format
        };
        
   this._bookService.addBook(newBook).subscribe(data=>this.value=data,err=>{},()=>{this.router.navigate(['books']);});



}
}
