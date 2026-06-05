import React from "react";

import UserList from "../components/UserList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Max Schwarz",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Max_Schwarzmueller.jpg/220px-Max_Schwarzmueller.jpg",
      places: 3,
    },
  ];
  return <UserList items={USERS} />;
};

export default Users;
