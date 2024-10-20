import axios, {AxiosResponse} from "axios";
import {IUser} from "../models/models";

let axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/'
});


export const getUsers = async () => {
    let responce: AxiosResponse<IUser[]> = await axiosInstance.get('/users');
    return responce.data
}