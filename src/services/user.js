import api from '../configs/api';

export const login = (params = {}) => (
  api.post('users/sign_in.json', params)
);

export const passwordRecovered = (params) => (
  api.post('users/password.json', params)
);