import axios from "axios";

const AxiosHttpInstance = axios.create({
  baseURL: "http://192.168.43.151:1337/",
});

const AxiosHttpsInstance = axios.create({
  baseURL: "https://" + process.env.SERVER_ADDRESS + ":" + process.env.SERVER_PORT,
});

export default AxiosHttpInstance;
