import http from "../http-common"

const getAll = async () => {
    return await http.get('/stories');
};

const getById = async id => {
    return await http.get(`/stories/${id}`);
};

const findByTitle = async (title) => {
    return await http.get(`/findbytitle?title=${title}`);
};

const createStory = async (data) => {
    return await http.post('/story/admin', data);
};

const updateStory = async (id, data) => {
    return await http.put(`/story/${id}`, data);
};

const deleteById = async (id) => {
    return await http.delete(`/story/${id}`);
};

const removeAll = async () => {
    return await http.delete(`/story`);
};

export default {
    getAll,
    getById ,
    createStory,
    updateStory,
    deleteById,
    removeAll,
    findByTitle
}