import api from "./config.js";

export async function login(email, password) {
  const { data } = await api.post("/auth/login", {email: email, password: password});
  return data;
}

export async function register(email, password, name, phone, username) {
    const { data } = await api.post("/auth/register", {email: email, password: password, name: {firstname: name.firstName, lastname:name.lastName}, phone: phone, username: username});
    return data;
  }