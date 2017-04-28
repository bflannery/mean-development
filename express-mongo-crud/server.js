const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const MongoClient = require('mongodb').MongoClient;


app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
  db.collection('quotes').find().toArray((err, result) => {
    if(err) return console.log(err);
    res.render('index.ejs', {quotes: result});
  });
});

app.post('/quotes', (req, res)=> {
  db.collection('quotes').save(req.body, (err, result)=> {
    if(err) return console.log(err);

    console.log('saved to database');
    res.redirect('/');
  });
});

let db;

MongoClient.connect('mongodb://brian:123@ds123331.mlab.com:23331/star-wars-quotes', (err, database)=> {
  if(err) return console.log(err);
  db = database;
  app.listen(3000, () => {
    console.log('listening on 3000');
  });
});
