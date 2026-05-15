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

async function updateProductPlansSummary(productId) {
  const Product = mongoose.model('Product');

  const result = await mongoose.model('Plan').aggregate([
    { $match: { productId: new mongoose.Types.ObjectId(productId) } },
    {
      $group: {
        _id: '$productId',
        plansCount: { $sum: 1 },
        minPlanPrice: { $min: '$price' },
        maxPlanPrice: { $max: '$price' },
      },
    },
  ]);

  if (result.length > 0) {
    await Product.findByIdAndUpdate(productId, {
      plansCount: result[0].plansCount,
      minPlanPrice: result[0].minPlanPrice,
      maxPlanPrice: result[0].maxPlanPrice,
    });
  } else {
    await Product.findByIdAndUpdate(productId, {
      plansCount: 0,
      minPlanPrice: null,
      maxPlanPrice: null,
    });
  }
}

schema.post('save', async function (doc) {
  await updateProductPlansSummary(doc.productId);
});

schema.post('findOneAndUpdate', async function (doc) {
  if (doc) {
    await updateProductPlansSummary(doc.productId);
  }
});

schema.post('findOneAndDelete', async function (doc) {
  if (doc) {
    await updateProductPlansSummary(doc.productId);
  }
});

const plansModel = mongoose.models.Plan || mongoose.model('Plan', schema);

export default plansModel;
