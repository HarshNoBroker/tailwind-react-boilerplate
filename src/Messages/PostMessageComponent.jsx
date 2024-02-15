import React, { useState } from 'react';

function PostMessageComponent({messageList, setMessageList}) {
    const [message, setMessage] = useState('');
    const token = 'StkXXhBOoO4LYyIJ'; 

    const handlePostMessage = async () => {
        try {
            const response = await fetch('https://mapi.harmoney.dev/api/v1/messages/', {
                method: 'POST',
                headers: {
                    'Authorization': token,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    text: message
                })
            });
            if (!response.ok) {
                throw new Error('Failed to post message');
            }
            const messageData = await response.json();
            setMessageList([messageData, ...messageList]);
            setMessage('');
        } catch (error) {
            console.error('Error posting message:', error);
        }
    };

    return (
        <div>
            <h1>Chatter</h1>
            <h3>Type something in the box below, and then hit "Post"</h3>
            <br/>
            <input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message here..."
            ></input>
            <button onClick={handlePostMessage}>Post!</button>
        </div>
    );
}

export default PostMessageComponent;
