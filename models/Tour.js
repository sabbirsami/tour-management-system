const mongoose = require("mongoose");

const tourSchema = mongoose.Schema({
    placeName: {
        type: String,
        required: [true, "Please provide a name for this product"],
        trim: true,
        unique: [true, "Name must be unique"],
        minLength: [3, "Name must be at least 3 characters"],
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
        min: [0, "Price can't be negative"],
    },
    img: {
        type: String,
        require: [true, "Please provide place image"],
    },
    cityName: {
        type: String,
        required: true,
        minLength: [3, "Name must be at least 3 characters"],
    },
});

const Tour = mongoose.model("Tour", tourSchema);
module.exports = Tour;
