import api from "./config.js";

export async function getAllProducts() {
  const { data } = await api.get("/products");
  return data;
}
