import axios from 'axios';

const baseEndpoint = 'http://localhost:8000/api';

export const getJwtToken = async (user,password) =>{
    const response = await axios.post(`${baseEndpoint}/token/`, {
        username: user,
        password: password,
      });
    return response;
}

export const getAllProducts = async() => {
    let accessToken = localStorage.getItem('accessToken');

    const response = await axios.get(`${baseEndpoint}/products/`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
    
      return response;
}

export const verifyToken = async (token) => {
    try {
      await axios.post(`${baseEndpoint}/token/verify/`, {
        token: token,
      });
      return true;
    } catch (error) {
      return false;
    }
  };

export const refreshAccessToken = async () => {
    const refresh = localStorage.getItem('refreshToken');
    try {
      const response = await axios.post(`${baseEndpoint}/token/refresh/`, {
        refresh: refresh,
      });
      const newAccess = response.data.access;
      localStorage.setItem('accessToken', newAccess);
      return newAccess;
    } catch (err) {
      console.error('Refresh token expired or invalid');
      return null;
    }
  };