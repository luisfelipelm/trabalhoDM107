var express = require('express');
var router = express.Router();

var auth = require('./auth.js');
var products = require('./delivery.js');
var user = require('./users.js');
var connection = require('../config/connectionDB.js');

/*
 * Routes that can be accessed by any one
 */
router.post('/login', auth.login);

/*
 * Routes that can be accessed only by autheticated users
 */
router.get('/api/deliveries', products.getAll);
router.get('/api/delivery/:id', products.getOne);
router.post('/api/delivery/', products.create);
router.put('/api/delivery/:id', products.update);
router.delete('/api/delivery/:id', products.delete);

/*
 * Routes that can be accessed only by authenticated & authorized users
 */
router.get('/api/admin/users', user.getAll);
router.get('/api/admin/user/:id', user.getOne);
router.put('/api/admin/user/:id', user.update);
router.delete('/api/admin/user/:id', user.delete);

router.post('/api/user/', user.create);


module.exports = router;
