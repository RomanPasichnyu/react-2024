import React, {FC} from 'react';
import {IUser} from '../../models/models';
import {Link} from "react-router-dom";


type IProps = {
    user: IUser
}

const User: FC<IProps> = ({user}) => {

    return (
        <div>
            <Link to={`/users/${user.id}`} state={{user}}>
                <p>{user.id}</p>
                <p>{user.name}</p>
                <p>{user.username}</p>
            </Link>
            <hr/>
        </div>
    );
};

export default User;