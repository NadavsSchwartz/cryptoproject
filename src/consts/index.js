export const API = {
  BASE: 'http://localhost:5000',
  GoogleAuth: '/auth/google',
  TwitterAuth: '/auth/twitter',
  GithubAuth: '/auth/github',
  UserStats: '/user/stats',
  UserDetails: '/me',
  DeleteUrl: '/delete',
  CreateUrl: '/url',
  LogoutUser: '/auth/logout',
  ContactUs: '/contact',
};

export const getAxiosConfig = (options) => ({
  ...options,

  withCredentials: true,
});
