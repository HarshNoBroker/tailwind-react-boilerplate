import React, { useState, useEffect } from 'react';

function MessageListComponent({messageList, setMessageList}) {
    // const [messageList, setMessageList] = useState([]);
    const token = 'StkXXhBOoO4LYyIJ'; 
    const convertTimeToAMPM= (timeString) => {
        const date = new Date(timeString);
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const seconds = date.getSeconds();
        
        let formattedHours = hours % 12;
        formattedHours = formattedHours ? formattedHours : 12; // Handle midnight
    
        const ampm = hours >= 12 ? 'PM' : 'AM';
        
        const formattedTime = `${formattedHours}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')} ${ampm}`;
        
        return formattedTime;
    }

    const deleteMessage = async (messageId) => {
        try {
            const response = await fetch(`https://mapi.harmoney.dev/api/v1/messages/${messageId}/`, {
                method: 'DELETE',
                headers: {
                    'Authorization': token,
                    'Content-Type': 'application/json'
                }
            });
    
            if (!response.ok) {
                throw new Error('Error deleting message');
            }
    
            // If the delete was successful, filter out the deleted message from the message list
            setMessageList(messageList.filter(message => message.id !== messageId));
        } catch (error) {
            console.error('Error deleting message:', error);
        }
    };

    useEffect(() => {
        const fetchMessageList = async () => {
            try {
                const response = await fetch('https://mapi.harmoney.dev/api/v1/messages/', {
                    method: 'GET',
                    headers: {
                        'Authorization': token,
                        'Content-Type': 'application/json'
                    }
                });
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                console.log(data)
                setMessageList(data.reverse());
            } catch (error) {
                console.error('Error fetching message list:', error);
            }
        };

        fetchMessageList();
    }, [token]);

    return (
        <div>
            <h2>Message List:</h2>
            <ul>
                {messageList.map((message, index) => (
                    <div style={{marginBottom: '20px'}}>
                        <div style ={{display: 'flex', justifyContent: 'start', gap: '30px', marginLeft: '40px', marginBottom: '10px'}}>
                            <div>{message.source}</div>
                            <div>{convertTimeToAMPM(message.timestamp)}</div>
                            <div><button onClick={() => deleteMessage(message.id)}>Delete</button></div>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'start', marginLeft: '40px'}} >{message.text}</div>
                    </div>
                ))}
            </ul>
        </div>
    );
}

export default MessageListComponent;
