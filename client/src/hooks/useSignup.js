import { useState } from "react"
import { handleInputError } from "../utils/handleInputError";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

const useSignup = () => {
     const [loading, setLoading] = useState(false);
     const { setAuthUser} = useAuthContext()

     const signup = async ({ fullName, userName, password, confirmPassword, gender }) => {
          const success = handleInputError({ fullName, userName, password, confirmPassword, gender })
          if (!success) return false;

          setLoading(true);
          try {
               const res = await fetch('/api/auth/signup', {
                    method: "POST",
                    headers: {
                         'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                         fullName, userName, password, confirmPassword, gender
                    })
               })

               const data = await res.json();

               // if any types of error comes
               if (data.error) {
                    throw new Error(data.error)
               }

               // localstorage
               localStorage.setItem("chat-user" , JSON.stringify(data))
               // context
               setAuthUser(data)
               console.log(data)

          } catch (error) {
               toast.error(error.message);
          } finally {
               setLoading(false);
          }
     }

     return { loading, signup }

}

export default useSignup


