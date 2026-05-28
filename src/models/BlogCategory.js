const mongoose = require('mongoose');

const schema = mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  latinTitle: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  slug: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  iconName: {
    type: String,
    required: true,
  },
});

const blogCategoriesModel = mongoose.models.BlogCategory || mongoose.model('BlogCategory', schema);

export default blogCategoriesModel;
