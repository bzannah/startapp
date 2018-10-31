import React, { Component } from 'react';
import axios from 'axios';

class Post extends Component {
    state = {
        post: null
    }

    componentDidMount() {
        let id = this.props.match.params.post_id;
        axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
            .then(res => {
                this.setState({
                    post: res.data
                })
                console.log(res);
            });
    }

    render() {
        const post = this.state.post ? (
            <div className="post white-text">
                <h5 className="center black-text">{this.state.post.title}</h5>
                <div class="card-panel teal">
                    {this.state.post.body}
                </div>
            </div>
        ) : (
                <div className="center">Loading post content ...</div>
            )
        return (
            <div className="container">
                {post}
            </div>
        )
    }
}

export default Post