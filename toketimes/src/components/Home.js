import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Tokeball from '../tokeball.PNG';

class Home extends Component {
    state = {
        posts: []
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                //console.log(res);
                this.setState({
                    posts: res.data.slice(0, 10)
                })
            });
    }
    render() {
        const { posts } = this.state;
        const postList = posts.length ? (
            posts.map(post => {
                return (
                    <div className="post card" key={post.id}>
                        <img src={Tokeball} alt="tokeball.PNG" />
                        <div className="card-content teal-text darken-4">
                            <Link to={'/' + post.id}>
                                <span className="card-title red-text">
                                    {post.title}
                                </span>
                            </Link>
                            <p>{post.body}</p>
                        </div>
                    </div>
                )
            })
        )
            : (
                <div className="center grey-text">No post found</div>
            )

        return (
            <div className="container home" >
                {postList}
            </div>
        )
    }
}

export default Home
