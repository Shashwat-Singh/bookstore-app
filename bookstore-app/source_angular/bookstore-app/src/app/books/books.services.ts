import {Injectable} from '@angular/core'
import { HttpClient } from '@angular/common/http';
import { Http,Response,Headers } from '@angular/http';
import 'rxjs/Rx';
import {Observable} from "rxjs";

@Injectable()
export class BooksService{

private _booksUrl = "http://localhost:4200/bookstore";

    constructor (private _http: Http) { }

    getBooks() {
        return this._http.get(this._booksUrl).map(data => {
            data.json();
            console.log(data.json());
            return data.json();
    });
}
DeleteBook(id){
return this._http.delete('http://localhost:4200/bookstore/delete/'+id).map((response:Response)=>response.toString());

}


addBook(book:any){
    
    const body=JSON.stringify(book);
    const headers=new Headers({'Content-Type':'application/json'});
return this._http.post('http://localhost:4200/bookstore/addbook', book, {headers:headers}).map((response:Response)=>response.toString());

}

editBook(id:any,book:any)
{
return this._http.put('http://localhost:4200/bookstore/editbook/'+ id,book).map((response:Response)=>response.toString());

}

getBook(id){
console.log((id));    
return this._http.get('http://localhost:4200/bookstore/getBook/'+id).map(data => {
            data.json();
            return data.json();
    });
}

}
