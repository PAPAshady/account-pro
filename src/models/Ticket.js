const mongoose = require('mongoose');

import { TICKET_STATUS } from '@/constants';
require('./User');

const schema = mongoose.Schema(
  {
    user: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    title: {
      type: String,
      required: true,
      minLength: 1,
    },
    description: {
      type: String,
      required: true,
      minLength: 1,
    },
    status: {
      type: String,
      required: true,
      default: TICKET_STATUS.PENDING,
      enum: Object.values(TICKET_STATUS),
    },
    chatId: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const ticketsModel = mongoose.models.Ticket || mongoose.model('Ticket', schema);

export default ticketsModel;
