import React, {useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";
import {IComment, IPost} from "../models/models";
import {getCommentsById} from "../services/api.service";

const PostPage = () => {


    let location = useLocation();
    let {post} = location.state as { post: IPost };

    const [comments, setComments] = useState<IComment[]>([])
    useEffect(() => {
        if (post.id) {
            getCommentsById(post.id.toString()).then(value => setComments(value));
        }
    }, [post.id]);


    return (
        <div>
            {comments.map(comment=>
                <div>
                   ID: {comment.id}
                   postID: {comment.postId}
                   body: {comment.body}
                    <hr/>
                </div>)}

        </div>
    );
};

export default PostPage;