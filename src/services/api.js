import axios from "axios";

//base                      rota
//https://viacep.com.br/ws /57082168/json

const api = axios.create({
    baseURL: "https://viacep.com.br/ws"
})

export default api;