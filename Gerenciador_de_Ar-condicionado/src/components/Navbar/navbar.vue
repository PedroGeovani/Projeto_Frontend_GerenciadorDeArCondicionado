<template>
  <nav class="flex bg-slate-900 justify-between">
    <section class="flex text-right gap-1 text-white text-lg items-center">
      <div class="flex my-1 mx-2 rounded-md hover:bg-slate-700 hover:font-bold">
        <RouterLink class="flex mx-3 my-1" to="/">Home</RouterLink>
      </div>
      <div class="flex my-1 mx-2 rounded-md hover:bg-slate-700 hover:font-bold">
        <RouterLink class="flex mx-3 my-1" to="/register">Registro</RouterLink>
      </div>
    </section>
    <section class="flex text-right text-white text-lg">
      <div class="flex border-white border-2 my-1 mx-4 rounded-md hover:bg-gray-300 hover:text-gray-900">
        <i class="flex mx-3 my-1 content-center pi pi-sign-in" />
        <RouterLink class="flex me-6 my-1" to="/login">Login</RouterLink>
      </div>
    </section>
  </nav>
</template>

<script lang="ts">
import { RouterLink } from 'vue-router';

export default {
  name: 'navbar'
}

</script>