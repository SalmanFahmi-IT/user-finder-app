/**
 * Github Access Url
 */
 
const client_id = `client_id=${process.env.REACT_APP_CLIENT_ID}`;
const client_secret = `client_secret=${process.env.REACT_APP_CLIENT_SECRET}`;
export const API_URL = `https://api.github.com/users/`;
export const SECRET_KEY = `?${client_id}&${client_secret}`;