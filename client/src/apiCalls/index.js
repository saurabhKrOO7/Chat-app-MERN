import axios from "axios";

export const url = "https://chat-app-server-qywb.onrender.com";

export const axiosInstance = axios.create({
    headers: {
        authorization: `Bearer ${localStorage.getItem('token')}`
    }

});
