<template>
  <section class="flex justify-center items-center h-screen">
    <Card style="width: 20rem; overflow: hidden; background-color: rgb(203 213 225);">
      <template #header>
      </template>
      <template #title>
        <span class="flex justify-center text-3xl text-gray-950">Desculpe!</span>
      </template>
      <template #subtitle>       
        <span class="flex justify-center text-xl text-gray-950">    
          Pagina não encontrada
        </span>
      </template>
      <template #content>
        <div class="flex mt-4 flex-row gap-3 justify-center">
          <i class="pi pi-spin pi-spinner" style="font-size: 3rem"></i>
          <i class="pi pi-spin pi-cog" style="font-size: 3rem"></i>
        </div>
      </template>
      <template #footer>
        <div class="flex mt-4 justify-center">
          <Button label="Retornar" @click="$router.go(-1)" style="width: 70%;" class="w-full" severity="contrast"/>
        </div>
      </template>
    </Card>
  </section>
</template>

<script lang="ts">
export default {
  name: 'notfound',
}
</script>
