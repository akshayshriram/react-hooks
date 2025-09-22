import { createContext, useContext } from "react";

export interface User {
  isSubscribed: boolean;
  name: string;
}

export const DashboardContext = createContext<User | undefined>(undefined);

export const useUserContext = () => {
  const user = useContext(DashboardContext);

  if (user === undefined) {
    throw new Error(
      "The user is not wrapped at the Dashboard component. Please proivde the value"
    );
  }

  return user;
};
