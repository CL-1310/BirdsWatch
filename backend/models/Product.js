const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
  productId: { type: String, required: true },
  type: { type: String, required: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  color: { type: String, required: true },
  imageUrl: { type: String, required: true },
  quantity: { type: String, required: true },
  price: { type: String, required: true },
});

module.exports = mongoose.model('Product', productSchema);