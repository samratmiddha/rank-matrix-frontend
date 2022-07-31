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
	if (typeof response.data === "string") {
		if (response.data.includes("<!DOCTYPE html>")) {
			response = {};
		}
	}
	return {
		data: response.data,
		status: response.status ? response.status : 408,
	};
}

export function getErrorMessage(error) {
	let message = "";
	if (error.data) {
		if (error.data.detail) {
			message = error.data.detail;
		} else {
			message = error.data;
		}
	}
	if (message === "") {
		message = "Some error occured. Please refresh";
	}

	return message;
}
