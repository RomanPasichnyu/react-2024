import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import UsersPage from "../pages/UsersPage";
import PostsPage from "../pages/PostsPage";
import CommentsPage from "../pages/CommentsPage";
import UserPage from "../pages/UserPage";
import PostPage from "../pages/PostPage";

export const router = createBrowserRouter([
    {
        path: '/', element: <MainLayout/>, children: [
            {
                path: 'users', element: <UsersPage/>,
            },
            {
                path: 'users/:id', element: <UserPage/>
            },
            {
                path: 'posts', element: <PostsPage/>
            },
            {
                path: 'posts/:id/comments', element: <PostPage/>
            },
            {
                path: 'comments', element: <CommentsPage/>
            }
        ],
    }
]);