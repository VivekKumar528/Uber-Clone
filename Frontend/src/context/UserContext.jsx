import React, { createContext, useState } from "react";

export const UserDataContext = createContext();
const UserContext = ({ children }) => {
  const [user, SetUser] = useState({
    email: "",
    fullName: {
      firstName: "",
      LastName: "",
    },
  });
  return (
    <div>
      <UserDataContext.Provider value={[user, SetUser]}>
        {children}
      </UserDataContext.Provider>
    </div>
  );
};

export default UserContext;
