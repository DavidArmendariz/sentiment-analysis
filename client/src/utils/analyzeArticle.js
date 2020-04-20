import axios from "axios";

const analyzeArticle = (url) => {
  return axios({
    url: "http://0.0.0.0:8080/article_analysis",
    method: "POST",
    data: { url },
    headers: {
      Authorization: "Bearer LKT2Ko_1YDL1wZas5OjljkoxpdLK0M31DhEcE1SHRGQ",
    },
  });
};

export default analyzeArticle;
