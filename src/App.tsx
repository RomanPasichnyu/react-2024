import React, {useEffect} from 'react';
import './App.css';
import {getPosts, loadUsers, useAppDispatch, useAppSelector} from "./redux/store";

function App() {

    let userSliceState = useAppSelector(state => state.userSliceForStore);

    let postsSliceState = useAppSelector(state => state.postSliceForStore);

    let dispatch = useAppDispatch();

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(users => {
                dispatch(loadUsers(users))
            });

    }, []);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())
            .then(posts => {
                dispatch(getPosts(posts))
            });

    }, []);
    return (
        <div>
            {
                userSliceState.users.map(user => (<div key={user.id}>{user.username}</div>))
            }
            <hr/>
            {
                postsSliceState.posts.map(post => (<div key={post.id}>{post.title}</div>))
            }

        </div>
    );
}

export default App;
