import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import deletePost from '../actions/postActions';

class Post extends Component {
    componentDidMount() {
        //let id = this.props.match.params.post_id;
        //axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
        //    .then(res => {
        //        this.setState({
        //            post: res.data
        //        })
        //        console.log(res);
        //    });
    }

    handleClick = () => {
        this.props.deletePost(this.props.post.id);
        this.props.history.push('/');
    }

    render() {
        const post = this.props.post ? (
            <div className="post white-text">
                <h5 className="center red-text">{this.props.post.title}</h5>
                <div className="card-panel teal-text">
                    {this.props.post.body}
                </div>
                <div className="center">
                    <button className="btn red" onClick={this.handleClick}>Delete</button>
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

const mapStateToProps = (state, ownProp) => {
    let id = ownProp.match.params.post_id;

    return {
        post: state.posts.find(post => post.id === id)
    }
}

const mapDispatchToProps = (dispatch) => {
    // whenever deletePost is called, the action is being dispatched - the deletePost is attached to the props
    return {
        deletePost: (id) => { dispatch(deletePost(id)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post)