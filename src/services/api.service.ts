import axios from "axios";
type FormProps = {
    username: string
}


let axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
});

export const create = async (user: FormProps) => {
    let response = await axiosInstance.post('/users', user);
    return response
}
