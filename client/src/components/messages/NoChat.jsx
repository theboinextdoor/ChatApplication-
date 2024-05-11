import {TiMessages} from "react-icons/ti"
const NoChat = () => {
  return (
    <div className="flex items-center justify-center w-full h-full">
     <div className="px-4 text-center sm:text-lg md:text-xl text-black font-semibold flex flex-col items-center gap-2 ">
          <p>Welcome Faraaz</p>
          <p>
            You have no chats yet.
          </p>
          <p>
            Start a new chat with your friends.
          </p>
          <TiMessages className="text-3xl md:text-6xl text-black text-center"/>
     </div>
    </div>
  )
}

export default NoChat