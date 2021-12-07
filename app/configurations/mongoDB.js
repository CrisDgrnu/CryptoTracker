const mongoose = require('mongoose');

const connectionString =
  'mongodb+srv://demo:demo123@cluster0.or75w.mongodb.net/cryptoTracker?retryWrites=true&w=majority';

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
