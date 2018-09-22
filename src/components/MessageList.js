import React from 'react'

const DUMMY_DATA = [
    {
        senderId: 'josip',
        text: 'Hey, how is it going?'
    },
    {
        senderId: 'janedoe',
        text: 'Great! How about you?'
    },
    {
        senderId: 'josip',
        text: 'Good to hear! I am great as well'
    }
]

class MessageList extends React.Component {
    render() {
        return (
            <div className="message-list">
                {DUMMY_DATA.map((message, index) => {
                	return ( //in map function return <div> for each of the items
                		<div key={index} className="message">
                		    <div className="message-username">{message.senderId}</div>
                			<div className="message-text">{message.text}</div>
                		</div>
                	)
                })}
            </div>
        ) 
    }
}

export default MessageList