const express = require("express");
const { check } = require("express-validator");

const {
  getUserById,
  getUsers,
  signup,
  login,
} = require("../controllers/users-controllers");
const fileUpload = require("../middleware/file-upload");

const router = express.Router();

router.get("/", getUsers);

router.get("/:uid", getUserById);

router.post(
  "/signup",
  fileUpload.single("image"),
  [
    check("name").not().isEmpty(),
    check("email").normalizeEmail().isEmail(),
    check("password").isLength({ min: 6 }),
  ],
  signup,
);

router.post(
  "/login",
  [check("email").isEmail().normalizeEmail(), check("password").exists()],
  login,
);

module.exports = router;
