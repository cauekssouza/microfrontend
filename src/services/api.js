import axios from 'axios';

export const apiProdutos = axios.create({
  baseURL: 'https://seu-bff-ou-microservico-produtos',
});

export const apiUsuarios = axios.create({
  baseURL: 'https://seu-bff-ou-microservico-usuarios',
});
