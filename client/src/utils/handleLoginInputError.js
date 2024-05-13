import toast from "react-hot-toast";

export function handleLoginInputError({fullName , userName , password , confirmPassword , gender}){
     if(!userName || !password ){
          toast.error("Please fill all the field");
          return false ;
     }
     return true;
}