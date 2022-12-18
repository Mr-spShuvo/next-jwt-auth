export const BASE_URL = process.env.API_ENDPOINT;
export const GET_TOKEN = '/auth/login';
export const REFRESH_TOKEN = '/auth/refresh';
export const RESET_PASSWORD = '/auth/reset-password';
export const RESET_PASSWORD_VERIFY = '/auth/reset-password-verify';
export const GET_USER = ({ id }) => `/api/users/${id}`;
export const SEND_MAIL = '/send-mail';
export const SEND_RESET_PW_EMAIL = '/send-reset-password';
