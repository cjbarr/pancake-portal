const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

router.get('/', (req, res) => {
    let queryText = `SELECT * FROM posts;`;
    pool.query(queryText)
        .then((result) => {
            res.send(result.rows);
        }).catch((err) => {
            console.log('Error in getting your query', err);
            res.sendStatus(200);
        });
});//get posts request

router.post('/', (req,res)=>{
    console.log('body', req.body)
    let queryText = `INSERT INTO "posts"("text") VALUES ('${req.body.text}');`;
    pool.query(queryText)
        .then((result) => {
            res.send(result.rows);
        }).catch((err) => {
            console.log('Error in getting your query', err);
            res.sendStatus(200);
        });
})




module.exports = router;