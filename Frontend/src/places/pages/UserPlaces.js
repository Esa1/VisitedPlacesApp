import React from "react";
import { useParams } from "react-router-dom";

import PlaceList from "../components/PlaceList";

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Empire State Building 1",
    description: "One of the most famous sky scrapers in the world!",
    imageUrl:
      "https://lh3.googleusercontent.com/gps-cs-s/APNQkAGNo50QB0M2EIP3qi32gH38lYiZ9OGsub1pFxX9-JUxLzGUlkutEctibOdBw7DZlDnKPHEjJURGCjo5cJRhDXy7vlWbS9nH1o55hlWe0YRNi2E8Tww2GlrBbQDiXc2-u5A6kvdGSQ=w270-h312-n-k-no",
    address: "20 W 34th St, New York, NY 10001",
    location: {
      lat: 40.7484405,
      lng: -73.9878584,
    },
    creator: "u1",
  },
  {
    id: "p2",
    title: "Empire State Building 2",
    description: "One of the most famous sky scrapers in the world!",
    imageUrl:
      "https://lh3.googleusercontent.com/gps-cs-s/APNQkAGNo50QB0M2EIP3qi32gH38lYiZ9OGsub1pFxX9-JUxLzGUlkutEctibOdBw7DZlDnKPHEjJURGCjo5cJRhDXy7vlWbS9nH1o55hlWe0YRNi2E8Tww2GlrBbQDiXc2-u5A6kvdGSQ=w270-h312-n-k-no",
    address: "20 W 34th St, New York, NY 10001",
    location: {
      lat: 40.7484405,
      lng: -73.9878584,
    },
    creator: "u2",
  },
];

const UserPlaces = () => {
  const userId = useParams().userId;
  const loadedPlaces = DUMMY_PLACES.filter((place) => place.creator === userId);
  return <PlaceList items={loadedPlaces} />;
};

UserPlaces.propTypes = {};

export default UserPlaces;
