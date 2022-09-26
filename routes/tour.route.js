const express = require("express");
const router = express.Router();
const {
    getAllTour,
    getATour,
    updateATour,
    addNewTour,
} = require("../controllers/tour.controllers");

router.route("/").get(getAllTour).post(addNewTour);
router.route("/:id").get(getATour, tourView).patch(updateATour);

module.exports = router;
