const Item = require('../model/JustInItem.model.js');
const mongoose = require("mongoose");
require('dotenv').config({ "path": "../../.env" });
const Category = require('../model/Category.model.js');
const TopFourItem = require('../model/TopFourItem.model.js');
const BestSeller = require('../model/BestSeller.model.js');
const LatestArticle = require('../model/LatestArticle.model.js');


mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const items = [
    { imageUrl: "justIn1.jpg", title: '96 Nupste Dip Dye Korea Puffers Jacket', price: 400.00 },
    { imageUrl: 'justIn2.jpg', title: 'Paradigm Chilliwack Black Label Jacket', price: 149.99 },
    { imageUrl: 'justIn4.webp', title: 'Paradigm Chilliwack Black Label Jacket', price: 384.99 },
    { imageUrl: 'justIn3.jpg', title: '1996 Retro Nuptse Jacket in Black', price: 270.00 },
    { imageUrl: 'justIn5.webp', title: 'Paul Quilted Nylon Puffer bomber jacket', price: 739.99 },

];

const categories = [
    { imageUrl: "category_1.jpg", title: 'Puffer' },
    { imageUrl: 'category_2.png', title: 'Bombers' },
    { imageUrl: "category_3.jpg", title: 'Lightweight jackets' },
    { imageUrl: 'category_5.webp', title: 'Gilets' },
    { imageUrl: "category_8.jpg", title: 'Coats' },
    { imageUrl: 'category_7.webp', title: 'Rainwear' },
];

const topFourItems = [
    { imageUrl: "top_1.jpg", title: 'November Outfits', text: "Collection" },
    { imageUrl: 'top_3.jpg', title: 'Cashmere Set', text: "Collection" },
    { imageUrl: "top_4.jpg", title: 'The New Nordic', text: "Collection" },
    { imageUrl: 'top_2.jpg', title: 'The Leather', text: "Collection" },
]

const bestSeller = [
    { imageUrl: "justIn1.jpg", title: '96 Nupste Dip Dye Korea Puffers Jacket', price: 400.00 },
    { imageUrl: 'justIn2.jpg', title: 'Paradigm Chilliwack Black Label Jacket', price: 149.99 },
    { imageUrl: 'justIn4.webp', title: 'Paradigm Chilliwack Black Label Jacket', price: 384.99 },
    { imageUrl: 'justIn3.jpg', title: '1996 Retro Nuptse Jacket in Black', price: 270.00 },
    { imageUrl: 'justIn5.webp', title: 'Paul Quilted Nylon Puffer bomber jacket', price: 739.99 },
    { imageUrl: "justIn1.jpg", title: '96 Nupste Dip Dye Korea Puffers Jacket', price: 400.00 },
    { imageUrl: 'justIn2.jpg', title: 'Paradigm Chilliwack Black Label Jacket', price: 149.99 },
    { imageUrl: 'justIn4.webp', title: 'Paradigm Chilliwack Black Label Jacket', price: 384.99 },

];

const latestArticles = [
    { imageUrl: "article_1.jpg", title: '2024 Holiday Gift Guide', link: "https://karall.dev" },
    { imageUrl: 'article_2.jpg', title: 'Gen Z Clothing Trends', link: "https://karall.dev" },
    { imageUrl: "article_3.jpg", title: 'Summer Design 2024', link: "https://karall.dev" },
]

const populateJustInItems = async () => {
    await Item.deleteMany({});

    await Item.insertMany(items)
        .then(res => console.log(res))
        .catch(err => console.log(err));    
}

const populateCategories = async () => {
    await Category.deleteMany({});

    await Category.insertMany(categories)
        .then(res => console.log(res))
        .catch(err => console.log(err));    
}

const populateTopFourItems = async () => {
    await TopFourItem.deleteMany({});

    await TopFourItem.insertMany(topFourItems)
        .then(res => console.log(res))
        .catch(err => console.log(err));    
}

const populateBestSeller = async () => {
    await BestSeller.deleteMany({});

    await BestSeller.insertMany(bestSeller)
        .then(res => console.log(res))
        .catch(err => console.log(err));    
}

const populateLatestArticles = async () => {
    await LatestArticle.deleteMany({});

    await LatestArticle.insertMany(latestArticles)
        .then(res => console.log(res))
        .catch(err => console.log(err));    
}

populateLatestArticles();
populateBestSeller();
populateTopFourItems();
populateCategories();
populateJustInItems();


