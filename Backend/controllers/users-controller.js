const { v4: uuidv4 } = require("uuid");

const HttpError = require("../models/http-error");

const DUMMY_USERS = [
  {
    id: "u1",
    name: "John Doe",
    email: "john@example.com",
    password: "password123",
  },
];

const getUserById = (req, res, next) => {
  const userId = req.params.uid;
  const user = DUMMY_USERS.find((u) => u.id === userId);

  if (!user) {
    throw new HttpError("Could not find a user for the provided id.", 404);
  }

  res.json({ user });
};

const getUsers = (req, res, next) => {
  res.json({ users: DUMMY_USERS });
};

const signup = (req, res, next) => {
  const { name, email, password } = req.body;
  const newUser = {
    id: uuidv4(),
    name,
    email,
    password,
  };
  DUMMY_USERS.push(newUser);
  res.status(201).json({ user: newUser });
};

module.exports = {
  getUserById,
  getUsers,
  signup,
};
