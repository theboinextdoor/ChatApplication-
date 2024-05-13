import GenderBox from "./GenderBox";
import { FaUser } from "react-icons/fa";
import { FaPerson } from "react-icons/fa6";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { IoEyeSharp } from "react-icons/io5";
import { FaEyeSlash } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useSignup from "../../hooks/useSignup";





const SignUp = () => {
  const navigator = useNavigate();
  const [showpassword, setShowPassword] = useState(true)
  const [showConfirmpassword, setShowConfirmPassword] = useState(true)
  const [inputfield, setInputField] = useState({
    fullName: "",
    userName: "",
    password: "",
    confirmPassword: "",
    gender: "",
  })

  const { loading, signup } = useSignup()

  const handleShowPassword = (e) => {
    e.preventDefault();
    setShowPassword((prev) => !prev)
  }

  const handleShowConfirmPassword = (e) => {
    e.preventDefault();
    setShowConfirmPassword((prev) => !prev)
  }

  const handleGenderBox = (gender) => {
    setInputField({
      ...inputfield,
      gender,
    })
  }

  const handleSubmitButton = async (e) => {
    e.preventDefault();
    // console.log(inputfield);
    await signup(inputfield)

      inputfield.fullName = "",
      inputfield.userName = "",
      inputfield.password = "",
      inputfield.confirmPassword = ""
      inputfield.gender = ""




  }




  return (
    <div className="flex flex-col items-center justify-center  min-w-0 sm:min-w-96 mx-auto font-medium">
      <div className="w-full p-6 rounded-xl shadow-lg bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">

        {/* Company Logo  */}
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img className="mx-auto h-10 w-auto" src="/hikelogo.webp" alt="Your Company" />
          <h2 className="mt-2 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmitButton}>

          {/* Full Name */}
          <div className="mt-4">
            <label className="label p-2">
              <span className="text-base label-text flex items-center justify-center gap-2 text-black"><MdDriveFileRenameOutline className="text-blue-700" />Full Name</span>
            </label>
            <input
              type="text"
              placeholder="John Wick"
              className="input h-10 input-bordered w-full max-w-xs" value={inputfield.fullName}
              onChange={(e) => setInputField({ ...inputfield, fullName: e.target.value })}
            />
          </div>

          {/* userName */}
          <div className="mt-2">
            <label className="label p-2">
              <span className="text-base label-text flex items-center justify-center gap-2 text-black"><FaUser className="text-blue-700" />Username</span>
            </label>
            <input
              type="text"
              placeholder="eg. theboynextdoor"
              className="input h-10 input-bordered w-full max-w-xs" value={inputfield.userName}
              onChange={(e) => setInputField({ ...inputfield, userName: e.target.value })}
            />
          </div>

          {/* Password */}
          <div className="mt-2">
            <label className="label p-2">
              <span className="text-base label-text flex items-center justify-center gap-2 text-black"><RiLockPasswordFill className="text-blue-700" />Password</span>
            </label>
            <div className="flex relative">
              <input
                type={showpassword ? "password" : "text"}
                className="input h-10 input-bordered w-full max-w-xs" value={inputfield.password}
                onChange={(e) => setInputField({ ...inputfield, password: e.target.value })}
              />
              {showpassword ? <IoEyeSharp className="text-white text-2xl cursor-pointer absolute right-6 top-1.5" onClick={handleShowPassword} /> :
                <FaEyeSlash className="text-white text-2xl cursor-pointer absolute right-6 top-1.5" onClick={handleShowPassword} />}
            </div>
          </div>

          {/* Confirm Password */}
          <div className="mt-2">
            <label className="label p-2">
              <span className="text-base label-text flex items-center justify-center gap-2 text-black"><RiLockPasswordFill className="text-blue-700" />Confirm Password</span>
            </label>
            <div className="flex relative">
              <input
                type={showConfirmpassword ? "password" : "text"}
                className="input h-10 input-bordered w-full max-w-xs" value={inputfield.confirmPassword}
                onChange={(e) => setInputField({ ...inputfield, confirmPassword: e.target.value })}
              />
              {showConfirmpassword ? <IoEyeSharp className="text-white text-2xl cursor-pointer absolute right-6 top-1.5" onClick={handleShowConfirmPassword} /> :
                <FaEyeSlash className="text-white text-2xl cursor-pointer absolute right-6 top-1.5" onClick={handleShowConfirmPassword} />}
            </div>
          </div>

          {/* Gender Checkbox */}
          <div className="p-2">
            <div className="flex gap-1 text-blue-700 text-lg items-center font-medium">
              <FaPerson />
              <h1 className="my-2 text-black">Gender</h1>
            </div>
            <GenderBox onGenderChange={handleGenderBox} selectedGender={inputfield.gender} />
          </div>

          {/* Sign in Button */}
          <div className="mt-1 flex items-center justify-center">
            <button className="btn bnt-block btn-sm  border bg-sky-500 text-white active:bg-sky-400 hover:bg-sky-600" disabled={loading}>
              {
                loading ? <span className="loading loading-spinner"/> : "Sign Up"
              }
            </button>
          </div>
          <div>
            <p className="mt-2 text-center text-sm text-gray-500">
              Already have an account?
              <span className="text-blue-700 cursor-pointer">
                <Link to={"/login"} >Login</Link>
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignUp;