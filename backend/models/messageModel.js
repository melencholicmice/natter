const { default: mongoose } = require("mongoose");
const moongoose = require("mongoose");

const messageModel = moongoose.Schema({
    sender: {
        type: moongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    content: { type: String, trim: true },
    Chat: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Chat",
    }
}, { timestamps: true });

const Message = mongoose.model("Message",messageModel);

module.exports = Message;