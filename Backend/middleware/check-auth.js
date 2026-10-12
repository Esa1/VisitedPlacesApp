const jwt = require("jsonwebtoken");

const HttpError = require("../models/http-error");

module.exports = (req, res, next) => {
  if (req.method === "OPTIONS") {
    return next();
  }
  try {
    console.log("Authorization header:", req.headers.authorization);
    const token = req.headers.authorization.split(" ")[1]; // Authorization: 'Bearer TOKEN'
    if (!token) {
      return next(
        new HttpError("Authentication failed, no token provided!", 401),
      );
    }
    jwt.verify(token, process.env.JWT_KEY); // Verify the token using the secret key
    const decodedToken = jwt.decode(token); // Decode the token to get the payload
    req.userData = { userId: decodedToken.userId }; // Attach the user ID to the request object
    next();
  } catch (err) {
    return next(
      new HttpError(
        "Authentication failed, authorization header missing!",
        401,
      ),
    );
  }
};
