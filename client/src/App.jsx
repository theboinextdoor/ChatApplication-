/* eslint-disable no-unused-vars */
import {BrowserRouter as Router , Routes , Route, Navigate} from "react-router-dom"
import {lazy , Suspense} from "react"
import Loading from "./components/Loading/Loading"
import { Toaster } from "react-hot-toast";
import { useAuthContext } from "./context/AuthContext";



// Dynamic Importing file
const Login = lazy(() => import("./pages/Login/Login"));
const SignUp = lazy(() => import("./pages/SignUp/SignUp"));
const Home = lazy(() => import("./pages/Home/Home"));


const App = () => {
  const {authUser} = useAuthContext();
  return (
    <Suspense fallback={<Loading />}>
      <div  className="p-4 min-h-screen flex items-center justify-center flex-col ">
      <Router>
        <Routes>
          <Route path="/" element={authUser ? <Home/> :<Navigate to="/login"/>}/>
          <Route path="/login" element={authUser ? <Navigate to="/"/> : <Login />}/>
          <Route path="/signup" element={authUser ? <Navigate to="/"/> : <SignUp />}/>
        </Routes>
        <Toaster />
      </Router>
      </div>
    </Suspense>
    
  )
}

export default App
