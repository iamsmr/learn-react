import axios from "axios";
const KEY = "AIzaSyA5Hwhn_tsHlvo7T3EUiysnYTltT7_vYrA";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
});
