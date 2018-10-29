import React, { Component } from 'react';

class AddTodo extends Component {

    state = {
        content: ''
    }

    handleChange = (e) => {
        this.setState({
            content: e.target.value
        })
    }

    handleSummit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state);
        this.setState({
            content: ''
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSummit}>
                <label htmlFor="todo">Add new todo for today: </label>
                <input type="text" name="todo" onChange={this.handleChange} value={this.state.content} />
            </form>
        )
    }
}

export default AddTodo;