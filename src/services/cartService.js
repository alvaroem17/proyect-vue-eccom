import api from "./config";

export async function getMyCart() {
  const { data } = await api.get("/carts/myCart", {
    headers: {
      Authorization: sessionStorage.token,
    },
  });
  return data;
}

export async function getMyCartDetailed() {
  const { data } = await api.get("/carts/myCartDetailed", {
    headers: {
      Authorization: sessionStorage.token,
    },
  });
  return data;
}

export async function updateMyCart(product) {
  const { data } = await api.put("/carts/myCart", product, {
    headers: {
      Authorization: sessionStorage.token,
    },
  });
  return data;
}
