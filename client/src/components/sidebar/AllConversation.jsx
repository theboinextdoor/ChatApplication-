import useGetConversations from "../../hooks/useGetConversations";
import { getRandomEmoji } from "../../utils/getRandimEmoji";
import Conversation from "./Conversation"

const AllConversation = () => {
  const {loading , conversation} = useGetConversations();
  console.log("Conversations", conversation)
  return (
    <div className="py-2 flex flex-col overflow-auto">
      {
        conversation.map((conversation, idx)=> (
          <Conversation 
              key={conversation._id}
              conversation={conversation}
              emoji={getRandomEmoji()}
              lastIdx={idx ===  conversation.length -1 }

              />
        ))
      }
    {
      loading ? <span className="loading loading-spinner mx-auto" /> : null
    }
    </div>
  )
}

export default AllConversation