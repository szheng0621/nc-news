import axios from "axios";

const api = axios.create({
  baseURL: "https://its-nc-news.onrender.com/api",
});

const getArticles = () => {
  return api.get("/articles").then(({ data: { articles } }) => {
    console.log(articles, "articles")
    return articles;
  });
};

export { getArticles };
