import MessageContainer from "../../components/messages/MessageContainer"
import Sidebar from "../../components/sidebar/Sidebar"

const Home = () => {
  return (
    <div className="flex sm:h-[4450px] md:h-[550px] roounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur bg-opacity-0 p-2">
      <Sidebar />
      <MessageContainer />
    </div>
  )
}

export default Home