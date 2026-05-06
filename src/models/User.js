const mongoose = require('mongoose');

import { USER_ROLES } from '@/constants';

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
      required: true,
      unique: true,
      match: [/^[0-9]{11}$/, 'Phone number must be 11 digits'],
    },
    role: {
      type: String,
      required: true,
      default: 'user',
      enum: Object.values(USER_ROLES),
    },
  },
  { timestamps: true }
);

const model = mongoose.models.User || mongoose.model('User', schema);

export default model;
