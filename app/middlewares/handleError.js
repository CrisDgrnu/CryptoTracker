module.exports = (error, req, res, next) => {
  console.log(error);
  if (error.name == 'ValidationError') {
    res.status(400).json({ error: 'The provided data is malformed' });
  }
  res.status(500).end();
};
