import React, {useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";
import {IPost, IUser} from "../models/models";
import {getPostsById} from "../services/api.service";


const UserPage = () => {

    const location = useLocation();
    const {user} = location.state as { user: IUser };


    const [posts, setPosts] = useState<IPost[]>([])

    useEffect(() => {
        if (user.id) {
            getPostsById(user.id.toString()).then(value => setPosts(value));
        }
    }, [user.id])


    return (
        <div>
            <p>{user.id}</p>
            <p>{user.name}</p>
            <p>{user.email}</p>
            <hr/>

            {posts.map(post =>
                <div>
                    <p> id: {post.id}</p>
                    <p>postID: {post.userId}</p>
                    <p>BODY: {post.body}</p>
                    <p>TITLE: {post.title}</p>
                </div>)}

        </div>
    );
};

export default UserPage;