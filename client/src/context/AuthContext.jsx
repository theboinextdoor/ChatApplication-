import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export const useAuthContext = () =>{
     return useContext(AuthContext)
}



export const AuthContextProvider = ({ children }) => {
     const [authUser , setAuthUser] = useState(JSON.parse(localStorage.getItem("chat-user") || null))



     // Wrapping this into the AuthCOntext.Provider so that entire application will be able to use the values  
     return <AuthContext.Provider value={{authUser , setAuthUser}}>
          {children}
     </AuthContext.Provider>
}