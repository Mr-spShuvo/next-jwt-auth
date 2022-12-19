import * as endpoints from 'config/endpoints';
import api from './api';

export const login = async data => {
  try {
    const response = await api.post(endpoints.GET_TOKEN, data);
    return response.data;
  } catch (error) {
    return error;
  }
};
