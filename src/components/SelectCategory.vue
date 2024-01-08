<template>
  <div class="w-full flex flex-col items-center justify-center">
    <label for="countries" class="mb-2 text-sm font-medium text-gray-900 w-1/4"
      >Filter category</label
    >
    <select
      id="category"
      class="bg-gray-50 border border-blue-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/4 p-2.5"
      @click="filterByCategory"
    >
      <option selected value=" ">Choose a category</option>
      <option
        v-for="c in categories"
        :key="c"
        :value="c"
      >
        {{ c }}
      </option>
    </select>
  </div>
</template>

<script setup>
const categories = [
  "Anime",
  "T-shirt",
  "Pantalones",
  "Vaqueros",
  "Chinos",
  "Pana",
  "Bermudas",
  "Lino",
  "Abrigos",
  "Lana",
  "Plumón",
];

const emit = defineEmits(["filterByCategory"]);

const filterByCategory = () => {
  emit("filterByCategory", category.value);
};
</script>

<style lang="scss" scoped></style>
