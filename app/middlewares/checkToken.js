const loginService = require('../services/loginService');

module.exports = (req, res, next) => {
  try {
    const authorization = req.get('authorization');
    const verified = loginService.verify(authorization);

    if (!verified) {
      return res.status(401).json({ error: 'missing or invalid token' });
    }

    next();
  } catch (error) {
    next(error);
  }
};
