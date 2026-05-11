const mongoose = require('mongoose');
require('./Product');

const schema = mongoose.Schema(
  {
    productId: {
      type: mongoose.Types.ObjectId,
      ref: 'Product',
    },
    title: {
      type: String,
      required: true,
      trim: true,
      min: 3,
    },
    latinTitle: {
      type: String,
      required: true,
      trim: true,
      min: 3,
    },
    price: {
      type: Number,
      default: 0,
      min: 0,
    },
    duration: {
      type: Number, // in days
      required: true,
      min: 30,
    },
    specifications: [
      {
        title: {
          type: String,
          required: true,
          min: 5,
        },
        description: { type: String, require: true, min: 10 },
      },
    ],
  },
  { timestamps: true }
);

const plansModel = mongoose.models.Plan || mongoose.model('Plan', schema);

export default plansModel;
