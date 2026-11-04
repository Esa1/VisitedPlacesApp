const dotenv = require("dotenv");
dotenv.config();
const fs = require("fs");
const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const placesRoutes = require("./routes/places-routes");
const usersRoutes = require("./routes/users-routes");

const HttpError = require("./models/http-error");

const app = express();

app.use(bodyParser.json());

app.use("/uploads/images", express.static(path.join("uploads", "images")));
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization",
  );
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");
  next();
});

app.use("/api/places", placesRoutes);
app.use("/api/users", usersRoutes);

app.use((req, res, next) => {
  const error = new HttpError("Could not find this route.", 404);
  throw error;
});

app.use((error, req, res, next) => {
  if (req.file) {
    fs.unlink(req.file.path, (err) => {
      console.error("Failed to delete uploaded file:", err);
    });
  }
  if (res.headerSent) {
    return next(error);
  }

  res
    .status(error.code || 500)
    .json({ message: error.message || "An unknown error occurred!" });
});

console.log(`Connecting to MongoDB as ${process.env.DB_USER}`);
console.log(`Using database: ${process.env.DB_NAME}`);
console.log(
  `MongoDB password: ${process.env.DB_PASSWORD ? "********" : "not set"}`,
);
mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0326.rculus7.mongodb.net/${process.env.DB_NAME}?appName=Cluster0326&retryWrites=true&w=majority `,
  )
  // .connect(process.env.MONGO_URL)
  .then(() => {
    app.listen(5000);
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB:", err);
  });
