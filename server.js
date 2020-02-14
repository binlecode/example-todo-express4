const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
// const MongoClient = require('mongodb').MongoClient;

const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');

const app = express();
app.use(cors());  // enable cors for SPA app to call

// parse requests of content-type - application/x-www-form-urlencoded
// The urlencoded method within body-parser tells body-parser to extract data from 
// the <form> element and add them to the body property in the request object.
app.use(bodyParser.urlencoded({extended: true}));
// parse requests of content-type - application/json
app.use(bodyParser.json());

// use global Promise impl for mongoose
mongoose.Promise = global.Promise;

mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log('mongoose successfully connected to the mongodb');
}).catch(err => {
    console.log('mongoose could not connect to the database. Existing now', err);
    return;
});

/*
var db;

// we want to start our servers only when the database is connected.
MongoClient.connect('mongodb://localhost:27017/star-wars-quotes', (err, client) => {
    if (err) {
        console.log(err);
        return;
    }

    db = client.db('star-wars-quotes');
});
*/

// Require Notes routes
require('./app/routes/todo.routes.js')(app);

app.listen(3000, function() {
    console.log('servier is up and listening on 3000')
});


app.get('/', (req, res) => {
    res.json({
        message: 'welcome to easy todo notes'
    });

    // res.send('hello express!');
    // let cursor = db.collection('quotes').find()
        // .toArray((err, results) => {
            // console.log(results);
        // });
    // res.sendFile(__dirname + '/index.html');
});

/*

app.post('/quotes', (req, res) => {
    console.log(req.body);

    // db.collection('quotes').save(req.body, (err, result) => {
    db.collection('quotes').insertOne(req.body, (err, result) => {
        if (err) {
            return console.log(err);
        }

        console.log('saved to db');
        res.redirect('/');
    });
});
*/