const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    imageUrl: String,
    title: String,
    link: String
});

const LatestArticle = mongoose.model('LatestArticle', itemSchema);

module.exports = LatestArticle;
