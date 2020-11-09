import axios from "axios";
import AuthHeader from "./services/auth-header"

const instance = axios.create({
    baseURL: "http://localhost:8082/api",
    headers: AuthHeader(),
});

export default instance;