var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/*+json' }));

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/mydb');

var Schema = mongoose.Schema;
var bookSchema = new mongoose.Schema({
    title: String,
    isbn:String,
    author: String,
    publication_date: String,
    publisher: String,
    genre: Array,
    format: Array,
    price:String
});

var Book = mongoose.model('book', bookSchema);


router.get('/', function(req, res) {
  Book.find({}, function (err, books) {
        if (err)
            res.send(err);
        else {
            //console.log(books);
            res.json(books);
        }
    });
});


router.get('/getBook/:id', function(req, res) {
 //console.log(req.params.id);
 Book.findOne({ _id: req.params.id }, function (err, book) {
        if (err)
            res.send(err);
        else {
            //console.log(book);
            res.json(book);
        }
    });
});

router.post('/addbook', function(req, res) {
  Book.create(req.body, function (err, book) {
        if (err)
            res.send(err);
        else {
            //console.log(book);
            res.json(book);
        }
    });
});

router.put('/editbook/:id', function(req, res) {
  Book.findOneAndUpdate({ _id: req.params.id },
        { $set: { title : req.body.title,author : req.body.author, publication_date :req.body.publication_date, publisher :req.body.publisher,
          genre :req.body.genre,price :req.body.price,format :req.body.format } },
        {new: true}, 
        function (err, book) {
            if (err)
                res.send(err);
            else {
                //console.log(book);
                res.json(book);
            }
        });
});

router.delete('/delete/:id', function(req, res) {
  Book.findOneAndRemove({ _id: req.params.id }, function (err, book) {
        if (err)
            res.send(err);
        else {
            //console.log(book);
            res.json(book);
        }
    });
});

module.exports = router;
