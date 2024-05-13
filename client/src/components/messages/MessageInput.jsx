import { useState } from "react";
import { IoMdSend } from "react-icons/io";
import useSendMessage from "../../hooks/useSendMessage";
const MessageInput = () => {
     const [message, setMessage] = useState("");
     const { loading, sendMessage } = useSendMessage();


     const handleSubmit = async (e) => {
          e.preventDefault();
          if (!message) return;
          await sendMessage(message);
          setMessage("");
     }
     return (
          <form className="px-4 my-3 " onSubmit={handleSubmit}>
               <div className="w-full relative">
                    <input
                         type="text"
                         className="border text-sm rounded-lg block w-full p-2.5 bg-gray-500 border-gray-700  text-white outline-none"
                         placeholder="Type a Message"
                         value={message}
                         onChange={(e) => setMessage(e.target.value)}
                    />
                    <button type="submit" className="absolute inset-y-0 end-0 flex items-center pe-3 cursor-pointer text-black text-xl">
                         {
                              loading ? <span className="loading loading-spinner mx-auto"/> : <IoMdSend />
                         }
                    </button>
               </div>
          </form>
     )
}

export default MessageInput