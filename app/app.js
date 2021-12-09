const express = require('express');
const app = express();

// Database connection
require('dotenv').config();
require('./configurations/mongoDB');

// Routing
const router = require('./routes/router');
app.use('/', router);

const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = { app, server };
