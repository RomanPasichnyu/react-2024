import React, {FC} from 'react';
import {IUser} from '../../models/models';


type IProps = {
    user: IUser
}

const User: FC<IProps> = ({user}) => {

    return (
        <div>
            <p>{user.id}</p>
            <p>{user.name}</p>
            <p>{user.username}</p>
        </div>
    );
};

export default User;