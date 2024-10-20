import React, {useEffect, useState} from 'react';
import {IComment} from "../../models/models";
import {getComments} from "../../services/api.service";
import Comment from "./Comment";

const Comments = () => {
    const [comments, setComments] = useState<IComment[]>([])

    useEffect(() => {
        getComments().then(value => setComments(value))
    }, []);

    return (
        <div>
            {comments.map(comment=><Comment key={comment.id} comment={comment}/>)}
        </div>
    );
};

export default Comments;