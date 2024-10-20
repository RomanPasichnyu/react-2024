import React, {FC} from 'react';
import {IPost} from '../../models/models';
import {Link} from "react-router-dom";

type IProps = {
    post: IPost
}

const Post: FC<IProps> = ({post}) => {
    return (
        <div>

            <Link to={`/posts/${post.id}/comments`} state={{post}}>
                <p>{post.id}</p>
                <p>{post.title}</p>
                <p>{post.body}</p>
            </Link>
        </div>
    );
};

export default Post;