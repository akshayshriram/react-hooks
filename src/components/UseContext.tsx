import { DashboardContext, type User } from "../context/DashboardContext";
import { useState } from "react";
import Dashboard from "./Dashboard";

const UseContext = () => {
  const [user] = useState<User>({
    isSubscribed: true,
    name: "Akshay",
  });
  return (
    <div className="flex min-h-screen h-full">
      <DashboardContext.Provider value={user}>
        <Dashboard />
      </DashboardContext.Provider>
    </div>
  );
};

export default UseContext;
