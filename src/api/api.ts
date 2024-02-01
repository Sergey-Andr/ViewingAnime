import axios from "axios";

const Api = axios.create({
    baseURL: import.meta.env.VITE_LOCAL_API,
});

Api.interceptors.response.use(
    (response) => {
        return response.data;
    },
    (error) => {
        return Promise.reject(error);
    });

export default Api;