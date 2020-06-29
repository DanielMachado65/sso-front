import api from '../configs/api';

export const login = (params = {}) => (
  api.get('/user/sign_in.json', { params })
);