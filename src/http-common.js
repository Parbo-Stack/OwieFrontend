import axios from "axios";
import AuthHeader from "./services/auth-header"

const instance = axios.create({
    baseURL: "http://localhost:8081/api",
    headers: AuthHeader(),
});

export default instance;