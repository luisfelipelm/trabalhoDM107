var connection = require('../config/connectionDB');

var products = {

  getAll: function(req, res) {
    connection.query('SELECT * from entregas', function(err, rows, fields) {
        if (!err) {
            console.log('GET OK: ', rows);
            res.json(rows);
           
        }else{
            res.status(404).send('Not found!');
        }
    });
  },

  getOne: function(req, res) {
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
  },

  create: function(req, res) {
    connection.query('INSERT INTO entregas SET ?',req.body, function(err, rows, fields) {
        if (!err) {
            console.log('POST OK: ', rows);
            res.status(201).json(rows);
           
        }else{
            res.status(404).send('Not insert! Something is wrong!');
        }
    });    
  },

  update: function(req, res) {
    connection.query('UPDATE entregas SET ? WHERE id='+req.params.id, req.body, function(err, rows, fields) {
        if (!err) {
            console.log('PUT OK: ', rows);
            res.status(201).json(rows);
           
        }else{
            res.status(404).send('Not update! Something is wrong!');
        }
    });    
  },

  delete: function(req, res) {
    connection.query('DELETE FROM entregas WHERE id = ?', req.params.id, function(err, rows, fields) {
        if (!err) {
            console.log('DELETE OK: ', rows);
            res.status(201).json(rows);
           
        }else{
            res.status(404).send('Not delete! Something is wrong!');
        }
    });    
  }
};

/*var data = [{
  name: 'product 1',
  id: '1'
}, {
  name: 'product 2',
  id: '2'
}, {
  name: 'product 3',
  id: '3'
}];*/

module.exports = products;
