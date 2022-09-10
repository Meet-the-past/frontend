import axios from "axios";

export default axios.create({
  baseURL: "http://3.39.75.19:8080/api/v1/", //향후 실제 개발중인 backend api와 연결 (지금은 임시서버로 부터 값을 가져옴)
});
