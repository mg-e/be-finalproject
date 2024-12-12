const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = new Schema({
    name: {
        type: String,
        required: [true, "Please enter item's name"],
    },

    quantity: {
        type: Number,
        required: true,
        default: 0,
      },

    price: {
      type: Number,
      required: true,
      default: 0,
    },

    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Item', itemSchema);