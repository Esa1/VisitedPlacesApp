const express = require("express");

const {
  getPlaceById,
  getPlacesByUserId,
  createPlace,
} = require("../controllers/places-controller");
// const placesController = require("../controllers/places-controller");

const router = express.Router();

router.get("/:pid", getPlaceById); // placesController.getPlaceById

router.get("/user/:uid", getPlacesByUserId);

router.post("/", createPlace);

module.exports = router;
