const mongoose = require('mongoose');

require('./User');
require('./Chat');

const schema = mongoose.Schema(
  {
    user: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    chat: {
      type: mongoose.Types.ObjectId,
      ref: 'Chat',
      required: true,
    },
    text: {
      type: String,
      required: true,
      minLength: 1,
    },
  },
  { timestamps: true }
);

const messagesModel = mongoose.models.Message || mongoose.model('Message', schema);

export default messagesModel;
