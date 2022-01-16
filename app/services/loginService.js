const userRepository = require('../repositories/userRepository');
const bcryptUtils = require('../utils/bcryptUtils');
const jwtUtils = require('../utils/jwtUtils');

const login = async (username, password) => {
  try {
    const user = await userRepository.findOneByUserName(username);

    const passwordCorrect =
      user == null
        ? false
        : await bcryptUtils.comparePassword(password, user.passwordHash);

    if (!passwordCorrect) return { passwordCorrect: false, token: '' };

    const token = jwtUtils.createToken(user);

    return { passwordCorrect, token };
  } catch (error) {
    throw error;
  }
};

const verify = (authorization) => {
  try {
    let token = null;
    if (authorization && authorization.toLowerCase().startsWith('bearer')) {
      token = authorization.split(' ')[1];
    }

    if (!token) return false;

    const decodedToken = jwtUtils.verifyToken(token);

    if (!decodedToken) return false;

    return true;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  login,
  verify,
};
