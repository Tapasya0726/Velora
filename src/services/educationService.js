import api from "../api/axios";

export const getEducation = async () => {
    const response = await api.get("/resume/education");
    return response.data;
};

export const createEducation = async (educationData) => {
    const response = await api.post("/resume/education", educationData);
    return response.data;
};

export const updateEducation = async (id, educationData) => {
    const response = await api.put(
        `/resume/education/${id}`,
        educationData
    );
    return response.data;
};

export const deleteEducation = async (id) => {
    const response = await api.delete(`/resume/education/${id}`);
    return response.data;
};