import React, {useEffect, useState} from 'react';
import {IPost} from "../../models/models";
import {getPosts} from "../../services/api.service";
import Post from "./Post";

const Posts = () => {

    const [posts, setPosts] = useState<IPost[]>([]);
    useEffect(() => {
        getPosts().then(value => setPosts(value))
    }, []);
    return (
        <div>
            {posts.map(post => <Post key={post.id} post={post}/>)}
        </div>
    );
};

export default Posts;