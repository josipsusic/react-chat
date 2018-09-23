//import React, { Component } from 'react';

import React from 'react'
import Chatkit from '@pusher/chatkit'
import MessageList from './components/MessageList'
import SendMessageForm from './components/SendMessageForm'
import RoomList from './components/RoomList'
import NewRoomForm from './components/NewRoomForm'
import './App.css';

import { tokenUrl, instanceLocator } from './config';

class App extends React.Component {

    constructor() {
        // super calls the constructor function of the class which
        // this class has been extended upon (React.Component)
        // when calling super(), we're calling the constructor function in 
        // the React.Component class, that sets the stuff so we can interact with state
        super()
        // 'this' points to the instance of this class
        this.state = {
            messages: []
        }
        
    }

    componentDidMount() {
        const chatManager = new Chatkit.ChatManager({
            //emit
            instanceLocator,
            userId: 'josip',
            tokenProvider: new Chatkit.TokenProvider({
                url: tokenUrl
            })
        })

        chatManager.connect()
        .then(currentUser => {
            currentUser.subscribeToRoom({
                roomId: 16829985,
                hooks: {
                    onNewMessage: message => {
                        // for every new message that we get from chatkit set state
                        this.setState({
                            // add the latest message at the end of this new array
                            // spread operator makes expant this.state.messages array to fit 
                            // into the new array
                            // on every new message that chatkit registers in this chatroom, 
                            // event handler message => is triggered, we do this.setState
                            // taking the previous this.state.messages, and concatenating in
                            // with the latest message so the array is updated
                            // and then when we render the MessageList component
                            // we're passing it messages via prop 'messages', so every time
                            // the this.state.messages changes - it triggers the re-render
                            messages: [...this.state.messages, message]
                        });
                    }
                }
            })
        })
    }

    render() {
        return ( // pass the data down to MessageList via props
            <div className="app">
                <RoomList />
                <MessageList messages={this.state.messages} />
                <SendMessageForm />
                <NewRoomForm />
            </div>
        );
    }
}

export default App