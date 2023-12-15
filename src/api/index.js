import axios from 'axios';
import endpoints from './endpoints';

const baseURL = 'https://jsonplaceholder.typicode.com';

const api = axios.create({
    baseURL,
});

export const fetchData = async (endpoint) => {
    // eslint-disable-next-line no-useless-catch
    try {
        const response = await api.get(endpoint);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export default { fetchData, endpoints };