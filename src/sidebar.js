import React from 'react';
import './sidebar.css';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import { Avatar, IconButton } from '@mui/material';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { SearchOutlined } from '@material-ui/icons';
import SidebarChat from "./sidebarchat";
function sidebar() {
    return ( 
    <div className = "sidebar" >
        
        <div className="sidebar-header">
            <Avatar src="https://source.unsplash.com/user/erondu/1600x900"/>
            <div className="sidebar-headerRight">
                <IconButton>
                <DonutLargeIcon/>
                </IconButton>
                <IconButton>
                <ChatIcon/>
                </IconButton>
                <IconButton>
                <MoreVertIcon/>
                </IconButton>
                
            </div>
        </div>
        <div className="sidebar-search">
            <div className="search-container">
                <SearchOutlined/>
                <input type="text" placeholder="Search or start new chat" />
                </div>
        </div>
        <div className="sidebar-chat">
            <SidebarChat/>
            <SidebarChat/>
            <SidebarChat/>
        </div>
    </div>
    );
}

export default sidebar