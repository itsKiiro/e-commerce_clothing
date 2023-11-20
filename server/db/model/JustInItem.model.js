const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    imageUrl: String,
    title: String,
    price: Number
});

const JustInItem = mongoose.model('JustInItem', itemSchema);

module.exports = JustInItem;
