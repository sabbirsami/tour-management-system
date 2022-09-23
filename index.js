const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const port = process.env.PORT || 5000;
const tourRoute = require("./routes/tour.route");

// MIDDLEWARE
app.use(cors);
app.use(express.json());

mongoose.connect(
    `mongodb+srv://${process.env.USER_ID}:${process.env.PASSWORD}@cluster0.up3hj.mongodb.net/test`,
    {
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
    }
);

// FOR ALL TOUR API
app.use("/api/tour", tourRoute);

app.get("/", (req, res) => {
    res.send("Tour Management System");
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
