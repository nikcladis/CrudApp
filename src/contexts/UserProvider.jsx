import { createContext, useState } from "react";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [users, setUsers] = useState([]);

  const value = {
    searchQuery,
    setSearchQuery,
    users,
    setUsers,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export default UserProvider;
