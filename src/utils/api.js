import axios from "axios";

const baseApi = axios.create({
  baseURL: "https://nc-project.onrender.com/api",
});

export async function getAllArticles() {
  try {
    const result = await baseApi.get("/articles");
    return result;
  } catch (err) {
    console.log(err);
  }
}
export async function getArticleById(article_id) {
  try {
    const result = await baseApi.get(`/articles/${article_id}`);
    return result;
  } catch (err) {
    console.log(err);
  }
}

export async function getAllComments(article_id) {
  try {
    const result = await baseApi.get(`articles/${article_id}/comments`);
    return result;
  } catch (err) {
    console.log(err);
  }
}
