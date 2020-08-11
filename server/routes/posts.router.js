const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

router.get('/', (req, res) => {
    let queryText = `SELECT * FROM posts ;`;
    pool.query(queryText)
        .then((result) => {
            res.send(result.rows);
        }).catch((err) => {
            console.log('Error in getting your query', err);
            res.sendStatus(200);
        });
});//get posts request



module.exports = router;