import mongoose, { Mongoose } from "mongoose"



// SCHEMA FOR CONVERSATION BETWEEN TWO USER
const conversationSchema = new mongoose.Schema({
     participantsID: [
          {
               type: mongoose.Schema.Types.ObjectId,
               ref: "User"
          }
     ],
     messages: [
          {
               type: mongoose.Schema.Types.ObjectId,
               ref: "Message",
               default: []
          }
     ]
}, { timestamps: true })


// Adding Validation
// conversationSchema.path('participantsID').validate({
//      validator: function (value) {
//           return value.length === 2; // Assuming a conversation is between two participants
//      },
//      message: 'A conversation must have exactly two participants.'
// });

// DATABASE MODEL
const Conversation = mongoose.model("Conversation", conversationSchema)

export default Conversation;