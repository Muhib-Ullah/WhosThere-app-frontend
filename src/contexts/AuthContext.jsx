import { useState, useEffect, createContext } from "react";
import { getToken, isAuthenticated } from "../utils/Token";
import axios from "../api/axios";
import { GetUserDetails } from "../services/AuthService";

export const AuthContext = createContext();

export function AuthProvider ({children}) {
  const [ AuthUser, setAuthUser ] = useState(null)

  useEffect(() => {
      const fetchUserDetails = async () => {
          if (isAuthenticated()) {
            try {
              const response = await GetUserDetails();
              setAuthUser(response.data);
            } catch(error) {
              console.error("failed to fetch user details", error);
            }
          }
      };

      fetchUserDetails();
  }, []);

  return (
    <AuthContext.Provider value= {{AuthUser, setAuthUser}}>
       {children}
    </AuthContext.Provider> 
  );
}