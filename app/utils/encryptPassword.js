const bcrypt = require('bcrypt');

module.exports = async (password) => {
  const saltRounds = 10;
  const passwordHashed = await bcrypt.hash(password, saltRounds);
  return passwordHashed;
};
