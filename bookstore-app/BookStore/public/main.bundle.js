webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/about/about.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Welcome To BookStore App</h2>"

/***/ }),

/***/ "../../../../../src/app/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    return AboutComponent;
}());
AboutComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-about',
        template: __webpack_require__("../../../../../src/app/about/about.component.html"),
        styles: [__webpack_require__("../../../../../src/app/about/about.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AboutComponent);

//# sourceMappingURL=about.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".router-link-active {\r\n\tcolor: #000;\r\n\tfont-weight: bold;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <a class=\"navbar-brand\" routerLink=\"\" >Book Store</a>\n    </div>\n    <ul class=\"nav navbar-nav\">\n      <li><a routerLink=\"\" routerLinkActive=\"router-link-active\" [routerLinkActiveOptions]=\"{exact:true}\">About</a></li>\n      <li><a routerLink=\"books\" routerLinkActive=\"router-link-active\">Books</a></li>\n    </ul>\n  </div>\n</nav>\n<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__about_about_component__ = __webpack_require__("../../../../../src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__books_books_component__ = __webpack_require__("../../../../../src/app/books/books.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__books_add_books_add_books_component__ = __webpack_require__("../../../../../src/app/books/add-books/add-books.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__books_books_services__ = __webpack_require__("../../../../../src/app/books/books.services.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__books_edit_book_edit_book_component__ = __webpack_require__("../../../../../src/app/books/edit-book/edit-book.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__book_book_component__ = __webpack_require__("../../../../../src/app/book/book.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__name_filter_pipe__ = __webpack_require__("../../../../../src/app/name-filter.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__about_about_component__["a" /* AboutComponent */],
            __WEBPACK_IMPORTED_MODULE_6__books_books_component__["a" /* BooksComponent */],
            __WEBPACK_IMPORTED_MODULE_7__books_add_books_add_books_component__["a" /* AddBooksComponent */],
            __WEBPACK_IMPORTED_MODULE_9__books_edit_book_edit_book_component__["a" /* EditBookComponent */],
            __WEBPACK_IMPORTED_MODULE_10__book_book_component__["a" /* BookComponent */],
            __WEBPACK_IMPORTED_MODULE_11__name_filter_pipe__["a" /* NameFilterPipe */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_3__app_routing__["a" /* routing */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_12__angular_common_http__["a" /* HttpClientModule */], __WEBPACK_IMPORTED_MODULE_13__angular_http__["c" /* HttpModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_8__books_books_services__["a" /* BooksService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about_component__ = __webpack_require__("../../../../../src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__books_books_component__ = __webpack_require__("../../../../../src/app/books/books.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__books_add_books_add_books_component__ = __webpack_require__("../../../../../src/app/books/add-books/add-books.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__books_edit_book_edit_book_component__ = __webpack_require__("../../../../../src/app/books/edit-book/edit-book.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__book_book_component__ = __webpack_require__("../../../../../src/app/book/book.component.ts");






var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_1__about_about_component__["a" /* AboutComponent */] },
    { path: 'books', component: __WEBPACK_IMPORTED_MODULE_2__books_books_component__["a" /* BooksComponent */] },
    { path: 'books/:id', component: __WEBPACK_IMPORTED_MODULE_5__book_book_component__["a" /* BookComponent */] },
    { path: 'addBook', component: __WEBPACK_IMPORTED_MODULE_3__books_add_books_add_books_component__["a" /* AddBooksComponent */] },
    { path: 'editBook/:id', component: __WEBPACK_IMPORTED_MODULE_4__books_edit_book_edit_book_component__["a" /* EditBookComponent */] },
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ "../../../../../src/app/book/book.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/book/book.component.html":
/***/ (function(module, exports) {

module.exports = "<table class='table table-striped table-condensed' *ngIf=\"book\">\n            <thead>\n                <tr>\n                  <th style=\"min-width: 80px;\">ID</th>\n                    <th style=\"min-width: 80px;\">Title</th>\n                    <th   style=\"min-width: 80px;\">Author</th>\n                    <th   style=\"min-width: 80px;\">ISBN</th>\n                    <th   style=\"min-width: 80px;\">Publication Date</th>\n                    <th   style=\"min-width: 80px;\">Publisher</th>\n                    <th  style=\"min-width: 60px;\">  Price</th>\n                    <th  style=\"min-width: 60px;\">Genre</th>\n                    <th  style=\"min-width: 60px;\">Format</th>\n                    \n                </tr>\n            </thead>\n            <tbody>\n                <tr>\n                    <td >{{ book._id}}</td>\n                    <td  >{{ book.title | uppercase }}</td>\n                    <td >{{ book.author }}</td>\n                    <td >{{ book.isbn }}</td>\n                    <td >{{ book.publication_date }}</td>\n                    <td >{{ book.publisher }}</td>\n                    <td >{{ book.price }}</td>\n                    <td >{{ book.genre }}</td>\n                    <td >{{ book.format }}</td>\n\n                </tr>\n            </tbody>\n        </table>\n        <a routerLink=\"/books\" class=\"btn btn-xs btn-primary\">Return</a>\n    "

/***/ }),

/***/ "../../../../../src/app/book/book.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__books_books_services__ = __webpack_require__("../../../../../src/app/books/books.services.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BookComponent = (function () {
    function BookComponent(_bookService, route, router) {
        this._bookService = _bookService;
        this.route = route;
        this.router = router;
    }
    BookComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id = '';
        this.route.params.forEach(function (params) {
            console.log(params['id']);
            _this.id += params['id'];
            console.log(_this.id);
        });
        this._bookService.getBook(this.id).subscribe(function (book) { return _this.book = book; }, function (err) { return console.log(err); });
    };
    return BookComponent;
}());
BookComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-book',
        template: __webpack_require__("../../../../../src/app/book/book.component.html"),
        styles: [__webpack_require__("../../../../../src/app/book/book.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__books_books_services__["a" /* BooksService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__books_books_services__["a" /* BooksService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object])
], BookComponent);

var _a, _b, _c;
//# sourceMappingURL=book.component.js.map

/***/ }),

