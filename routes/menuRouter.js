const express = require('express');
const menuRouter = express.Router();

menuRouter.route('/')
.get((req, res) => {
    res.end('Here is the menu.');
})
.post((req, res) => {
    res.end(`will add the menu item you provided.`);
})
.put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation now supported');
})
.delete((req, res) => {
    res.end('Deleting all the menu');
});

module.exports = menuRouter;