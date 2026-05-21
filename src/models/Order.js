const mongoose = require('mongoose');

import { cartItemSchema } from './Cart';
import { ORDER_STATUS } from '@/constants';
require('./User');

const schema = mongoose.Schema(
  {
    user: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    telegram: String,
    whatsapp: String,
    footNote: String,
    email: {
      type: String,
      trim: true,
      required: true,
    },
    firstName: {
      type: String,
      required: true,
      minLength: 2,
      maxLength: 50,
      trim: true,
    },
    lastName: {
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
      match: [/^[0-9]{11}$/, 'Phone number must be 11 digits'],
    },
    status: {
      type: String,
      required: true,
      default: ORDER_STATUS.SUCCESS,
      enum: Object.values(ORDER_STATUS),
    },
    orderId: {
      type: String,
      required: true,
      unique: true,
    },
    orders: [cartItemSchema],
  },
  { timestamps: true }
);

const ordersModel = mongoose.models.Order || mongoose.model('Order', schema);

export default ordersModel;
