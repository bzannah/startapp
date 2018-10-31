const initState = {
    users: [],
    posts: [
        { "id": "1", "title": "Stim Alphazap", "body": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos debitis nulla quidem architecto qui obcaecati quis itaque, tempore vero totam voluptatibus ad aspernatur odio animi dolorem! Ex harum voluptatem voluptate?" },
        { "id": "2", "title": "Bytecard Alphazap", "body": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos debitis nulla quidem architecto qui obcaecati quis itaque, tempore vero totam voluptatibus ad aspernatur odio animi dolorem! Ex harum voluptatem voluptate?" },
        { "id": "3", "title": "Alphazap Bytecard", "body": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos debitis nulla quidem architecto qui obcaecati quis itaque, tempore vero totam voluptatibus ad aspernatur odio animi dolorem! Ex harum voluptatem voluptate?" },
        { "id": "4", "title": "Fixflex Subin", "body": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos debitis nulla quidem architecto qui obcaecati quis itaque, tempore vero totam voluptatibus ad aspernatur odio animi dolorem! Ex harum voluptatem voluptate?" },
        { "id": "5", "title": "Subin Fixflex", "body": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos debitis nulla quidem architecto qui obcaecati quis itaque, tempore vero totam voluptatibus ad aspernatur odio animi dolorem! Ex harum voluptatem voluptate?" }
    ]
}
const rootReducer = (state = initState, action) => {
    if (action.type === 'DELETE_POST') {
        let newPosts = state.posts.filter(post => {
            return action.id !== post.id
        });
        return {
            ...state,
            posts: newPosts
        }
    }
    return state;
}

export default rootReducer;


