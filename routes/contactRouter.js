const express = require('express');
const contactRouter = express.Router();

contactRouter.route('/')
.get((req, res) => {
    res.end('Here is the contact page.');
})
.post((req, res) => {
    res.end(`will add the information you provided.`);
})
.put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /contact');
})
.delete((req, res) => {
    res.end('Deleting all contact info');
});

module.exports = contactRouter;