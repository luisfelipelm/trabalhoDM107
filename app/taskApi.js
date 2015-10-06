//Dependencies
var express = require('express');
var router  = express.Router();
var mysql   = require('mysql');


//database configuration
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'lflm.zp,lflm',
  database : 'dm107'
});


connection.connect(function(err){
    if(!err) {
        console.log("Database is connected ... \n\n");
    } else {
        console.log("Error connecting database ... \n\n");  
        res.status(503).send(err);
    }
});

var 
   // db = {},
    sequence = 0;

router.get('/', function(req,res) {
    connection.query('SELECT * from entregas', function(err, rows, fields) {
        if (!err) {
            console.log('GET OK: ', rows);
            res.json(rows);
           
        }else{
            res.status(404).send('Not found!');
        }
    });
});

router.get('/:id', function(req,res) {       
    connection.query('SELECT * from entregas where id = ' + req.params.id, function(err, rows, fields) {
        if (!err) {
            if (rows.length > 0) {
                console.log('GET by ID OK: ', rows);           
                res.json(rows);
            }
            else{
                console.log('This delivery does not exists!');
                res.status(404).send('This delivery does not exists!');
            }
        }else{
            res.status(404).send('Not found!');
        }
    });
});

router.post('/', function(req,res){
    connection.query('INSERT INTO entregas SET ?',req.body, function(err, rows, fields) {
        if (!err) {
            console.log('POST OK: ', rows);
            res.status(201).json(rows);
           
        }else{
            res.status(404).send('Not found!');
        }
    });    
    
});

router.put('/:id', function(req,res){
    
    connection.query('UPDATE entregas SET ? WHERE id='+req.params.id, req.body, function(err, rows, fields) {
        if (!err) {
            console.log('PUT OK: ', rows);
            res.status(201).json(rows);
           
        }else{
            res.status(404).send('Not found!');
        }
    });    

});

router.delete('/:id', function(req,res){
    connection.query('DELETE FROM entregas WHERE id = ?', req.params.id, function(err, rows, fields) {
        if (!err) {
            console.log('DELETE OK: ', rows);
            res.status(201).json(rows);
           
        }else{
            res.status(404).send('Not found!');
        }
    });    
});

    //connection.end();
module.exports = router;