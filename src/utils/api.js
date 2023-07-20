import axios from "axios";

const baseApi = axios.create({
  baseURL: "https://nc-project.onrender.com/api",
});

export async function getAllArticles() {
  try {
    const result = baseApi.get("/articles");
    return result;
  } catch (err) {
    console.log(err);
  }
}
export async function getArticleById(article_id) {
  try {
    const result = baseApi.get(`/articles/${article_id}`);
    return result;
  } catch (err) {
    console.log(err);
  }
}

export async function increaseArticleVote(article_id) {
  try {
    const result = await baseApi.patch(`/articles/${article_id}`, {
      inc_votes: 1,
    });
    return result;
  } catch (err) {
    console.log(err);
    return Promise.reject("Error");
  }
}
export async function decreaseArticleVote(article_id) {
  try {
    const result = await baseApi.patch(`/articles/${article_id}`, {
      inc_votes: -1,
    });
    return result;
  } catch (err) {
    console.log(err);
  }
}
