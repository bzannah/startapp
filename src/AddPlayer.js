import React, { Component } from 'react';

class AddPlayer extends Component {
    state = {
        name: '',
        age: ''
    };

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addPlayer(this.state);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" id="name" onChange={this.handleChange} />

                    <label htmlFor="age">Age:</label>
                    <input type="text" name="age" id="age" onChange={this.handleChange} />

                    <button type="submit">Save</button>
                </form>
            </div>
        );
    }
}

export default AddPlayer;
