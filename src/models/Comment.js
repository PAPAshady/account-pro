const mongoose = require('mongoose');
require('./User');
require('./Product');

const schema = mongoose.Schema(
  {
    user: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    productId: {
      type: mongoose.Types.ObjectId,
      ref: 'Product',
      required: true,
    },
    rating: {
      type: Number,
      min: 1,
      max: 5,
      default: null,
    },
    body: {
      type: String,
      required: true,
      trim: true,
      maxlength: 1000,
    },
    parentComment: {
      type: mongoose.Types.ObjectId,
      ref: 'Comment',
      default: null,
    },
  },
  { timestamps: true }
);

const commentsModel = mongoose.models.Comment || mongoose.model('Comment', schema);

export default commentsModel;
