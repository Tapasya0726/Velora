import api from "../api/axios";

export const getProjects = async () => {
    const response = await api.get("/resume/projects");
    return response.data;
};

export const createProject = async (projectData) => {
    const response = await api.post("/resume/projects", projectData);
    return response.data;
};

export const updateProject = async (id, projectData) => {
    const response = await api.put(`/resume/projects/${id}`, projectData);
    return response.data;
};

export const deleteProject = async (id) => {
    const response = await api.delete(`/resume/projects/${id}`);
    return response.data;
};