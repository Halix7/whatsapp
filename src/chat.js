import { AttachFile, SearchOutlined } from '@material-ui/icons';
import MoreVert from '@mui/icons-material/MoreVert';
import { Avatar, IconButton } from '@mui/material';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import MicIcon from '@mui/icons-material/Mic';
import React,{useState} from 'react';
import axios from "./axios";
import "./chat.css";
function Chat({messages}) {
    const [Input,setInput]= useState("");
    const sendMessage=async (e)=>{
        e.preventDefault();
        await axios.post("/messages/new",{
            message:Input,
            name:"bhim",
            timestamp:"just now",
            received:false,
        });
        setInput("");
    };
    return (
        <div className="chat">
            <div className="chat-header">
                <Avatar/>
                <div className="chat-headerInfo">
                    <h3>bhim</h3>
                    <p>Last Seen at....</p>
                </div>
                <div className="char-headerRight">
                <IconButton>
                <SearchOutlined/>
                </IconButton>
                <IconButton>
                <AttachFile/>
                </IconButton>
                <IconButton>
                <MoreVert/>
                </IconButton>
                </div>
            </div>
            <div className="chat-body">
                {messages.map((message)=>(


                <p className={`chat-msg ${message.received && "chat-receiver"}`}>
                    <span className="chat-name">{message.name}</span>
                    {message.message}
                    <span className="chat-timestamp">
                        {message.timestamp}
                    </span>
                </p>
                ))}

            </div>
            <div className="chat-footer">
                <InsertEmoticonIcon/>
                <form >
                    <input value={Input} onChange={e => setInput(e.target.value)} placeholder="type the message " type="text" />
                    <button  onClick={sendMessage} type="submit">Send the message</button>
                </form>
                <MicIcon />
            </div>
        </div>
    )
}

export default Chat;
