import MessageInput from "./MessageInput"
import Messages from "./Messages"
import NoChat from "./NoChat";


const MessageContainer = () => {
     const nochatSelected = true;
     return (
          <div className="md:min-w-[450px] flex flex-col ">
               <>
                    {
                         nochatSelected ? <NoChat /> : <>
                         {/* Header */}
                              <div className="bg-slate-500 px-4 py-2 mb-2">
                                   <span className="label-text">To:</span>
                                   <span className="text-gray-900 font-bold"> Faraz Ashraf</span>
                              </div>

                              {/* Messages */}
                              <Messages />
                              <MessageInput /></>
                    }
               </>
          </div>
     )
}

export default MessageContainer