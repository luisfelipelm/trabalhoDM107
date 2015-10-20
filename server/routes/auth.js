var jwt = require('jwt-simple');
var wait = require('wait.for');
var connection = require('../config/connectionDB');

var tokenAux;

var auth = {

  login: function(req, res) {

    console.log(req.body);  
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
    auth.validate(username, password, function(dbUserObj) {      
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
             connection.query("UPDATE user SET token = '" + tokenAux.toString() + "' WHERE email = '" + username + "'", function(err, rows, fields) {
                if (!err) {
                     console.log('Add token to ' + username);

                }else{
                     console.log('Error to add a token to ' + username);
                }
        });          
          }
    });
  },

  validate: function(username, password, callback) {
    // spoofing the DB response for simplicity
    var dbUserObj;
    
    connection.query("SELECT * from user WHERE email = '" + username + "'" + "and password = " + "'" + password + "'", function(err, rows, fields) {
        if (!err) {
            console.log(rows);
            if(rows.length > 0 ){
                dbUserObj = {  
                  name: rows[0].name,
                  role: rows[0].role,
                  username: rows[0].email
                };
            }
            else{
                dbUserObj = null;
            }
        }else{
             dbUserObj = null;
        }
        
        callback(dbUserObj);
    }); 

  },

  validateUser: function(tokenUser,callback) {
      var dbUserObj;
      connection.query("SELECT * from user WHERE token = '" + tokenUser + "'", function(err, rows, fields) {
         if (!err) {
            console.log(rows);
            if(rows.length > 0 ){
                dbUserObj = {  
                  name: rows[0].name,
                  role: rows[0].role,
                  username: rows[0].email
                };
            }
            else{
                dbUserObj = null;
            }
        }else{
             dbUserObj = null;
        }
        
        if (!dbUserObj) { // If authentication fails, we send a 401 back
            callback(null);
        }

        if (dbUserObj) {            
            // If authentication is success, we will generate a token
            // and dispatch it to the client
            //res.json(genToken(dbUserObj));
            callback(dbUserObj);
        }
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
