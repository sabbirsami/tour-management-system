const express = require("express");
const { getAllTour, getATour } = require("../controllers/tour.controllers");
const router = express.Router();

router.route("/").get(getAllTour).post(addNewTour);
router.route("/:id").get(getATour).patch(updateATour);

module.exports = router;
