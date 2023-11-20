const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    imageUrl: String,
    title: String,
});

const TopFourItem = mongoose.model('TopFourItem', itemSchema);

module.exports = TopFourItem;
