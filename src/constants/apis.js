import axios from "axios";
import { apiURL } from "./general";

export const getRequest = (requestURL) => {
    const url = `${apiURL}${requestURL}`;
    
    return axios.get(url).then((resposne) => resposne);

};

export function getErrorBody(error) {
    let response = {};
    try {
        response = error.response;
    } catch (err) {
        response = {};
    }
    response = response || {};
    if(response.data.includes("<!DOCTYPE html>")){
        response = {};
    }
    return {
        ...response.data,
        status: response.status ? response.status : 408,
    };
}
