import React from "react";
import { useUserContext } from "../../context/DashboardContext";

const Profile = () => {
  const user = useUserContext();
  return (
    <div className="h-full bg-violet-400 w-6xl">
      <h1>Profile</h1>
      {user.name && <p>{user.name}</p>}
    </div>
  );
};

export default Profile;
