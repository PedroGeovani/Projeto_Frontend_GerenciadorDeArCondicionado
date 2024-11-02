<template>
  <nav class="bg-slate-900">
    <section class="flex text-right gap-4 text-white text-lg">
      <RouterLink class="flex mx-4 my-2" to="/">Home</RouterLink>
      <RouterLink class="flex mx-4 my-2" to="/register">Registro</RouterLink>
    </section>
  </nav>
</template>

<script lang="ts">
import { RouterLink } from 'vue-router';

export default {
  name: 'navbar'
}

</script>