import crudHeader from "../http-common";


const BaseUrl = "http://localhost:8082/"

const upload = (file, onUploadProgress) => {
    let formData = new FormData();

    formData.append("file", file);

    return crudHeader.post(BaseUrl + "/upload", formData, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
        onUploadProgress,
    });
};

const getFiles = () => {
    return crudHeader.get(BaseUrl + "/files");
};

export default {
    upload,
    getFiles,
};