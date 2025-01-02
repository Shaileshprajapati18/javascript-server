const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.json());

const products = []; // Temporary in-memory database

app.get("/products", (req, res) => {
    res.json(products);
});

app.post("/products", (req, res) => {
    const product = req.body;
    products.push(product);
    res.status(201).json({ message: "Product added", product });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
