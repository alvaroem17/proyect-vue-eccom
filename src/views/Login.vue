<template class="grid place-items-center">
  <div class="altura w-full grid place-items-center">
    <div class="xl:w-1/2 2xl:w-1/4 h-1/3 rounded-2xl shadow-2xl">
      <h1 class="text-5xl text-blue-900 font-bold text-center p-5">Login</h1>
      <hr />
      <section class="flex flex-col items-between justify-around p-20 w-full gap-5">
        <label class="flex justify-between">
          Email:
          <input
            type="text"
            placeholder="Email"
            class="w-4/6 bg-slate-100 rounded"
          />
        </label>
        <label class="flex justify-between">
          Password:
          <input
            type="password"
            placeholder="Password"
            class="w-4/6 bg-slate-100 rounded"
          />
        </label>
        <button class="w-full h-9 bg-blue-500 hover:bg-blue-700 rounded text-white">Login</button>
      </section>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.altura {
  height: 90vh;
}
</style>
