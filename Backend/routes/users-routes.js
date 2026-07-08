const express = require("express");

const { getUserById, getUsers } = require("../controllers/users-controller");

const router = express.Router();

router.get("/:uid", getUserById);

router.get("/", getUsers);

module.exports = router;
