<script lang="ts">
export default {
  name: 'app'
}
</script>

<template>
  <section class="justify-center items-center w-full min-h-svh bg-gradient-to-t from-green-300 to-white">
    <Navbar />
    <Toast />
    <RouterView />
  </section>
</template>