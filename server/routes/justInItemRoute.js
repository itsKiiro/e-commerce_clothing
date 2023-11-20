const express = require('express');
const router = express.Router();
const Item = require('../db/model/JustInItem.model.js');

router.get("/just-in-items", async (req, res) => {
    try {
        const items = await Item.find({});
        res.json(items);
    } catch (error) {
        res.status(500).send(error.message);
    }
})


module.exports = router;