const express = require("express");

const {
  getPlaceById,
  getPlacesByUserId,
} = require("../controllers/places-controller");
// const placesController = require("../controllers/places-controller");

const router = express.Router();

router.get("/:pid", getPlaceById); // placesController.getPlaceById

router.get("/user/:uid", getPlacesByUserId);

module.exports = router;
