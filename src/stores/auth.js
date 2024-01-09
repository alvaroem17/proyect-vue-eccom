import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useAuthStore = defineStore(
  "auth",
  () => {
    const token = ref("");
    const userId = ref("");

    const getToken = computed(() => {
      return token.value;
    });

    const getUser = computed(() => {
      return userId.value;
    });

    const setToken = (newToken) => {
      token.value = newToken;
    };

    const setUserId = (newUserId) => {
      userId.value = newUserId;
    };

    const logout = () => {
      token.value = "";
      userId.value = "";
    };
    return { getToken, getUser, setToken, setUserId, logout };
  },
  { persist: true }
);
