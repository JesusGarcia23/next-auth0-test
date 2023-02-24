import { createContext, FC, useContext } from "react";

export interface UserProviderProps {
  children: React.ReactElement;
}

export interface UserContextProps {
  isAuthenticated?: boolean;
  isAuthorized?: boolean;
  isLoading?: boolean;
}

const UserContext = createContext({});

export const useUser = (): UserContextProps => useContext(UserContext);

export const UserProvider: FC<UserProviderProps> = ({ children }) => {
  return <UserContext.Provider value={{}}>{children}</UserContext.Provider>;
};
