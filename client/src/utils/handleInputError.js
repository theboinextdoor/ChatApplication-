import toast from "react-hot-toast";

export function handleInputError({fullName , userName , password , confirmPassword , gender}){
     if(!fullName || !userName || !password || !confirmPassword || !gender){
          toast.error("Please fill all the field");
          return false ;
     }
     if(password !== confirmPassword){
          toast.error("Password did'nt match")
          return false;
     }
     if(password.length < 8){
          toast.error("Password must be 8 character long")
          return false;
     }
     return true;
}