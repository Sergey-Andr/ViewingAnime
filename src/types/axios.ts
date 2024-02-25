import { AxiosResponse } from "axios";

export interface ICustomAxiosResponse<T> extends AxiosResponse {
    data: T;
}