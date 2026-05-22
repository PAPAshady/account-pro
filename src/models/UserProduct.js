const mongoose = require('mongoose');
require('./User');

const schema = mongoose.Schema({
  user: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: 'User',
  },
  title: { type: String, required: true, trim: true, min: 3 },
  createdAt: { type: Date, required: true, default: new Date() },
  expiresAt: { type: Date, required: true },
  price: { type: Number, default: 0, min: 0 },
  accountType: { type: String, required: true, default: 'new', min: 3 },
  imageUrl: { type: String, required: true },
  userName: { type: String, required: true, minLength: 2, maxLength: 50, trim: true },
  slug: { type: String, required: true, minLength: 1 },
  email: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
    match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email'],
  },
  duration: {
    type: Number, // in days
    required: true,
    min: 30,
  },
});

const userProductsModel = mongoose.models.UserProduct || mongoose.model('UserProduct', schema);

export default userProductsModel;
