<template>
  <div class="w-full h-[90vh] flex flex-col justify-center items-center gap-5">
    <div
      v-for="item in cart.products"
      :key="item"
      class="flex justify-between rounded items-center gap-2 w-1/3 shadow hover:shadow-lg hover:shadow-blue-300 pr-2"
    >
      <img :src="item._id.thumbnail" class="w-24 h-16 object-cover" />
      <section class="grid place-items-center">
        <h1 class="font-semibold">{{ item._id.title }}</h1>
        <p>${{ item._id.price }}</p>
      </section>
      <section class="flex gap-2 justify-center">
        <input type="number" v-model="item.quantity" class="w-10" />
        <button
          class="w-10 h-10 rounded hover:scale-105 bg-red-600 text-white grid place-items-center"
          @click="removeFromCart(item._id._id)"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="w-6 h-6"
          >
            <path
              fill-rule="evenodd"
              d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </section>
    </div>
    <div class="flex justify-end gap-2 items-center w-1/3 h-10">
      <p><strong class="text-2xl">Total:</strong> ${{ total }}</p>
      <button
        class="w-24 h-10 rounded ml-20 hover:shadow-inner bg-blue-600 text-white font-bold hover:scale-105 hover:bg-blue-800"
        @click="pay"
      >
        Pay
      </button>
      <button
        class="w-24 h-10 rounded hover:shadow-inner bg-red-600 text-sm text-white font-semibold hover:scale-105 hover:bg-red-800"
        @click="clearCart"
      >
        Clear cart
      </button>
    </div>
    <p v-if="paid !== false" class="text-green-500 absolute left-10 bottom-10">
      {{ paid }}
    </p>
  </div>
</template>

<script setup>
import { getMyCartDetailed, updateMyCart } from "./../services/cartService";
import { onMounted, ref } from "vue";

const cart = ref([]);
const total = ref(0);
const paid = ref(false);

const clearCart = async () => {
  try {
    cart.value.products = [];
    total.value = 0;
    updateMyCart(cart.value);
  } catch (error) {
    console.error(error.response.data.message);
  }
};

const removeFromCart = async (id) => {
  try {
    cart.value.products = cart.value.products.filter(
      (item) => item._id._id !== id
    );
    if (cart.value.products.length === 0) {
      total.value = 0;
    } else {
      total.value = cart.value.products.reduce(
        (acc, item) => acc + item._id.price * item.quantity,
        0
      );
      total.value = total.value.toFixed(2);
    }
    updateMyCart(cart.value);
  } catch (error) {
    console.error(error.response.data.message);
  }
};

const pay = () => {
  paid.value = "Your products will be delivered shortly";
  clearCart();
};

onMounted(async () => {
  try {
    cart.value = await getMyCartDetailed();
    total.value = cart.value.products.reduce(
      (acc, item) => acc + item._id.price * item.quantity,
      0
    );
    total.value = total.value.toFixed(2);
  } catch (error) {
    console.error(error.response.data.message);
  }
});
</script>

<style lang="scss" scoped></style>
