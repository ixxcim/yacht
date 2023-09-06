import Axios from 'axios';

const { location } = window;

const protocol = location.protocol;
const hostname = location.hostname;
const port = location.port;
const baseUrl = `${protocol}//${hostname}${port && `:${port}`}`;

export const useFetch = async (url: string = '', params: object = {}) => {
    try {
        const { data } = await Axios.get(`${baseUrl}/api${url}`, { params });
        return data;
    } catch (error) {
        console.log(error);
    }
};
