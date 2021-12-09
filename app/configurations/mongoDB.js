const mongoose = require('mongoose');

const { MONGODB_CONNECTION_URI, MONGODB_CONNECTION_URI_TEST, NODE_ENV } =
  process.env;

const connectionString =
  NODE_ENV == 'test' ? MONGODB_CONNECTION_URI_TEST : MONGODB_CONNECTION_URI;

mongoose
  .connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Database connected');
  })
  .catch((err) => {
    console.log(err);
  });
