const mongoose = require('mongoose');
const { server } = require('../../app/app');

module.exports = () => {
  mongoose.connection.close();
  server.close();
};
