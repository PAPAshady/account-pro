const mongoose = require('mongoose');

import { FAVORITES_ITEM_TYPES } from '@/constants';
require('./User');
require('./Product');

const schema = mongoose.Schema({
  user: {
    type: mongoose.Types.ObjectId,
    ref: 'User',
    require: true,
  },
  type: {
    type: String,
    require: true,
    enum: Object.values(FAVORITES_ITEM_TYPES),
  },
  item: {
    type: mongoose.Types.ObjectId,
    required: true,
    refPath: 'type',
  },
});

const favoritesModel = mongoose.models.Favorite || mongoose.model('Favorite', schema);

export default favoritesModel;
