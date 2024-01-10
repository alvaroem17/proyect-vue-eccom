<template>
  <h1 class="text-5xl text-center h-10 p-10 font-bold sm:mb-10">Products</h1>

  <SearchBar @filterProducts="filterProducts" />
  <SelectCategory @filterByCategory="filterByCategory" />

  <main class="flex flex-wrap sm:p-5 2xl:px-24 gap-y-10 gap-x-5">
    <div
      v-for="product in productsCopy"
      :key="product.id"
      class="sm:w-[49%] 2xl:w-[24%] h-auto shadow-lg hover:shadow-blue-300 rounded-lg flex flex-col justify-between"
    >
      <img
        :src="product.thumbnail"
        :alt="product.title"
        class="h-60 w-full object-cover rounded-t-lg"
      />
      <section class="p-5">
        <h1 class="text-xl font-semibold">{{ product.title }}</h1>
        <section class="flex justify-between mt-3 mb-3 items-end">
          <p class="text-sm text-gray-400 line-clamp-2">
            {{ product.description }}
          </p>
          <p class="text-lg font-bold text-blue-700">${{ product.price }}</p>
        </section>
        <section class="flex justify-between">
          <button
            class="bg-blue-500 text-white rounded px-5 py-2 w-2/3 hover:bg-blue-700"
            @click="() => addToCart(product)"
          >
            Add to cart
          </button>
          <div
            class="bg-white border w-1/4 border-gray-200 rounded-lg"
            data-hs-input-number
          >
            <div class="w-full flex justify-between items-center gap-x-1">
              <div class="grow py-2 px-3">
                <span class="block text-xs text-gray-500 dark:text-gray-400">
                  Select quantity
                </span>
                <input
                  class="w-full p-0 bg-transparent border-0focus:ring-0"
                  type="text"
                  v-model="product.quantity"
                  data-hs-input-number-input
                />
              </div>
              <div
                class="flex flex-col -gap-y-px divide-y divide-gray-200 border-s border-gray-200"
              >
                <button
                  type="button"
                  class="w-7 h-7 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-se-lg bg-gray-50 text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
                  data-hs-input-number-decrement
                  @click="quantityReduce(product)"
                >
                  <svg
                    class="flex-shrink-0 w-3.5 h-3.5"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M5 12h14" />
                  </svg>
                </button>
                <button
                  type="button"
                  class="w-7 h-7 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-ee-lg bg-gray-50 text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
                  data-hs-input-number-increment
                  @click="quantityAdd(product)"
                >
                  <svg
                    class="flex-shrink-0 w-3.5 h-3.5"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M5 12h14" />
                    <path d="M12 5v14" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
    <button class="fixed bottom-5 right-5 bg-blue-500 text-white rounded w-[3rem] h-[3rem] grid place-items-center hover:bg-blue-700">
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
          d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
        />
      </svg>
    </button>
  </main>
</template>

<script setup>
import { getAllProducts } from "./../services/productService";
import { getMyCart, updateMyCart } from "./../services/cartService";
import SearchBar from "./../components/SearchBar.vue";
import SelectCategory from "./../components/SelectCategory.vue";
import { onMounted, ref } from "vue";

const products = ref([]);
const productsCopy = ref([]);
const myCart = ref([]);

const filterProducts = (props) => {
  productsCopy.value = products.value.filter((product) => {
    console.log(product.title.toLowerCase(), props.toLowerCase());
    if (product.title.toLowerCase().includes(props.toLowerCase())) {
      return product;
    }
  });
};

const filterByCategory = (props) => {
  console.log(props);
  productsCopy.value = products.value.filter((product) => {
    if (props === " ") {
      return product;
    } else if (product.category.includes(props)) {
      return product;
    }
  });
};

onMounted(async () => {
  try {
    products.value = await getAllProducts();
    productsCopy.value = await getAllProducts();
  } catch (error) {
    console.error(error);
  }

  try {
    myCart.value = await getMyCart();
  } catch (error) {
    console.error(error);
  }
});

const quantityAdd = (props) => {
  if (props.quantity === undefined) {
    props.quantity = 1;
  } else {
    props.quantity += 1;
  }
};

const quantityReduce = (props) => {
  if (props.quantity > 1) {
    props.quantity -= 1;
  }
};

const addToCart = (props) => {
  if (!sessionStorage.getItem("token")) {
    window.location.href = "/login";
  }
  if (myCart.value.products.find((elem) => elem._id === props._id)) {
    myCart.value.products.forEach((product) => {
      if (product._id === props._id) {
        product.quantity += parseInt(props.quantity) ? props.quantity : 1;
      }
    });
  } else {
    myCart.value.products.push({ _id: props._id, quantity: props.quantity });
  }

  updateMyCart(myCart.value);
};
</script>

<style lang="scss" scoped></style>
