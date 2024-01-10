import api from "./config";
import { useAuthStore } from "@/stores/auth";

const authStore = useAuthStore()

export async function getMyCart() {
  const { data } = await api.get("/carts/myCart", {
    headers: {
      Authorization: authStore.getToken,//sessionStorage.token,
    },
  });
  return data;
}

export async function getMyCartDetailed() {
  const { data } = await api.get("/carts/myCartDetailed", {
    headers: {
      Authorization: authStore.getToken,
    },
  });
  return data;
}

export async function updateMyCart(product) {
  const { data } = await api.put("/carts/myCart", product, {
    headers: {
      Authorization: authStore.getToken,
    },
  });
  return data;
}
