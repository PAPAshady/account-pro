const mongoose = require('mongoose');
require('./Category');

const schema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minLength: 3,
    },
    latinTitle: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minLength: 3,
    },
    heading: {
      type: String,
      unique: true,
      trim: true,
    },
    latinHeading: {
      type: String,
      unique: true,
      trim: true,
    },
    shortDescription: {
      type: String,
      required: true,
      trim: true,
    },
    longDescription: {
      type: String,
      required: true,
      trim: true,
    },
    price: {
      type: Number,
      default: 0,
      min: 0,
    },
    slug: {
      type: String,
      required: true,
      minLength: 1,
    },
    images: [
      {
        url: { type: String, required: true },
        alt: String,
        name: String,
      },
    ],
    region: {
      type: String,
      default: 'همه ریجن ها',
    },
    category: {
      type: mongoose.Types.ObjectId,
      required: true,
      ref: 'Category',
    },
    plansCount: {
      type: Number,
      default: 0,
    },
    minPlanPrice: {
      type: Number,
      default: null,
    },
    maxPlanPrice: {
      type: Number,
      default: null,
    },
  },
  { timestamps: true }
);

const model = mongoose.models.Product || mongoose.model('Product', schema);

export default model;
