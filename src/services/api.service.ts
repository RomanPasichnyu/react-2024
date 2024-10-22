import axios from "axios";
import {apiResponce} from "../models/apiResponce";

let axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com'
});

export const getProducts = async (page: number) => {
    const skip = (page - 1) * 50

    let responce = await axiosInstance.get<apiResponce>('/products', {
        params: {
            skip: skip
        }
    });
    return responce.data

}


