import axios from "axios";

const IBGEAPI = axios.create({
    baseURL: "https://servicodados.ibge.gov.br/api/v1/"
});

export { IBGEAPI };
