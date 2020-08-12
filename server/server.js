const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const pg = require('pg');
const pool = require('./modules/pool');


const postRouter = require('./routes/posts.router.js');


/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); // needed for angular requests
app.use(bodyParser.urlencoded({ extended: true }));

/** ---------- ROUTES ---------- **/

app.use('/posts', postRouter);

/** ---------- START SERVER ---------- **/
pool.connect(function (err) {

    if (!err) {
        console.log("Database is connected ... ");
    } else {
        console.log("Error connecting database ... ");
    }
});