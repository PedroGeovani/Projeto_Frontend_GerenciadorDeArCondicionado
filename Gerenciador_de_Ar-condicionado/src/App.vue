<script lang="ts">
import { RouterView } from 'vue-router'
export default {
  name: 'app'
}
</script>

<template>
  <Navbar />
  <section class="flex justify-center items-center h-screen"
    style="background-image: url('https://acdn.mitiendanube.com/stores/001/776/325/products/papel-de-parede-degrade-azul-still1-bc63798a1314130cae16348231517136-1024-1024.jpg')">
    <RouterView />
  </section>
</template>