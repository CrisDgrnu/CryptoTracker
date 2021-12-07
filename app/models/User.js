const { Schema, model } = require('mongoose');

const schema = new Schema({
  username: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  passwordHash: {
    type: String,
    required: true,
  },
  entries: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Entry',
    },
  ],
});

schema.set('toJSON', {
  transform: (doc, returnedObj) => {
    delete returnedObj.passwordHash;
  },
});

const User = model('User', schema);

module.exports = User;
