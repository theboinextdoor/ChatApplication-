import { BiLogOut } from "react-icons/bi";
import useLogout from "../../hooks/useLogout";

const LogoutButton = () => {
  const {loading , logout} = useLogout();
  return (
    <div className="text-black text-2xl mt-auto w-6 h-6 cursor-pointer active:text-gray-400">
      {
        !loading ? (
          <BiLogOut onClick={logout}/>
        ): (
          <span className="loading loading-spinner"/> 
        )
      }
    </div>
  )
}

export default LogoutButton