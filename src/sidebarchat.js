import { Avatar } from '@mui/material';
import React from 'react';
import "./sidebarChat.css";
function sidebarchat() {
    return (
        <div className="sidebarChat">
            <Avatar/>
            <div className="sidebar-info">
                <h2>Room name</h2>
                <p>This is the last message</p>
            </div>
        </div>
    )
}

export default sidebarchat
