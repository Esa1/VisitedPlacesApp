const express = require("express");

const {
  getUserById,
  getUsers,
  signup,
} = require("../controllers/users-controller");

const router = express.Router();

router.get("/", getUsers);

router.get("/:uid", getUserById);

router.post("/signup", signup);

module.exports = router;
