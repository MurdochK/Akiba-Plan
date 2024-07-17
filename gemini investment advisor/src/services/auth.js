// src/services/auth.js

let authenticated = false;

export const login = async (email, password) => {
  // Replace with actual API call
  if (email === 'test@test.com' && password === 'password') {
    authenticated = true;
    return true;
  }
  return false;
};

export const register = async (email, password) => {
  // Replace with actual API call
  return true;
};

export const isAuthenticated = () => {
  return authenticated;
};
