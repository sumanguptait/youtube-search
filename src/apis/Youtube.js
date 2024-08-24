import axios from "axios";

const KEY = "AIzaSyBZ-9VGuLLdWCvha2ChNz1f13DJeEak-7A";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
});
