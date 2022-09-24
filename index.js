const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const port = process.env.PORT || 5000;
const tourRoute = require("./routes/tour.route");
const { default: mongoose } = require("mongoose");

// MIDDLEWARE
app.use(cors);
app.use(express.json());

mongoose
    .connect(
        `mongodb+srv://${process.env.USER_ID}:${process.env.PASSWORD}@cluster0.up3hj.mongodb.net/?retryWrites=true&w=majority`,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }
    )
    .then(() => console.log(" Database connection successful "))
    .catch((err) => console.log(err));

// FOR ALL TOUR API
app.use("/api/tour", tourRoute);

app.get("/", (req, res) => {
    res.send("Tour Management System");
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
