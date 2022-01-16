const jwt = require('jsonwebtoken');

const createToken = (user) => {
  const userForToken = { id: user._id, username: user.username };
  return jwt.sign(userForToken, process.env.SECRET);
};

const verifyToken = (token) => {
  try {
    return jwt.verify(token, process.env.SECRET);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  createToken,
  verifyToken,
};
