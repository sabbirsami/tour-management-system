const express = require("express");
const { getAllTour, getATour } = require("../controllers/tour.controllers");
const router = express.Router();

router.route("/").get(getAllTour).post(addNewTour);
router.route("/:id").get(getATour);

module.exports = router;
