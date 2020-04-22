import { createContext } from "react";

export const UserContext = createContext({
  setUsername: () => {},
  username: "",
});
