const bcrypt = require('bcrypt');

const hashPassword = async (password) => {
  const saltRounds = 10;
  const passwordHashed = await bcrypt.hash(password, saltRounds);
  return passwordHashed;
};

const comparePassword = async (reqPassword, userPassword) => {
  return await bcrypt.compare(reqPassword, userPassword);
};

module.exports = {
  hashPassword,
  comparePassword,
};
