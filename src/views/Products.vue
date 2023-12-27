<template>
  <h1 class="text-5xl text-center h-10 p-10 font-bold sm:mb-10">Products</h1>
  <main class="flex flex-wrap sm:p-5 2xl:px-24 gap-y-10 gap-x-5">
    <div
      v-for="product in products"
      :key="product.id"
      class="sm:w-[80%] 2xl:w-[24%] h-auto shadow-lg hover:shadow-blue-300 rounded-lg flex flex-col justify-between"
    >
      <img
        :src="product.thumbnail"
        :alt="product.title"
        class="h-60 w-full object-cover rounded-t-lg"
      />
      <section class="p-5">
        <h1 class="text-sm font-semibold">{{ product.title }}</h1>
        <section class="flex gap-2 mt-3 mb-3 items-end">
          <p class="text-sm text-gray-400 line-clamp-2">
            {{ product.description }}
          </p>
          <p class="text-lg font-bold text-blue-700">${{ product.price }}</p>
        </section>
        <section class="flex gap-2">
          <button
            class="bg-blue-500 text-white rounded px-5 py-2 w-2/3 hover:bg-blue-700"
            @click="() => addToCart(product)"
          >
            Add to cart
          </button>
          <input
            type="number"
            defaultValue="1"
            class="w-1/3 text-center caret-blue-300"
          />
        </section>
      </section>
    </div>
  </main>
</template>

<script setup>
import { getAllProducts } from "./../services/productService";
import { onMounted, ref } from "vue";

const products = ref([]);
onMounted(async () => {
  getAllProducts()
    .then((response) => {
      products.value = response;
    })
    .catch((error) => console.error(error));
});

const addToCart = (product) => {
  if (!sessionStorage.getItem("token")) {
    console.log("no token");
    window.location.href = "/login";
  }
  console.log("token: " + sessionStorage.getItem("token"))
};
</script>

<style lang="scss" scoped></style>