/***/ "../../../../../src/app/books/add-books/add-books.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/books/add-books/add-books.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>Add Books</h3>\n<form #formRef=\"ngForm\" (ngSubmit)=\"onSubmit(formRef.value)\">\n  <div class=\"form-group\">\n    <label for=\"title\">Title:</label>\n    <input type=\"text\" class=\"form-control\" name=\"title\" [(ngModel)]='title' required>\n  </div>\n  <div class=\"form-group\">\n    <label for=\"author\">Author:</label>\n    <input type=\"text\" class=\"form-control\" name=\"author\" [(ngModel)]='author' required>\n  </div>\n\n<div class=\"form-group\">\n    <label for=\"isbn\">ISBN:</label>\n    <input type=\"text\" class=\"form-control\" id=\"isbn\" name=\"isbn\" [(ngModel)]='isbn' required>\n  </div>\n  \n  <div class=\"form-group\">\n    <label for=\"publication_date\">Publication Date:</label>\n    <input type=\"date\" class=\"form-control\" id=\"publication_date\" name=\"publication_date\" [(ngModel)]='publication_date' required>\n  </div>\n\n<div class=\"form-group\">\n    <label for=\"publisher\">Publisher:</label>\n    <input type=\"text\" class=\"form-control\" id=\"publisher\" name=\"publisher\" [(ngModel)]='publisher' required>\n  </div>\n\n\n  <div class=\"form-group\">\n    <label for=\"pwd\">Genre:</label>\n    <select class=\"form-control\" name=\"genre\" [ngModel]=\"genre_arr[0]\">\n        <option *ngFor=\"let gen of genre_arr\" [value]=\"gen\">\n          {{gen}}\n        </option>\n      </select>\n      <br>\n  \n  <div class=\"form-group\">\n    <label for=\"pwd\">Format:</label>\n    <select class=\"form-control\" name=\"format\" [ngModel]=\"format_arr[0]\">\n        <option *ngFor=\"let form of format_arr\" [value]=\"form\">\n          {{form}}\n        </option>\n      </select>\n  </div>\n\n  </div>\n    <div class=\"form-group\">\n    <label for=\"pwd\">Price:</label>\n    <input type=\"number\" class=\"form-control\" name=\"price\" [(ngModel)]='price' required>\n  </div>\n\n  <button type=\"submit\" class=\"btn btn-default\" [disabled]=\"formRef.invalid\">Submit</button>\n</form>"

