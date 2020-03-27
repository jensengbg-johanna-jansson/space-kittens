const { Router } = require('express')
const router = new Router()
const fs = require('fs');
const uuid = require('uuid-random');
const { generateOrderNr, generateETA } = require('../utils/utils');

//setup database
const lowdb = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const adapter = new FileSync('data/database.json');
const database = lowdb(adapter);
const bodyParser = require('body-parser');

// Create application/json parser
var jsonParser = bodyParser.json();

router.get('/', async (req, res) => {
    const menu = fs.createReadStream('data/menu.json');
    menu.pipe(res);
});

router.post('/', async (req, res) => {
    const order = {
        eta: generateETA(),
        orderNr: generateOrderNr(),
    }

    setTimeout(() => {
        res.send(order);
    }, 2000);
});

router.get('/key', (req, res) => {
    const key = {
        key: uuid()
    }
    res.send(JSON.stringify(key));
});

router.get('/user/:uuid', async (req, res) => {
    const user = await database.get('users')
    .filter({uuid: parseInt(req.params.uuid)})
    .value();
    
    res.send(user);
});

router.post('/user', jsonParser, async (req, res) => {
    await database.get('users')
    .push(req.body)
    .write();  
    
    res.send(JSON.stringify(req.body));
});

router.get('/order/:uuid', async (req, res) => {
    const orders = await database.get('orders')
                                .filter({uuid: parseInt(req.params.uuid)})
                                .value();
    
    res.send(orders);
});

router.post('/order', jsonParser, async (req, res) => {
    const addOrder = await database.get('orders')
    .push(req.body)
    .write();

    if(addOrder) {
        res.send(req.body);
    } else {
        res.send('Database Error: Could not add order');
    }
});

module.exports = router;