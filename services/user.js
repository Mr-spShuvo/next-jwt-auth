import * as endpoints from 'config/endpoints';
import api from './api';

export const getUserById = async id => {
  const { data } = await api.get(endpoints.GET_USER({ id }));
  return data;
};
