const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const port = process.env.PORT || 5000;

// MIDDLEWARE
app.use(cors);
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Tour Management System");
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
