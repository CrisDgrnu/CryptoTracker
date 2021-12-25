const express = require('express');
const app = express();

// Database connection
require('dotenv').config();
require('./configurations/mongoDB');

// Routing
const router = require('./routes/router');
app.use('/', router);

// In test env run on port 0
const PORT = process.env.PORT || 3000;
if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

module.exports = { app };
