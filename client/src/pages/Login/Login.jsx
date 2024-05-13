import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { IoEyeSharp } from "react-icons/io5";
import { FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";

const Login = () => {
  const [showpassword, setShowPassword] = useState(true)
  const [username, setUserName] = useState("")
  const [password, setPassword] = useState("")
  const { loading, login } = useLogin();
  const handleShowPassword = (e) => {
    e.preventDefault();
    setShowPassword((prev) => !prev)
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login({ username, password })

  }

  return (
    <div className="flex flex-col items-center justify-center min-w-80 mx-auto font-medium">
      <div className="w-full p-6 rounded-xl shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">

        <div className="flex flex-col justify-center lg:flex-row px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img className="mx-auto h-10 w-auto" src="/hikelogo.webp" alt="Your Company" />
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Log in to your account</h2>
          </div>
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form onSubmit={handleSubmit}>
              <div>
                <label className="label p-2">
                  <span className="text-base label-text flex items-center justify-center gap-2 text-black"><FaUser className="text-blue-700" />Username</span>
                </label>
                <input type="text" placeholder="eg. theboynextdoor" className="input h-10 input-bordered w-full max-w-xs"
                  value={username}
                  onChange={(e) => setUserName(e.target.value)}
                />
              </div>


              <div className="mt-2">
                <label htmlFor="email" className="label p-2">
                  <span className="text-base label-text flex items-center justify-center gap-2 text-black"><RiLockPasswordFill className="text-blue-700" />Password</span>
                </label>
                <div className="flex relative">
                  <input type={showpassword ? "password" : "text"} className="input h-10 input-bordered w-full max-w-xs"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  {showpassword ? <IoEyeSharp className="text-white text-2xl cursor-pointer absolute right-3 top-1.5" onClick={handleShowPassword} /> :
                    <FaEyeSlash className="text-white text-2xl cursor-pointer absolute right-3 top-1.5" onClick={handleShowPassword} />}
                </div>
              </div>

              <div className="mt-4">
                <button 
                  type="submit" 
                  className="flex w-full justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                  disabled={loading}
                  >{
                    loading ? <span className="loading loading-spinner "/> :"Log in"
                  }
                  </button>
              </div>
              <div>
                <p className="mt-10 text-center text-sm text-gray-500">
                  Don&apos;t have an account?
                  <span className="text-blue-700 cursor-pointer">
                    <Link to={"/signup"}>Signup</Link>
                  </span>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Login


{/* <div className="text-sm">
                    <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
                  </div> */}