import { useUserContext } from "../../context/DashboardContext";

const Sidebar = () => {
  const user = useUserContext();

  return (
    <div className="h-auto w-80 bg-sky-700">
      <h1>Sidebar</h1>
      {user.name && <p>User: {user.name}</p>}
      <p>
        Subscription: {user.isSubscribed === true ? "Pro" : "Free Trial"} Member
      </p>
    </div>
  );
};

export default Sidebar;
