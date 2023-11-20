const express = require('express');
const router = express.Router();
const TopFourItem = require('../db/model/TopFourItem.model.js');

router.get("/top-four-items", async (req, res) => {
    try {
        const top = await TopFourItem.find({});
        res.json(top);
    } catch (error) {
        res.status(500).send(error.message);
    }
})


module.exports = router;