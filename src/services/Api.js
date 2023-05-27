import axios from "axios";

const API = axios.create({
    baseURL: "https://usuarios.ronierlima.dev"
});

export { API };
