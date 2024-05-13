import { useEffect } from "react";
import useConversation from "../../zustand/useConversation";
import MessageInput from "./MessageInput"
import Messages from "./Messages"
import NoChat from "./NoChat";


const MessageContainer = () => {
     const {selectedConversation , setSelectedConversation} =  useConversation();
     useEffect(()=> {
          // cleanup function
          return ()=> setSelectedConversation(null)
     }, [])
     return (
          <div className="md:min-w-[450px] flex flex-col ">
               <>
                    {
                         !selectedConversation ? <NoChat /> :
                          <>
                               {/* Header */}
                              <div className="bg-slate-500 px-4 py-2 mb-2">
                                   <span className="label-text">To:</span>
                                   <span className="text-gray-900 font-bold">{selectedConversation.fullName}</span>
                              </div>

                              {/* Messages */}
                              <Messages />
                              <MessageInput />
                              </>
                    }
               </>
          </div>
     )
}

export default MessageContainer