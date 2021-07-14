const axios = require("axios");
const firebase = "https://portfolio-acd2e-default-rtdb.firebaseio.com/Projects/.json";
const swapi = "https://swapi.dev/api/people/1";

let cache = null;

export function GetProjectsFromServer() {
	return axios.get(firebase);
}

export function GetProjectsFromCache() {
	return cache;
}

export function SetProjectsOnCache(data) {
	cache = data;
}
