import api from '../configs/api';

export const login = (params) => (
  api.post('users/sign_in.json', params)
);

export const requestPassword = (params) => (
  api.post('users/password.json', params)
);

export const sendNewPassword = (params) => (
  api.put('users/password.json', params)
)