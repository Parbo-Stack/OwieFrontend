import http from "../http-common";


const create = (authorId,storyId,data) => {
    return http.post(`/storypart/${authorId}${storyId}`, data);
}


export default {
    create
};