import React,{useEffect ,useState} from "react";
import './App.css';
import Sidebar from "./sidebar";
import Chat from './chat';
import Pusher from 'pusher-js';
import axios from './axios';
function App() {
  const [messages,setMessages]=useState([]);
  useEffect(()=>{
    axios.get('/messages/sync').then(response=>{
      console.log(response.data);
      setMessages(response.data);
    });
  },[]);
    useEffect(() => {const pusher = new Pusher('5adb7bc2660f1b309f87', {
      cluster: 'eu',
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted', (newMessage)=> {
      alert(JSON.stringify(newMessage));
      setMessages([...messages,newMessage]);
    });
    return()=>{
      channel.unbind_all();
      channel.unsubscribe();
    }
    }, [messages]);
    return (
      <div className="app">
        <div className="app-body">

        <Sidebar />

        
        <Chat messages={messages}/>
        </div>
      </div>
    );
}

export default App;