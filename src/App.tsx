import React, {useState} from 'react';
import './App.css';
import Users from "./components/Users/Users";
import {getPosts} from "./services/api.service";
import {IPost} from "./components/models/IPost";


function App() {

    const [posts, setPosts] = useState<IPost|null>(null)

    const lift = (id: number) => {
        getPosts(id).then(value => setPosts(value.data))
    }

    return (
        <div>
            {posts?.id}
            {posts?.body}
            {posts?.title}
            <Users lift={lift}/>
        </div>
    );
}

export default App;
