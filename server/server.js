const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const pool = require('./modules/pool.js');

const postRouter = require('./routes/posts.router.js');


/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); // needed for angular requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('build'));

/** ---------- ROUTES ---------- **/

app.use('/posts', postRouter);

/** ----------SERVER ---------- **/
pool.connect((function (err) {

    if (!err) {
        console.log("Database is connected ... ");
    } else {
        console.log("Error connecting database ... ");
    }
}));