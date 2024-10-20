import React, {useEffect, useState} from 'react';
import {getUsers} from "../../services/api.service";
import {IUser} from "../../models/models";
import User from "./User";

const Users = () => {

    const [users, setUsers] = useState<IUser[]>([])

    useEffect(() => {
        getUsers().then((value: IUser[]) => setUsers(value))
    }, []);
    return (
        <div>
            {users.map(user=> <User key={user.id} user={user}/>)}
        </div>
    );
};

export default Users;