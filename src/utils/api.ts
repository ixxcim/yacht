import Axios from 'axios';
import { setupCache } from 'axios-cache-interceptor';

const { location } = window;

const protocol = location.protocol;
const hostname = location.hostname;
const port = location.port;
const baseUrl = `${protocol}//${hostname}${port && `:${port}`}`;

// const api = import.meta.env.DEV ? `${baseUrl}/api` : import.meta.env.VITE_API_URL;

const axios = setupCache(Axios);

export const useFetch = async (url: string = '', params: object = {}) => {
    try {
        const { data } = await axios.get(`${baseUrl}/api${url}`, { params });
        return data;
    } catch (error) {
        console.log(error);
    }
};
