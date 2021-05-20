const express = require('express');

const FlowerRouter = require('./flowers/flowers-router.js');

const server = express();

server.use(express.json());

server.use('/flowers', FlowerRouter);

server.get('/', (req, res) => {
  res.status(200).json({ api: 'up' });
});

module.exports = server;
