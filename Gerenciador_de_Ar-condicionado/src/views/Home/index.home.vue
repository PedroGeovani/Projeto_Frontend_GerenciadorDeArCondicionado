<script lang="ts">
export default {
  name: 'home',
  data() {
    return {
      ambiente: [
        { environmentName: 'Academia', status:'on' },
        { environmentName: 'Laboratório', status:'off'},
        { environmentName: 'Refeitório', status:'on'},
        { environmentName: 'Biblioteca', status:'on' },
        { environmentName: 'SAMB', status:'on'},
        { environmentName: 'LMC 2', status:'on'}, 
        { environmentName: 'Redes', status:'off'},
        { environmentName: 'LMC 3', status:'off'}, 
      ]
    }
  },
}
</script>

<template>
  <section class="flex flex-wrap justify-center gap-2 p-4 items-start">
    <div v-for="item in ambiente">
      <Environment :environmentName="item.environmentName" :status="item.status" />
    </div>
  </section>
</template>