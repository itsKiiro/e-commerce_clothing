const express = require('express');
const router = express.Router();
const LatestArticle = require('../db/model/LatestArticle.model.js');

router.get("/latestArticle", async (req, res) => {
    try {
        const articles = await LatestArticle.find({});
        res.json(articles);
    } catch (error) {
        res.status(500).send(error.message);
    }
})


module.exports = router;