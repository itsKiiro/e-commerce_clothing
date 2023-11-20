const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    imageUrl: String,
    title: String,
    price: Number
});

const BestSeller = mongoose.model('BestSeller', itemSchema);

module.exports = BestSeller;
