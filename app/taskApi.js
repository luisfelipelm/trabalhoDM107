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


var 
   // db = {},
    sequence = 0;

router.get('/', function(req,res) {
    connection.connect(function(err){
        if(!err) {
            console.log("Database is connected ... \n\n");
        } else {
            console.log("Error connecting database ... \n\n");  
        }
    });
    connection.query('SELECT * from entregas', function(err, rows, fields) {
        if (!err) {
            console.log('The solution is: ', rows);
            res.json(rows);
           
        }else{
            console.log('Error while performing Query.');
        }
    });
    
    connection.end();
});

router.get('/:id', function(req,res) {
    var task = db[req.params.id];
    if (task){
        res.json(task);
    }
    else {
        res.status(404).send('Not found!');
    }
});

router.post('/', function(req,res){
    var newTask = {
        id: ++sequence,
        done: req.body.done || false,
        description: req.body.description
    };
    db[newTask.id] = newTask;
    res.status(201).json(newTask);
});

router.put('/:id', function(req,res){
    var task = db[req.params.id];
    if (task){
        task.done = req.body.done != null ? req.body.done : false;
        task.description = req.body.description || task.description;
        res.json(task);
    }
    else{
        res.status(404).send('Not found');
    }
});

router.delete('/:id', function(req,res){
    var task = db[req.params.id];
    if (task){
        delete db[req.params.id];
        res.status(200).send('Task deleted');
    }
    else
    {
        res.status(404).send('Not found');
    }
});

module.exports = router;