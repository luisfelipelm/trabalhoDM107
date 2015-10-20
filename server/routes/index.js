var express = require('express');
var router = express.Router();

var auth = require('./auth.js');
var products = require('./deliver.js');
var user = require('./users.js');
var connection = require('../config/connectionDB.js');

/*
 * Routes that can be accessed by any one
 */
router.post('/login', auth.login);

/*
 * Routes that can be accessed only by autheticated users
 */
router.get('/api/v1/deliveries', products.getAll);
router.get('/api/v1/delivers/:id', products.getOne);
router.post('/api/v1/delivers/', products.create);
router.put('/api/v1/delivers/:id', products.update);
router.delete('/api/v1/delivers/:id', products.delete);

/*
 * Routes that can be accessed only by authenticated & authorized users
 */
router.get('/api/v1/admin/users', user.getAll);
router.get('/api/v1/admin/user/:id', user.getOne);
router.put('/api/v1/admin/user/:id', user.update);
router.delete('/api/v1/admin/user/:id', user.delete);

router.post('/api/user/', user.create);


module.exports = router;
