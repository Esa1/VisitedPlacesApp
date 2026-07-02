const { v4: uuidv4 } = require("uuid");

const HttpError = require("../models/http-error");

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Empire State Building",
    description: "One of the most famous sky scrapers in the world!",
    location: {
      lat: 40.7484405,
      lng: -73.9878584,
    },
    address: "20 W 34th St, New York, NY 10001",
    creator: "u1",
  },
];

const getPlaceById = (req, res, next) => {
  const placeId = req.params.pid; // { pid: 'p1' }
  const place = DUMMY_PLACES.find((p) => p.id === placeId);

  if (!place) {
    throw new HttpError("Could not find a place for the provided id.", 404);
  }

  res.json({ place });
};

const getPlacesByUserId = (req, res, next) => {
  const userId = req.params.uid;
  const places = DUMMY_PLACES.filter((p) => p.creator === userId);

  if (!places || places.length === 0) {
    throw new HttpError(
      "Could not find a place for the provided user id.",
      404,
    );
  }

  res.json({ places });
};

const createPlace = (req, res, next) => {
  console.log(req.body);
  const { title, description, coordinates, address, creator } = req.body; // const title = req.body.title; const description = req.body.description; ...
  const newPlace = {
    id: uuidv4(), // generates a unique id
    title,
    description,
    location: coordinates,
    address,
    creator,
  };
  DUMMY_PLACES.push(newPlace); // unshift(newPlace) to add to the beginning of the array
  res.status(201).json({ place: newPlace });
};

module.exports = {
  getPlaceById,
  getPlacesByUserId,
  createPlace,
};

// exports.getPlaceById = getPlaceById;
// exports.getPlacesByUserId = getPlacesByUserId;

// {
//     "title": "New York Stock Exchange",
//     "description": "Where the money lives",
//     "coordinates": {
//         "lat": 40.706,
//         "lng": -74.010
//     },
//     "address": "New York Stock Exchange",
//     "creator": "u2"
// }
