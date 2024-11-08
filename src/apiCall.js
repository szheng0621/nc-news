import axios from "axios";

const api = axios.create({
  baseURL: "https://its-nc-news.onrender.com/api",
});

const getArticles = ({ sort_by = 'created_at', order = 'desc'} = {}) => {
  return api.get("/articles", {
    params: { sort_by, order}
  }).then(({ data: { articles } }) => {
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
    })
    .catch((error) => {
        console.log("error, can not get comment")
        return error
    })
}

const patchVotes = (article_id, { inc_votes }) => {
    return api.patch(`/articles/${article_id}`, { inc_votes }).then(({data}) => {
        return data.article;
    })
    .catch((error) => {
        return error
    })
}

const postComment = (article_id, { username, body }) => {
    return api.post(`/articles/${article_id}/comments`, { username, body }).then(({data}) => {
        return data;
    })
    .catch((error) => {
        console.log("error, can not post comment")
        return error
    })
}

const deleteCommentById = (comment_id) => {
    return api.delete(`/comments/${comment_id}`).then(({data}) => {
        return data;
    })
    .catch((error) => {
        console.log("error, can not get comment")
        return error
    })

}

const getTopics = () => {
    return api.get(`/topics`).then(({ data }) => {
      return data.topics;
    }).catch((error) => {
        return error
    })
  };

const getArticlesByTopic = ({ sort_by = 'created_at', order = 'desc', topic = null } = {}) => {
    return api.get("/articles", {
        params: { sort_by, order, topic }
      }).then(({ data: { articles } }) => {
   
      return articles;
    });
  }


export { getArticles, getArticleById, getComments, patchVotes, postComment, deleteCommentById, getTopics, getArticlesByTopic };