/***/ }),

/***/ "../../../../../src/app/books/add-books/add-books.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddBooksComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__books_services__ = __webpack_require__("../../../../../src/app/books/books.services.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddBooksComponent = (function () {
    function AddBooksComponent(_bookService, router) {
        this._bookService = _bookService;
        this.router = router;
        this.value = "Not Added";
        this.genre_arr = ["fiction", "thriller", "mystery", "comic"];
        this.format_arr = ["paperback", "e-book", "hardcover", "audio-book"];
    }
    AddBooksComponent.prototype.ngOnInit = function () {
    };
    AddBooksComponent.prototype.onSubmit = function (formValue) {
        var _this = this;
        var newBook = {
            title: formValue.title,
            author: formValue.author,
            isbn: formValue.isbn,
            publication_date: formValue.publication_date,
            publisher: formValue.publisher,
            price: formValue.price,
            genre: formValue.genre,
            format: formValue.format
        };
        this._bookService.addBook(newBook).subscribe(function (data) { return _this.value = data; }, function (err) { }, function () { _this.router.navigate(['books']); });
    };
    return AddBooksComponent;
}());
AddBooksComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-add-books',
        template: __webpack_require__("../../../../../src/app/books/add-books/add-books.component.html"),
        styles: [__webpack_require__("../../../../../src/app/books/add-books/add-books.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__books_services__["a" /* BooksService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__books_services__["a" /* BooksService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], AddBooksComponent);

var _a, _b;
//# sourceMappingURL=add-books.component.js.map

/***/ }),

/***/ "../../../../../src/app/books/books.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/books/books.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>Listing all the books</h3>\n<div class='panel panel-primary'>\n    <div class='panel-body'>\n        <div class='row'>\n            <div class='col-md-2'>Filter by title:</div>\n            <div class='col-md-4'>\n                <input type='text'\n                    [(ngModel)]='filterName' />\n            </div>\n            </div>\n            <br>\n       <label>Title:\n    <input type=\"checkbox\" [(ngModel)]=\"title_check\">\n  </label>\n\n  <label>Author:\n    <input type=\"checkbox\" [(ngModel)]=\"author_check\">\n  </label>\n\n  <label>ISBN:\n    <input type=\"checkbox\" [(ngModel)]=\"isbn_check\">\n  </label>\n\n  <label>Publication Date:\n    <input type=\"checkbox\" [(ngModel)]=\"publication_date_check\">\n  </label>\n\n  <label>Publisher:\n    <input type=\"checkbox\" [(ngModel)]=\"publisher_check\">\n  </label>\n\n<label>Price:\n    <input type=\"checkbox\" [(ngModel)]=\"price_check\">\n  </label>\n\n  <label>Genre:\n    <input type=\"checkbox\" [(ngModel)]=\"genre_check\">\n  </label>\n\n  <label>Format:\n    <input type=\"checkbox\" [(ngModel)]=\"format_check\">\n  </label><br/><br/>\n    \n        <table class='table table-striped table-condensed' *ngIf='books && books.length'>\n            <thead>\n                <tr>\n                    <th *ngIf=\"title_check\" style=\"min-width: 80px;\">Title</th>\n                    <th  *ngIf=\"author_check\" style=\"min-width: 80px;\">Author</th>\n                    <th  *ngIf=\"isbn_check\" style=\"min-width: 100px;\">ISBN</th>\n                    <th *ngIf=\"publication_date_check\" style=\"min-width: 60px;\">Publication Date</th>\n                    <th *ngIf=\"publisher_check\" style=\"min-width: 60px;\">Publisher</th>\n                    <th *ngIf=\"price_check\" style=\"min-width: 60px;\">Price</th>\n                    <th *ngIf=\"genre_check\" style=\"min-width: 60px;\">Genre</th>\n                    <th *ngIf=\"format_check\" style=\"min-width: 60px;\">Format</th>\n                    <th style=\"width:20px;\"> </th>\n                    <th style=\"width:20px;\"> </th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr *ngFor='let book of books | nameFilter: filterName'>\n                    <td *ngIf=\"title_check\" ><a [routerLink]=\"book._id\">{{ book.title | uppercase }}</a></td>\n                    <td *ngIf=\"author_check\">{{ book.author }}</td>\n                    <td *ngIf=\"isbn_check\">{{ book.isbn }}</td>\n                    <td *ngIf=\"publication_date_check\">{{ book.publication_date }}</td>\n                    <td *ngIf=\"publisher_check\">{{ book.publisher }}</td>\n                    <td *ngIf=\"price_check\">{{ book.price }}</td>\n                    <td *ngIf=\"genre_check\">{{ book.genre }}</td>\n                    <td *ngIf=\"format_check\">{{ book.format }}</td>\n                    <td><a [routerLink]=\"['/editBook',book._id]\" class=\"btn btn-xs btn-primary\">Edit</a></td>\n                    <td><a (click)=\"Delete(book._id)\" class=\"btn btn-xs btn-danger\">Delete</a></td>\n                </tr>\n            </tbody>\n        </table>\n        <a routerLink=\"/addBook\" class=\"btn btn-xs btn-primary\">Add Book</a>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/books/books.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BooksComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__books_services__ = __webpack_require__("../../../../../src/app/books/books.services.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BooksComponent = (function () {
    function BooksComponent(_bookService, route, router) {
        this._bookService = _bookService;
        this.route = route;
        this.router = router;
        this.title_check = "true";
        this.author_check = "true";
        this.isbn_check = "true";
        this.publication_date_check = "true";
        this.publisher_check = "true";
        this.price_check = "true";
        this.genre_check = "true";
        this.format_check = "true";
    }
    BooksComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._bookService.getBooks().subscribe(function (books) { return _this.books = books; }, function (err) { return console.log(err); });
    };
    BooksComponent.prototype.Delete = function (id) {
        var _this = this;
        console.log(parseInt(id));
        this._bookService.DeleteBook(id).subscribe(function (data) { return data; }, function (err) { }, function () {
            _this._bookService.getBooks().subscribe(function (books) { return _this.books = books; }, function (err) { return console.log(err); });
        });
    };
    return BooksComponent;
}());
BooksComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-books',
        template: __webpack_require__("../../../../../src/app/books/books.component.html"),
        styles: [__webpack_require__("../../../../../src/app/books/books.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__books_services__["a" /* BooksService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__books_services__["a" /* BooksService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object])
], BooksComponent);

