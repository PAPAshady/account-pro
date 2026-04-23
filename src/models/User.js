const { mongoose } = require('mongoose');

const schema = mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
      minLength: 6,
      maxLength: 20,
    },
    name: {
      type: String,
      require: true,
      minLength: 2,
    },
    phone: {
      type: String,
      minLength: 11,
      maxLength: 11,
      require: true,
    },
  },
  { timestamps: true }
);

const model = mongoose.models.User || mongoose.model('User', schema);

export default model;
