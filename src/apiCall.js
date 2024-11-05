import axios from "axios";

const api = axios.create({
  baseURL: "https://its-nc-news.onrender.com/api",
});

const getArticles = () => {
  return api.get("/articles").then(({ data: { articles } }) => {
    return articles;
  });
};

const getArticleById = (article_id) => {
    return api.get(`/articles/${article_id}`).then(({data}) => {
        return data.article;
    });
}

const getComments = (article_id) => {
    return api.get(`/articles/${article_id}/comments`).then(({data}) => {
        return data;
    });
}

export { getArticles, getArticleById, getComments };
