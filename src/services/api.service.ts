import axios, {AxiosResponse} from "axios";
import {IComment, IPost, IUser} from "../models/models";

let axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/'
});

export const getUsers = async () => {
    let responce: AxiosResponse<IUser[]> = await axiosInstance.get('/users');
    return responce.data
}

export const getPosts = async () => {
    let response: AxiosResponse<IPost[]> = await axiosInstance.get('/posts');
    return response.data
}
export const getPostsById = async (id: string) => {
    let response = await axiosInstance.get(`/user/${+id}/posts`);
    return response.data
}

export const getComments = async () => {
    let response: AxiosResponse<IComment[]> = await axiosInstance.get('/comments');
    return response.data
}

export const getCommentsById = async (id:string)=>{
    let response = await axiosInstance.get(`/posts/${id}/comments`);
    return response.data
}


