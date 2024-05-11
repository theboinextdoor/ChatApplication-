import { IoMdSend } from "react-icons/io";
const MessageInput = () => {
     return (
          <form className="px-4 my-3 ">
               <div className="w-full relative">
                    <input
                         type="text"
                         className="border text-sm rounded-lg block w-full p-2.5 bg-gray-500 border-gray-700  text-white outline-none"
                         placeholder="Type a Message"
                    />
                    <button type="submit" className="absolute inset-y-0 end-0 flex items-center pe-3 cursor-pointer text-black text-xl"><IoMdSend /></button>
               </div>
          </form>
     )
}

export default MessageInput