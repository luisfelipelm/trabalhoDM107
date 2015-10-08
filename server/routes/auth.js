var jwt = require('jwt-simple');
var wait = require('wait.for');
var connection = require('../config/connectionDB');

var tokenAux;

var auth = {

  login: function(req, res) {

    var username = req.body.username || '';
    var password = req.body.password || '';
      
    if (username == '' || password == '') {
      res.status(401);
      res.json({
        "status": 401,
        "message": "Invalid credentials"
      });
      return;
    }
    // Fire a query to your DB and check if the credentials are valid
    var dbUserObj = auth.validate(username, password, res);
  },

  validate: function(username, password, res) {
    // spoofing the DB response for simplicity
    console.log('entrou validate');
    var dbUserObj;
    
    connection.query("SELECT * from user WHERE email = '" + username + "'" + "and password = " + "'" + password + "'", function(err, rows, fields) {
        if (!err) {
                dbUserObj = { // spoofing a userobject from the DB. 
                  name: rows[0].name,
                  role: rows[0].role,
                  username: rows[0].email
                };
                console.log(dbUserObj);
           
        }else{
             dbUserObj = null;
        }
        
        if (!dbUserObj) { // If authentication fails, we send a 401 back
            res.status(401);
            res.json({
                "status": 401,
                "message": "Invalid credentials"
            });
        }

        if (dbUserObj) {            
            // If authentication is success, we will generate a token
            // and dispatch it to the client
            res.json(genToken(dbUserObj));
console.log(tokenAux);
            connection.query("UPDATE user SET token = '" + tokenAux.toString() + "' WHERE email = '" + username + "'", function(err, rows, fields) {
                if (!err) {
                     console.log('Add token to ' + username);

                }else{
                     dbUserObj = null;
                }
            });          
        }
    }); 

  },

  validateUser: function(tokenUser,callback) {
      var dbUserObj;
 console.log('passou validateUser1');
      
      connection.query("SELECT * from user WHERE token = '" + tokenUser + "'", function(err, rows, fields) {
        if (!err) {
                dbUserObj = {  
                  name: rows[0].name,
                  role: rows[0].role,
                  username: rows[0].email
                };
console.log(dbUserObj);
console.log('passou validadeUser3');
           
        }else{
             dbUserObj = null;
        }
        
        if (!dbUserObj) { // If authentication fails, we send a 401 back
            return;
        }

        if (dbUserObj) {            
            // If authentication is success, we will generate a token
            // and dispatch it to the client
            //res.json(genToken(dbUserObj));
console.log('success authentication');
            return dbUserObj;
        }
          
console.log('passou validadeUser2');
    });
  },
}

// private method
function genToken(user) {
  var expires = expiresIn(7); // 7 days
  var token = jwt.encode({
    exp: expires
  }, require('../config/secret')());

  tokenAux = token;    
    
  return {
    token: token,
    expires: expires,
    user: user
  };
}

function expiresIn(numDays) {
  var dateObj = new Date();
  return dateObj.setDate(dateObj.getDate() + numDays);
}

module.exports = auth;
