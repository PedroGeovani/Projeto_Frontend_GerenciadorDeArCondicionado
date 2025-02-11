<template>
  <section class="flex justify-center items-center h-screen">
    <div class="flex bg-gray-50 justify-start items-center px-2 py-2 border-2 rounded-xl border-green-600">
      <Card style="width: 20rem; overflow: hidden; background-color: rgb(20 83 45); ">
        <template #title>
          <div class="flex justify-center my-10">
            <span class="text-slate-50 text-4xl font-bold border-b-4 border-amber-500">Entrar</span>
          </div>
        </template>
        <template #content>
          <div class="flex flex-col justify-center gap-6">
            <InputText type="text" v-model="inputValueLogin" fluid placeholder="Entre com seu login" />
            <Password v-model="inputValuePassword" fluid :feedback="false" placeholder="Entre com sua senha"
              toggleMask />
          </div>
        </template>
        <template #footer>
          <div class="flex mt-10">
            <Button label="Login"
              class="w-full !bg-amber-500 hover:!bg-amber-400 hover:!border-white !text-black !font-bold !text-xl" />
          </div>
        </template>
      </Card>
      <div>
        <div class="flex justify-center w-[20rem]">
          <img width="240px" src="../../components/img/imgLogo.png" />
        </div>
        <div class="flex flex-col items-center w-full my-10">
          <span class="text-sm text-center">Gerenciador de ar-condicionado</span>
          <span class="text-sm text-center">Desenvolvido por:</span>
          <span class="text-sm text-center">Pedro geovani</span>
          <span class="text-sm text-center">Guilherme Holanda</span>
        </div>
      </div>
    </div>
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
