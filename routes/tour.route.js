const express = require("express");
const { getAllTour } = require("../controllers/tour.controllers");
const router = express.Router();

router.route("/").get(getAllTour);

module.exports = router;
