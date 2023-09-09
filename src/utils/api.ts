import Axios from 'axios';
import { setupCache } from 'axios-cache-interceptor';

const { location } = window;

const protocol = location.protocol;
const hostname = location.hostname;
const port = location.port;
const baseUrl = `${protocol}//${hostname}${port && `:${port}`}`;

const axios = setupCache(Axios);

const api = import.meta.env.VITE_LOCAL_API ? `${baseUrl}/api` : import.meta.env.VITE_API_URL;

export const useFetch = async (url: string = '', params: object = {}) => {
    try {
        const { data } = await axios.get(`${api}${url}`, { params });
        return data;
    } catch (error) {
        console.log(error);
    }
};
