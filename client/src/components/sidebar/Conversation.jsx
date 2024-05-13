import useConversation from "../../zustand/useConversation"

const Conversation = ({ conversation ,  emoji , lastIdx}) => {
  const {selectedConversation , setSelectedConversation} = useConversation();

  const isSelected = selectedConversation?._id === conversation._id;

  const handleClick = () => {
    setSelectedConversation(conversation)
  }
  return (
    <>
      <div className={`flex gap-2 items-center hover:bg-purple-400 rounded p-2 py-1 cursor-pointer ${isSelected ? "bg-sky-400" : ""}`} onClick={handleClick}>
        <div className="avatar online">
          <div className="w-12 rounded-full">
            <img src={conversation.profilePic} alt="user-avaatar" />
          </div>
        </div>

        <div className="flex flex-col flex-1">
          <div className="flex gap-3 justify-between">
            <p className="font-medium text-black ">{conversation.fullName}</p>
            <span className="text-xl">{emoji}</span>
          </div>
        </div>
      </div>

     {
      !lastIdx &&  <div className="divider my-0 py-0 h-0.5 bg-gray-600 " />
     }
    </>
  )
}

export default Conversation