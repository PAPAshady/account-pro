const mongoose = require('mongoose');

const schema = mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email'],
    },
    password: {
      type: String,
      required: true,
      minLength: 6,
      select: false,
    },
    name: {
      type: String,
      required: true,
      minLength: 2,
      maxLength: 50,
      trim: true,
    },
    phone: {
      type: String,
      trim: true,
      require: true,
      unique: true,
      match: [/^[0-9]{11}$/, 'Phone number must be 11 digits'],
    },
  },
  { timestamps: true }
);

const model = mongoose.models.User || mongoose.model('User', schema);

export default model;
