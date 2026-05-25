const mongoose = require('mongoose');

import { CHAT_STATUS } from '@/constants';
require('./User');

const schema = mongoose.Schema(
  {
    user: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    replier: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
      default: null,
    },
    chatId: {
      type: String,
      required: true,
      unique: true,
    },
    status: {
      type: String,
      required: true,
      default: CHAT_STATUS.PENDING,
      enum: Object.values(CHAT_STATUS),
    },
    title: {
      type: String,
      required: true,
      minLength: 1,
    },
  },
  { timestamps: true }
);

const chatsModel = mongoose.models.Chat || mongoose.model('Chat', schema);

export default chatsModel;
