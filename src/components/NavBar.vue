<template>
  <div
    class="bg-blue-700 text-white h-16 sticky top-0 flex justify-between items-center pl-5 pr-5 shadow-black"
  >
    <img src="" />
    <nav>
      <ul class="flex gap-5 justify-between">
        <li
          v-for="(item, index) in navItems"
          :key="index"
          class="cursor-pointer font-black text-lg hover:text-blue-200"
        >
          <RouterLink :to="item">{{ item }}</RouterLink>
        </li>
      </ul>
    </nav>
    <section class="flex gap-2 justify-between">
      <button
        class="bg-white text-blue-700 rounded h-10 w-24 hover:bg-gray-200"
      >
        Login
      </button>
      <button class="border rounded h-10 w-24 hover:bg-blue-800">
        Register
      </button>
    </section>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
const navItems = ["Home", "Products", "Cart"];
</script>

<style lang="scss" scoped></style>
