import React from "react";

import "./UserItem.css";

const UserItem = (props) => {
  return (
    <li className="user-item">
      <div className="user-item__content">
        <div className="user-item__image">
          <img src={props.image} alt={props.name} />
        </div>
      </div>
      <div className="user-item__info">
        <h2>{props.name}</h2>
        <h3>
          {props.placesCount} {props.placesCount === 1 ? "Place" : "Places"}
        </h3>
      </div>
    </li>
  );
};

UserItem.propTypes = {};

export default UserItem;
