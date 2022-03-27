import axios from "axios";

export default axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
  headers: {
    Authorization: "Bearer none",
    mode: "no-cors",
  },
});
