const express = require("express");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.get("/" , (req,resp)=>{
    resp.send("API Running");
})
app.listen(port , console.log(`server running on ${port}`));