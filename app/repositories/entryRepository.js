const model = require('../models/Entry');

const findAll = async () => {
  try {
    return await model.find({}).populate('user', {
      username: 1,
    });
  } catch (error) {
    throw error;
  }
};

const findAllByCurrency = async (currency) => {
  try {
    return await model.find({ currency: currency }).populate('user', {
      username: 1,
    });
  } catch (error) {
    throw error;
  }
};

const create = async (data) => {
  try {
    return await model(data).save();
  } catch (error) {
    throw error;
  }
};

const remove = async (id) => {
  try {
    return await model.findByIdAndRemove(id);
  } catch (error) {
    throw error;
  }
};

const update = async (id, data) => {
  try {
    return await model.findByIdAndUpdate(id, data, { new: true });
  } catch (error) {
    throw error;
  }
};

module.exports = {
  findAll,
  findAllByCurrency,
  create,
  remove,
  update,
};
