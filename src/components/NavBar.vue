<template>
  <div
    class="bg-blue-700 text-white h-16 sticky top-0 flex justify-between items-center pl-5 pr-5 shadow-black"
  >
    <section class="w-60">
      <img
        src="./../assets/_41593672-ba37-41a7-bf1d-71a34ae6f52c-removebg-preview.png"
        class="h-10"
      />
    </section>
    <nav>
      <ul class="flex gap-5 justify-between w-60">
        <li
          v-for="(item, index) in navItems"
          :key="index"
          class="cursor-pointer font-black text-lg hover:text-blue-200"
        >
          <RouterLink :to="item">{{ item }}</RouterLink>
        </li>
      </ul>
    </nav>
    <section class="flex gap-2 justify-center w-60" v-if="!hasToken">
      <button
        class="bg-white text-blue-700 rounded h-10 w-24 hover:bg-gray-200"
        @click="() => handleRouter('/login')"
      >
        Login
      </button>
      <button
        class="border rounded h-10 w-24 hover:bg-blue-800"
        @click="() => handleRouter('/register')"
      >
        Register
      </button>
    </section>
    <section class="flex gap-2 justify-center w-60" v-else>
      <button
        class="bg-white text-blue-700 rounded h-10 w-24 hover:bg-gray-200"
        @click="logOut"
      >
        Log Out
      </button>
    </section>
  </div>
</template>

<script setup>
import { RouterLink, useRouter, useRoute } from "vue-router";
import { onMounted, ref, onUpdated } from "vue";

import { useAuthStore } from "../stores/auth"

const hasToken = ref(false);
const navItems = ref(["Home", "Products"]);
const auth = useAuthStore();

const router = useRouter();
const currentRoute = useRoute();

const logOut = () => {
  sessionStorage.removeItem("token");
  sessionStorage.removeItem("userId");
  auth.logout();
  hasToken.value = false;
  navItems.value.pop();
  handleRouter("/");
};

const handleRouter = (route) => {
  router.push(route);
};

onMounted(() => {
  console.log(auth.getUserId);
  hasToken.value = auth.getToken ? true : false; //sessionStorage.getItem("token");
  if (hasToken.value) {
    navItems.value.push("Cart");
  }
});

// onUpdated(() => {
//   console.log(auth.getToken);
//   hasToken.value = auth.getToken ? true : false; //sessionStorage.getItem("token");
  
// });

</script>

<style lang="scss" scoped></style>
