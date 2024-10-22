import axios from 'axios';

const API_URL = 'http://localhost:5002/api/users'; // Update with your backend URL

// Register a new user
export const registerUser = async (userData) => {
    try {
        const response = await axios.post(`${API_URL}/register`, userData);
        return response.data; // Return response data
    } catch (error) {
        throw error.response.data; // Throw error response for handling in the component
    }
};

// Login a user
export const loginUser = async (credentials) => {
    try {
        const response = await axios.post(`${API_URL}/login`, credentials);
        return response.data; // Return response data
    } catch (error) {
        throw error.response.data; // Throw error response for handling in the component
    }
};

// Login with Facebook
export const facebookLogin = async (accessToken, userID) => {
    try {
        const response = await axios.post(`${API_URL}/facebookLogin`, {
            accessToken,
            userID,
        });
        return response.data; // Return response data
    } catch (error) {
        throw error.response.data; // Throw error response for handling in the component
    }
};

// Login with Google
export const googleLogin = async (tokenId) => {
    try {
        const response = await axios.post(`${API_URL}/googleLogin`, { tokenId });
        return response.data; // Return response data
    } catch (error) {
        throw error.response.data; // Throw error response for handling in the component
    }
};
