<template>
  <section class="flex justify-center items-center h-screen">
  <Card style="width: 20rem; overflow: hidden; background-color: rgb(203 213 225); ">
      <template #title>
        <div class="flex justify-center mt-2">
          <div class="flex justify-center bg-slate-200 rounded-full p-4">
            <i class="pi pi-user justify-center" style="font-size: 4rem" />
          </div>
        </div>
      </template>
      <template #subtitle>
        <div class="flex justify-center ">
          <span class="text-slate-950 text-3xl">Login</span>
        </div>
      </template>
      <template #content>
        <div class="flex flex-col justify-center gap-2">
          <InputText type="text" v-model="inputValueLogin" fluid placeholder="Entre com seu login" />
          <Password v-model="inputValuePassword" fluid :feedback="false" placeholder="Entre com sua senha" toggleMask />
        </div>

      </template>
      <template #footer>
        <div class="flex gap-4 mt-1">
          <Button label="Login" class="w-full" severity="contrast" />
        </div>
      </template>
    </Card>
  </section>
</template>

<script lang="ts">
export default {
  name: 'login',
  data() {
    return {
      inputValueLogin: '',
      inputValuePassword: '',
    }
  }
}
</script>
