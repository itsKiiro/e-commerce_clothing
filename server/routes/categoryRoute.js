const express = require('express');
const router = express.Router();
const Category = require('../db/model/Category.model.js');

router.get("/categories", async (req, res) => {
    try {
        const categories = await Category.find({});
        res.json(categories);
    } catch (error) {
        res.status(500).send(error.message);
    }
})


module.exports = router;