const express = require("express");

const {
  getUserById,
  getUsers,
  signup,
  login,
} = require("../controllers/users-controller");

const router = express.Router();

router.get("/", getUsers);

router.get("/:uid", getUserById);

router.post("/signup", signup);

router.post("/login", login);

module.exports = router;
