var connection = require('../config/connectionDB');

var users = {

  getAll: function(req, res) { 
     connection.query('SELECT * FROM user', function(err, rows, fields) {
        if (!err) {
            console.log('GET OK: ', rows);
            res.json(rows);
           
        }else{
            res.status(404).send('Not found!');
        }
     });   
  },

  getOne: function(req, res) {
     connection.query("SELECT * FROM user WHERE iduser = " + req.params.id, function(err, rows, fields) {
        if (!err) {
            console.log('GET by ID OK: ', rows);
            res.json(rows);
           
        }else{
            res.status(404).send('Not found!');
        }
     });     
  },

  create: function(req, res) {
     connection.query("INSERT INTO user (name,email,password,role) VALUES ('" + req.body.name + "','" + req.body.username + "','" + req.body.password + "','USER')", function(err, rows, fields) {
        if (!err) {
            var insert = { // spoofing a userobject from the DB. 
                  name: req.body.name,
                  role: 'USER',
                  username: req.body.username
                };
            console.log('POST: ', insert);
            res.json(insert);
           
        }else{
            res.status(404).send('User already exists or something is wrong');
        }
     });  
  },

  update: function(req, res) {
     connection.query("UPDATE user SET name = '" + req.body.name + "', email = '" + req.body.username + "', password = '" + req.body.password + "' WHERE iduser = " + req.params.id, function(err, rows, fields) {
        if (!err) {
            var update = { // spoofing a userobject from the DB. 
                  id: req.params.id,
                  name: req.body.name,
                  role: 'USER',
                  username: req.body.username
                };
            console.log('UPDATE: ', update);
            res.json(update);
           
        }else{
            res.status(404).send('Not update! Something is wrong!');
        }
     });    
  },

  delete: function(req, res) {
     connection.query("DELETE FROM user WHERE iduser = " + req.params.id, function(err, rows, fields) {
        if (!err) {
            console.log('User id ' + req.params.id + ' deleted!');
            res.status(200).send('User deleted!');
           
        }else{
            res.status(404).send('Not delete! Something is wrong!');
        }
     });  
  }
};

/*var data = [{
  name: 'user 1',
  id: '1'
}, {
  name: 'user 2',
  id: '2'
}, {
  name: 'user 3',
  id: '3'
}];*/

module.exports = users;
