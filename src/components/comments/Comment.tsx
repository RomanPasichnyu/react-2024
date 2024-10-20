import React, {FC} from 'react';
import {IComment} from "../../models/models";

type IProps = {
    comment: IComment
}

const Comment: FC<IProps> = ({comment}) => {
    return (
        <div>
            <p>{comment.id}</p>
            <p>{comment.name}</p>
            <p>{comment.email }</p>
            <p>{comment.body}</p>
        </div>
    );
};

export default Comment;