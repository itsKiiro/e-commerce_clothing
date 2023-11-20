const express = require('express');
const router = express.Router();
const BestSeller = require('../db/model/BestSeller.model.js');

router.get("/best-seller", async (req, res) => {
    try {
        const bestSeller = await BestSeller.find({});
        res.json(bestSeller);
    } catch (error) {
        res.status(500).send(error.message);
    }
})


module.exports = router;