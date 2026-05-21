const mongoose = require('mongoose');

export const cartItemSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
    min: 3,
  },
  imageUrl: {
    type: String,
    required: true,
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
  accountType: {
    type: String,
    required: true,
    default: 'new',
    min: 3,
  },
  planId: {
    type: mongoose.Types.ObjectId,
    required: true,
  },
  planTitle: {
    type: String,
    required: true,
    trim: true,
    min: 3,
  },
  quantity: {
    type: Number,
    required: true,
    min: 1,
    default: 1,
  },
  slug: { type: String, required: true, minLength: 1 },
});

const cartSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
      required: true,
      unique: true,
    },
    items: [cartItemSchema],
  },
  { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

// calculate total items
cartSchema.virtual('totalItems').get(function () {
  return this.items.reduce((sum, item) => sum + item.quantity, 0);
});

// Calculate total price
cartSchema.virtual('totalPrice').get(function () {
  return this.items.reduce((total, item) => {
    // Product must be populated for this to work
    const price = item.price || 0;
    return total + price * item.quantity;
  }, 0);
});

const cartModel = mongoose.models.Cart || mongoose.model('Cart', cartSchema);

export default cartModel;
