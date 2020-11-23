import axios from "axios";

const analyzeArticle = (url) => {
  return axios({
    url: "http://0.0.0.0:8080/article_analysis",
    method: "POST",
    data: { url },
    headers: {
      Authorization: `Bearer ${process.env.REACT_APP_BEARER_TOKEN}`,
    },
  });
};

export default analyzeArticle;