var _a, _b, _c;
//# sourceMappingURL=books.component.js.map

/***/ }),

/***/ "../../../../../src/app/books/books.services.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BooksService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BooksService = (function () {
    function BooksService(_http) {
        this._http = _http;
        this._booksUrl = "http://localhost:4200/bookstore";
    }
    BooksService.prototype.getBooks = function () {
        return this._http.get(this._booksUrl).map(function (data) {
            data.json();
            console.log(data.json());
            return data.json();
        });
    };
    BooksService.prototype.DeleteBook = function (id) {
        return this._http.delete('http://localhost:4200/bookstore/delete/' + id).map(function (response) { return response.toString(); });
    };
    BooksService.prototype.addBook = function (book) {
        var body = JSON.stringify(book);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        return this._http.post('http://localhost:4200/bookstore/addbook', book, { headers: headers }).map(function (response) { return response.toString(); });
    };
    BooksService.prototype.editBook = function (id, book) {
        return this._http.put('http://localhost:4200/bookstore/editbook/' + id, book).map(function (response) { return response.toString(); });
    };
    BooksService.prototype.getBook = function (id) {
        console.log((id));
        return this._http.get('http://localhost:4200/bookstore/getBook/' + id).map(function (data) {
            data.json();
            return data.json();
        });
    };
    return BooksService;
}());
BooksService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], BooksService);

var _a;
//# sourceMappingURL=books.services.js.map

/***/ }),

