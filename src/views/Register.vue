<template class="grid place-items-center">
  <div class="altura w-full grid place-items-center">
    <div class="xl:w-1/2 2xl:w-1/4 h-2/3 rounded-2xl shadow-2xl">
      <h1 class="text-5xl text-blue-900 font-bold text-center p-5">Sign Up</h1>
      <hr />
      <section
        class="flex flex-col items-between justify-around p-10 w-full gap-5"
      >
        <label class="flex justify-between">
          Email:
          <input
            type="text"
            placeholder="Email"
            class="w-4/6 bg-slate-100 rounded"
            v-model="email"
          />
        </label>
        <label class="flex justify-between">
          Username:
          <input
            type="text"
            placeholder="Username"
            class="w-4/6 bg-slate-100 rounded"
            v-model="username"
          />
        </label>
        <label class="flex justify-between">
          First name:
          <input
            type="text"
            placeholder="First name"
            class="w-4/6 bg-slate-100 rounded"
            v-model="name.firstName"
          />
        </label>
        <label class="flex justify-between">
          Last name:
          <input
            type="text"
            placeholder="Last name"
            class="w-4/6 bg-slate-100 rounded"
            v-model="name.lastName"
          />
        </label>
        <label class="flex justify-between">
          Phone:
          <input
            type="text"
            placeholder="Phone"
            class="w-4/6 bg-slate-100 rounded"
            v-model="phone"
          />
        </label>
        <label class="flex justify-between">
          Password:
          <input
            type="password"
            placeholder="Password"
            class="w-4/6 bg-slate-100 rounded"
            v-model="password"
          />
        </label>
        <button
          class="w-full h-9 bg-blue-500 hover:bg-blue-700 rounded text-white"
          @click="signUp"
        >
          Sign Up
        </button>
      </section>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { register } from "./../services/authService";

const password = ref("");
const email = ref("");
const username = ref("");
const name = ref({});
const phone = ref("");

const signUp = async () => {
  const response = await register(email.value, password.value, name.value, phone.value, username.value);
  sessionStorage.setItem("token", response.token);
  sessionStorage.setItem("userId", response.user);
  window.location.href = "/home"
};
</script>

<style scoped>
.altura {
  height: 90vh;
}
</style>
