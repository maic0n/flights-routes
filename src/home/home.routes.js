const express = require('express');
const router = express.Router();
var path = require('path');

router.get('/', async (req, res, next) => {
    try {
        return res.sendFile(path.join(__dirname + '/index.html'));
    } catch (error) {
        next(error);
    }
  });
  
  module.exports = app => app.use('/', router);