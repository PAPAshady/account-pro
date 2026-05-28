const mongoose = require('mongoose');
require('./User');
require('./BlogCategory');

const schema = mongoose.Schema(
  {
    creator: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    title: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
      required: true,
    },
    category: {
      type: mongoose.Types.ObjectId,
      ref: 'BlogCategory',
      required: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
    imageUrl: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    readTime: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const blogsModel = mongoose.models.Blog || mongoose.model('Blog', schema);

export default blogsModel;
