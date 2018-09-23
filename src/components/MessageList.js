import React from 'react'

class MessageList extends React.Component {
    render() {
        return (
            <div className="message-list">
                {this.props.messages.map((message, index) => { // receive messages via props
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