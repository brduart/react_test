import axios from "axios";

//CONFIGURAÇÕES DO AXIOS
export const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  headers: {},
  timeout: 1000,
});
