import React from "react";
import { useParams } from "react-router-dom";

import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
} from "../../shared/util/validators";
// import "./UpdatePlace.css";

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Empire State Building",
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
    title: "Empire State Building",
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

const UpdatePlace = () => {
  const { placeId } = useParams();

  const identifiedPlace = DUMMY_PLACES.find((p) => p.id === placeId);

  if (!identifiedPlace) {
    return (
      <div className="center">
        <h2>Could not find place!</h2>
      </div>
    );
  }

  return <div>UpdatePlace: {placeId}</div>;
};

export default UpdatePlace;
