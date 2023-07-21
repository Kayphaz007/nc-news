import axios from "axios";

const baseApi = axios.create({
  baseURL: "https://nc-project.onrender.com/api",
});

export async function getAllArticles() {
  const result = await baseApi.get("/articles");
  return result;
}
export async function getArticleById(article_id) {
  const result = await baseApi.get(`/articles/${article_id}`);
  return result;
}

export async function getAllComments(article_id) {
  const result = await baseApi.get(`articles/${article_id}/comments`);
  return result;
}

export async function postComment(article_id, data) {
  try {
    const result = await baseApi.post(`articles/${article_id}/comments`, data);
    return result;
  } catch (err) {
    return Promise.reject(err);
  }
}
