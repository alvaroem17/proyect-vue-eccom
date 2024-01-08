<template>
  <div class="w-full h-20 flex justify-center gap-3">
    <input
      v-model="search"
      @keydown.enter="filterProducts"
      type="text"
      class="w-1/2 h-10 px-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      placeholder="Search..."
    />
    <button
      @click="filterProducts"
      class="w-[3rem] h-10 bg-blue-500 text-white rounded-lg hover:bg-blue-700 grid place-items-center"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-6 h-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
        />
      </svg>
    </button>
  </div>
</template>

<script setup>
import { ref } from "vue";

const search = ref("");

const emit = defineEmits(["filterProducts"]);

const filterProducts = () => {
  emit("filterProducts", search.value);
};
</script>

<style lang="scss" scoped></style>
