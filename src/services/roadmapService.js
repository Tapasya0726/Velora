import api from "../api/axios";

// Get user's roadmap
export const getRoadmap = async () => {
    const response = await api.get("/roadmap");
    return response.data;
};

// Select a roadmap
export const selectRoadmap = async (roadmapType) => {
    const response = await api.post("/roadmap/select", {
        roadmapType,
    });

    return response.data;
};

// Update milestone status
export const updateRoadmapStatus = async (
    roadmapItemId,
    status
) => {
    const response = await api.put(
        `/roadmap/${roadmapItemId}`,
        {
            status,
        }
    );

    return response.data;
};