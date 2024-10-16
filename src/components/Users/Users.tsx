import React, {FC, useEffect, useState} from 'react';
import {getUsers} from "../../services/api.service";
import User from "../User/User";
import {IUser} from "../models/IUser";

type IUsersProps = {
    lift: (id: number) => void
}

const Users: FC<IUsersProps> = ({lift}) => {

    const [users, setUsers] = useState<IUser[]>([])

    useEffect(() => {
        getUsers().then(value => setUsers(value.data.users))
    }, []);

    return (
        <div>
            {
                users.map(user => <User key={user.id} lift={lift} user={user}/>)
            }
        </div>
    );
};

export default Users;