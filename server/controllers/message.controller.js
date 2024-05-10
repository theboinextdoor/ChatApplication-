import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";

// export const sendMessage = async (req, res) => {
//      try {
//           const { message } = req.body;
//           const { id: receiverId } = req.params;
//           const senderId = req.user._id;


//           //this will get all the conversation between the sender and receiver
//           let conversation = await Conversation.findOne({
//                participants: { $all: [senderId, receiverId] }
//           })

//           // if there is no coversation between the sender and the receiver then create a new conversation 
//           if (!conversation) {
//                conversation = await Conversation.create({
//                     participants: [senderId, receiverId]
//                })
//           }

//           // creating a new message and saving it in the message collection
//           const newMessage = new Message({
//                senderId, // Corrected casing
//                receiverId,// Corrected casing
//                message
//           })

//           // saving the message id in the conversation collection 
//           if (newMessage) {
//                conversation.messages.push(newMessage._id)
//           }

//           // this will save the new message and the conversation in the database
//           await Promise.all([
//                await newMessage.save(),
//                await conversation.save()
//           ])

//           // Return the new message
//           return res.status(201).json(newMessage)
//      } catch (error) {
//           console.log("Internal Server in sendmessage controller ", error)
//           return res.status(500).json({
//                error: "Internal Server error"
//           })
//      }
// }


export const sendMessage = async (req, res) => {
     try {
          const { message } = req.body;                            // message which are coming from the client 
          const { id: receiverId } = req.params;                  // message which are coming for the client
          const  senderId  = req.user._id;                 // req.user is coming from the protected routes message which are send by the client 


          // check if the receiverId is valid or not
          let conversation = await Conversation.findOne({
               participantsID: { $all: [senderId, receiverId] }
          })

          // if conversation has not begun yet then create a conversation between the user
          if (!conversation) {
               conversation = await Conversation.create({
                    participantsID: [senderId, receiverId]
               })
          }

          // create a new message
          const newMessage = await Message.create({
               senderId: senderId,
               receiverId: receiverId,
               message: message
          })

          // push the message id in the conversation
          if (newMessage) {
               conversation.messages.push(newMessage._id)
          }

          // save the message and conversation
          await Promise.all([
               await newMessage.save(),
               await conversation.save(),
          ])


          console.log(newMessage)
          return res.status(201).json({
               message: newMessage
          })

     } catch (error) {
          console.log("Internal Error Occured in Send Message Controller ", error)
          return res.status(401).json({
               message: "Internal Server Error"
          })
     }
}


export const getMessage = async (req, res) =>{
     try {
          const {id : userToChatId} = req.params;
          const senderId = req.user._id;    //req.user._id is coming fromm teh protected routes

          // find the conversation between the users
          const conversation = await Conversation.findOne({
               participantsID: {
                    $all: [senderId, userToChatId]
               }
          }).populate("messages")

          // if there is no conversation between the users then send the empty array
          if(!conversation){
               return res.status(200).json([]);
          }

          const allmessages = conversation.messages;

          return res.status(200).json(allmessages)
          
     } catch (error) {
          console.log("Internal error from the Get Message Controller", error.message)
          return res.status(401).json({
               error: "Internal Server error"
          })
     }
}
