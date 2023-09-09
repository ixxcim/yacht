import Axios from 'axios';
import { setupCache } from 'axios-cache-interceptor';

// const api = import.meta.env.DEV ? `${baseUrl}/api` : import.meta.env.VITE_API_URL;

const axios = setupCache(Axios);

export const useFetch = async (url: string = '', params: object = {}) => {
    try {
        const { data } = await axios.get(`/api${url}`, { params });
        return data;
    } catch (error) {
        console.log(error);
    }
};
