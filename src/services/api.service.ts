import axios from "axios";

let axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com'
});

export const getUsers = async ()=>{
    let responce = await axiosInstance.get('/users')
    return responce
}

export const getPosts = async (id:number) =>{
    let response = await axiosInstance.get(`/posts/${id}`);
    return response
}