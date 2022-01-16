const ERROR_CATALOG = {
  ValidationError: (res) => {
    res.status(400).json({ error: 'error validating the data' });
  },
  CastError: (res) => {
    res.status(400).json({ error: 'the provided data is malformed' });
  },
  ReferenceError: (res) => {
    res.status(400).json({ error: 'reference error' });
  },
  JsonWebTokenError: (res) => {
    res.status(401).json({ error: 'missing or invalid token' });
  },
  TokenExpirerError: (res) => {
    res.status(401).json({ error: 'token expired' });
  },
  DefaultError: (res) => {
    res.status(500).end();
  },
};

module.exports = (error, req, res, next) => {
  console.error(error);
  const handler = ERROR_CATALOG[error.name] || ERROR_CATALOG.DefaultError;
  handler(res);
};
