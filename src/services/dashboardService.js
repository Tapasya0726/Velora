import api from "../api/axios";

export const getDashboardStats = async () => {

    const response = await api.get("/dashboard/stats");

    return response.data;

};

export const getApplicationStats = async () => {

    const response = await api.get("/applications/stats");

    return response.data;

};