const express = require('express');
const aboutRouter = express.Router();

aboutRouter.route('/')
.get((req, res) => {
    res.end('Here is the about page.');
})
.post((req, res) => {
    res.end(`POST operation not supported on /about`);
})
.put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /about');
})
.delete((req, res) => {
    res.end('DELETE operation not supported on /about');
});

module.exports = contactRouter;