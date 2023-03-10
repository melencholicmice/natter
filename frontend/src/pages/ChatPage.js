import React, { useEffect , useState} from 'react'
import axios from 'axios'

function ChatPage() {
  const [chats, setChats] = useState([]);
  const fetchData = async () => {
    const { data }= await axios.get('/api/chat');
    setChats(data);
  }

  useEffect(()=>{
    fetchData();
  },[]);
  console.log(chats);
  return (
    <div>{chats.map((chat)=>(
      <div key={chat._id}>{chat.chatName}</div>
    ))}</div>
  )
}

export default ChatPage