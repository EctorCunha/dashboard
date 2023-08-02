import axios from "axios";


// base URL para todas as requisições da API cliente de produtos
export const apiProducts = axios.create({
  baseURL: "https://dummyjson.com/products",
});



