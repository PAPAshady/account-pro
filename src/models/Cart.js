const mongoose = require('mongoose');

const cartItemSchema = mongoose.Schema({
  product: {
    type: mongoose.Types.ObjectId,
    ref: 'Product',
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
    min: 1,
    default: 1,
  },
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
    const price = item.product?.price || 0;
    return total + price * item.quantity;
  }, 0);
});

const cartModel = mongoose.models.Cart || mongoose.model('Cart', cartSchema);

export default cartModel;
