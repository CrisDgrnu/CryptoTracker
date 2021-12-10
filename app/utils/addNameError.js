module.exports = (error) => {
  const e = new Error(error);
  e.name = error.name;
  return e;
};
