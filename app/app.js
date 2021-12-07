const express = require('express');
const app = express();

// Database connection
require('./configurations/mongoDB');

// Routing
const router = require('./routes/router');
app.use('/', router);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
