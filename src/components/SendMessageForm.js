import React from 'react'

class SendMessageForm extends React.Component {

	// initialize the state
	constructor() {
		super()

		this.state = {
			message: ''
		}

		// bind 'this' to this.handleChange method
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	// access event param
	handleChange(e) {
		// console.log(e.target.value);

		// update the state
		// this is undefined inside this method, it's not bound to the component instance
		// in the constructor - need to bind it in the constructor
		this.setState({
			message: e.target.value
		})
	}

	handleSubmit(e) {
		e.preventDefault()     // cause we're storing the message in the state
		this.props.sendMessage(this.state.message)
		this.setState({
			message: ''
		})  
	}

    render() {
    	// we got access to the state now in the render()
    	// console.log(this.state.message);

    	// expl: value = {this.state.message}
    	// when the onChange listener is triggered, we invoke the handleChange()
    	// which updates the state, and then React triggers re-render
    	// in which the Value which is passed into the input field
    	// has been changed, and thus it's updated in the UI
    	// -> so it's going through the state before the keystroke
    	// turns into change in the user interface

        return (
            <form 
            	onSubmit = {this.handleSubmit}
            	className="send-message-form">
                <input
                	onChange = {this.handleChange}
                	value = {this.state.message}
                    placeholder="Type message and hit Enter"
                    type="text" />
            </form>
        )
    }
}

export default SendMessageForm