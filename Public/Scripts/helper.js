var pool = require('../../db');
const { response } = require('express');

var fruitData = pool.query('SELECT * FROM Fruits', function (err, result, fields) {
    if (err) {
        throw error;
    }
    else{ 
        response.json(result.rows)
    }
})


