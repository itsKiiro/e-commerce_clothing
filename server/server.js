const express = require("express");
const app = express();
const mongoose = require("mongoose");
const justInItemRoutes = require('./routes/justInItemRoute.js');
const categoryRoutes = require('./routes/categoryRoute.js');
const topFourRoutes = require('./routes/topFourRoute.js');
const bestSellerRoutes = require('./routes/bestSellerRoute.js');
const latestArticleRoutes = require('./routes/latestArticleRoute.js');
require('dotenv').config();
const cors = require('cors');
const path = require("path");

app.use(express.json());
app.use(cors());
app.use('/images', express.static('./db/images'));



mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use("/api", justInItemRoutes);
app.use("/api", categoryRoutes);
app.use("/api", topFourRoutes);
app.use("/api", bestSellerRoutes);
app.use("/api", latestArticleRoutes);


const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});