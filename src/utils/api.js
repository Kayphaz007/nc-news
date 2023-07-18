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
