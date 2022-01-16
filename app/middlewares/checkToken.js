const loginService = require('../services/loginService');

module.exports = (req, res, next) => {
  const authorization = req.get('authorization');
  const verified = loginService.verify(authorization);

  if (!verified) {
    next(error);
  }

  next();
};
