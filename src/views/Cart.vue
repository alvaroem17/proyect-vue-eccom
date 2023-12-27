<template>
  <div v-for="item in cart.products" :key="item">{{ item._id }} - {{ item.quantity }}</div>
</template>

<script setup>
import { getMyCart } from './../services/cartService';
import { onMounted, ref } from 'vue'

const cart = ref([])

onMounted(
  async () => {
    try {
      cart.value = await getMyCart();
      console.log(cart.value)
    } catch (error) {
      console.error(error.response.data.message)
    }
  }
)

</script>

<style lang="scss" scoped></style>
