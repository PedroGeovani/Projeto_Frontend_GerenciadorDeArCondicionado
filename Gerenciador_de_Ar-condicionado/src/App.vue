<script lang="ts">
import { RouterLink, RouterView } from 'vue-router'
export default {
  name: 'app'
}
</script>

<template>
  <header>
      <nav>
        <RouterLink to="/">Home</RouterLink> | 
        <RouterLink to="/about">About</RouterLink>
      </nav>  
  </header>

  <RouterView />
</template>