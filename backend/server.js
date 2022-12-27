const express = require("express");
require("dotenv").config();
const { chats } = require("./data");
const app = express();
const port = process.env.PORT || 5000;

app.get("/" , (req,resp)=>{POST
    resp.send("API Running");
})

app.get("/api/chat" , (req,resp)=>{
    resp.send(chats);
})

app.get("/api/chat/:id" , (req,resp)=>{
    const singleChat = chats.find((c) => c._id === req.params.id);
    resp.send(singleChat);

})


app.listen(port , console.log(`server running on ${port}`));