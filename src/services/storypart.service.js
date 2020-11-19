import http from "../http-common";

const create = (storyId,data) => {
    return http.post(`/story/${storyId}`, data);
}

export default {
    create
};