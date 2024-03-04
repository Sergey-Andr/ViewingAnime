import axios from "axios";

const baseURL = import.meta.env.VITE_API_HOST;

const Api = axios.create({
    baseURL,
});

Api.interceptors.response.use(
    (response) => {
        return response.data;
    },
    (error) => {
        return Promise.reject(error);
    },
);

export default Api;
