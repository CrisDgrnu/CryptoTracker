const { Schema, model } = require('mongoose');

const schema = new Schema({
  currency: {
    type: String,
    required: true,
    uppercase: true,
  },
  dateIn: {
    type: Date,
    required: true,
  },
  dateOut: {
    type: Date,
    required: true,
  },
  priceIn: {
    type: Number,
    required: true,
  },
  priceOut: {
    type: Number,
    required: true,
  },
  tokensIn: {
    type: Number,
    required: true,
  },
  tokensOut: {
    type: Number,
    required: true,
  },
  balanceIn: {
    type: Number,
    required: true,
  },
  balanceOut: {
    type: Number,
    required: true,
  },
  performance: {
    type: Number,
    required: true,
  },
  gains: {
    type: Number,
    required: true,
  },
});

const Entry = model('Entry', schema);

module.exports = Entry;
