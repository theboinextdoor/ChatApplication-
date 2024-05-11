/* eslint-disable no-unused-vars */
import {BrowserRouter as Router , Routes , Route} from "react-router-dom"
import {lazy , Suspense} from "react"
import Loading from "./components/Loading/Loading"



// Dynamic Importing file
const Login = lazy(() => import("./pages/Login/Login"));
const SignUp = lazy(() => import("./pages/SignUp/SignUp"));
const Home = lazy(() => import("./pages/Home/Home"));


const App = () => {
  return (
    <Suspense fallback={<Loading />}>
      <div  className="p-4 min-h-screen flex items-center justify-center flex-col ">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/signup" element={<SignUp />}/>
        </Routes>
      </Router>
      </div>
    </Suspense>
    
  )
}

export default App
