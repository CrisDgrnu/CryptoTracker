const model = require('../models/User');

const findOneById = async (id) => {
  try {
    return await model.findOne({ _id: id }).populate('entries', {
      user: 0,
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

const update = async (id, data) => {
  try {
    return await model.findByIdAndUpdate(id, data, { new: true });
  } catch (error) {
    throw error;
  }
};

module.exports = {
  findOneById,
  create,
  update,
};
