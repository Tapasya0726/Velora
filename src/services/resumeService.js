import api from "../api/axios";

export const getResume = async () => {
    const response = await api.get("/resume");
    return response.data;
};

export const saveResume = async (resumeData) => {
    const response = await api.post("/resume", resumeData);
    return response.data;
};