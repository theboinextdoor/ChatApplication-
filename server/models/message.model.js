import mongoose from "mongoose"

const messageSchema = new mongoose.Schema({
     senderID:{
          type: mongoose.Schema.Types.ObjectId,
          ref : "User",
          required: true
     },
     recieverID:{
          type: mongoose.Schema.Types.ObjectId,
          ref : "User",
          required: true
     },
     message: {
          type: String ,
          required: true
     }
}, {timestamps: true})   //with this timeStamp we can get the time of creation and updation of the document

const Message = mongoose.model("Message", messageSchema)

export default Message;