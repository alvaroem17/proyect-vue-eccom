<template class="grid place-items-center">
  <div class="altura w-full grid place-items-center">
    <div class="xl:w-1/2 2xl:w-1/4 h-1/2 rounded-2xl shadow-2xl">
      <h1 class="text-5xl text-blue-900 font-bold text-center p-5">Login</h1>
      <hr />
      <section
        class="flex flex-col items-between justify-around p-20 w-full gap-5"
      >
        <label class="flex justify-between">
          Email:
          <input
            type="text"
            placeholder="Email"
            class="w-4/6 bg-slate-100 rounded"
            v-model="email"
            autofocus
          />
        </label>
        <label class="flex justify-between">
          Password:
          <input
            type="password"
            placeholder="Password"
            class="w-4/6 bg-slate-100 rounded"
            v-model="password"
            @keydown="
              (e) => {
                if (e.key === 'Enter') {
                  loginCommand()
                }
              }
            "
          />
        </label>
        <button
          class="w-full h-9 bg-blue-500 hover:bg-blue-700 rounded text-white"
          @click="loginCommand"
        >
          Login
        </button>
      </section>
    </div>
    <p v-if="hasError" class="text-red-500 absolute bottom-5 left-5">
      {{ errorMsg }}
    </p>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { login } from "./../services/authService";
import { useAuthStore } from "../stores/auth";

const password = ref("");
const email = ref("");
const errorMsg = ref("");
const hasError = ref(false);

const auth = useAuthStore();

const loginCommand = async () => {
  try {
    const response = await login(email.value, password.value);
    sessionStorage.setItem("token", response.token);
    sessionStorage.setItem("userId", response.user);
    // auth.setToken(response.token);
    // auth.setUserId(response.user);
    window.location.href = "/"
    hasError.value = false;
  } catch (error) {
    hasError.value = true;
    errorMsg.value = error.response.data.message;
  }
};

</script>

<style scoped>
.altura {
  height: 90vh;
}
</style>
