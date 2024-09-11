import axios from "axios";


export const gifInstanse = axios.create({
    baseURL: 'https://api.giphy.com/v1',
    timeout: 1000,
  });