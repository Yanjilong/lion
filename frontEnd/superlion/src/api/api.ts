import Axios, { AxiosInstance } from 'axios';

export const axiosApi = (): AxiosInstance => {
    const instance = Axios.create({
        baseURL: 'https://superlion-backend.vercel.app/api',
        headers: {
            Authorization: ''
        },
    });
    return instance;
}
