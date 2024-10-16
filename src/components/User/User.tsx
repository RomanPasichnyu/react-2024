import React, {FC} from 'react';
import {IUser} from "../models/IUser";


type IUserProps = {
    user: IUser;
    lift:(id:number)=>void
};

const User: FC<IUserProps> = ({user,lift}) => {
    let {id, age, gender, firstName} = user;
    return (
        <div>
            <p>{id}</p>
            <p>{age}</p>
            <p>{gender}</p>
            <p>{firstName}</p>
            <button onClick={()=>lift(id)}>click</button>
        </div>
    );
};

export default User;