/***/ "../../../../../src/app/books/edit-book/edit-book.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/books/edit-book/edit-book.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1>Edit Book</h1>\n   <form #formRef=\"ngForm\" (ngSubmit)=\"onSubmit(formRef.value)\">\n          <div class=\"form-group\">\n    <label for=\"title\">Title:</label>\n    <input type=\"text\" class=\"form-control\" id=\"title\" name=\"title\" [(ngModel)]=\"book.title\">\n  </div>\n\n  <div class=\"form-group\">\n    <label for=\"author\">Author:</label>\n    <input type=\"text\" class=\"form-control\" id=\"author\" name=\"author\" [(ngModel)]='book.author'>\n  </div>\n\n<div class=\"form-group\">\n    <label for=\"isbn\">ISBN:</label>\n    <input type=\"text\" class=\"form-control\" id=\"isbn\" name=\"isbn\" [(ngModel)]='book.isbn'>\n  </div>\n  \n  <div class=\"form-group\">\n    <label for=\"publication_date\">Publication Date:</label>\n    <input type=\"date\" class=\"form-control\" id=\"publication_date\" name=\"publication_date\" [(ngModel)]='book.publication_date'>\n  </div>\n\n<div class=\"form-group\">\n    <label for=\"publisher\">Publisher:</label>\n    <input type=\"text\" class=\"form-control\" id=\"publisher\" name=\"publisher\" [(ngModel)]='book.publisher'>\n  </div>\n\n  <div class=\"form-group\">\n  <label for=\"price\">Price:</label>\n    <input type=\"number\" class=\"form-control\" id=\"price\" name=\"price\" [(ngModel)]='book.price'>\n  </div>\n  \n  <div class=\"form-group\">\n    <label for=\"price\">Genre:</label>\n  <select class=\"form-control\" name=\"genre\" [(ngModel)]=\"book.genre\">\n        <option *ngFor=\"let gen of genre_arr\" [value]=\"gen\">\n          {{gen}}\n        </option>\n      </select>\n  </div>\n  <div class=\"form-group\">\n  <label for=\"price\">Format:</label>\n    <select class=\"form-control\" name=\"format\" [(ngModel)]=\"book.format\">\n        <option *ngFor=\"let form of format_arr\" [value]=\"form\">\n          {{form}}\n        </option>\n      </select>\n  </div>\n  <button type=\"submit\" class=\"btn btn-success\">Submit</button>\n</form>\n</div>"

/***/ }),

/***/ "../../../../../src/app/books/edit-book/edit-book.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditBookComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__books_services__ = __webpack_require__("../../../../../src/app/books/books.services.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EditBookComponent = (function () {
    function EditBookComponent(_bookService, route, router) {
        this._bookService = _bookService;
        this.route = route;
        this.router = router;
        this.book = {};
        this.genre_arr = ["fiction", "thriller", "mystery", "comic"];
        this.format_arr = ["paperback", "e-book", "hardbound", "audio-book"];
    }
    EditBookComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id = '';
        this.route.params.forEach(function (params) {
            console.log(params['id']);
            _this.id += params['id'];
            console.log(_this.id);
        });
        this._bookService.getBook(this.id).subscribe(function (book) { return _this.book = book; }, function (err) { return console.log(err); });
    };
    EditBookComponent.prototype.onSubmit = function (formValue) {
        var _this = this;
        this.book.title = formValue.title;
        this.book.author = formValue.author;
        this.book.isbn = formValue.isbn;
        this.book.publication_date = formValue.publication_date;
        this.book.publisher = formValue.publisher;
        this.book.price = formValue.price;
        this.book.genre = formValue.genre;
        this.book.format = formValue.format;
        this._bookService.editBook(this.book._id, this.book).subscribe(function (data) { return data; }, function (err) { }, function () { _this.router.navigate(['books']); });
    };
    return EditBookComponent;
}());
EditBookComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-edit-book',
        template: __webpack_require__("../../../../../src/app/books/edit-book/edit-book.component.html"),
        styles: [__webpack_require__("../../../../../src/app/books/edit-book/edit-book.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__books_services__["a" /* BooksService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__books_services__["a" /* BooksService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object])
], EditBookComponent);

var _a, _b, _c;
//# sourceMappingURL=edit-book.component.js.map

/***/ }),

/***/ "../../../../../src/app/name-filter.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NameFilterPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NameFilterPipe = (function () {
    function NameFilterPipe() {
    }
    NameFilterPipe.prototype.transform = function (value, args) {
        var filter = args ? args.toLocaleLowerCase() : null;
        return filter ? value.filter(function (book) {
            return book.title.toLocaleLowerCase().startsWith(filter) != false;
        }) : value;
    };
    return NameFilterPipe;
}());
NameFilterPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* Pipe */])({
        name: 'nameFilter'
    })
], NameFilterPipe);

//# sourceMappingURL=name-filter.pipe.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map