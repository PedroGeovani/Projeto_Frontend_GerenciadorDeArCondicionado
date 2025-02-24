<script lang="ts">
import type { CEnvironment } from '@/models/model.environment';
import { EnvironmentService } from '@/service/service.environment'
import { take } from 'rxjs';

export default {
  name: 'register',
  data() {
    return {
      visible: false,
      newEnvironment: {} as CEnvironment,
    }
  },
  computed: {
    service(): EnvironmentService {
      return new EnvironmentService()
    }
  },
  methods: {
    createEnvironment() {
      this.service.environment.pipe(take(1)).subscribe({
        next: (response) => {
          if (response.status === 200) {
            this.newEnvironment._id = response.content._id
            this.$toast.add({ severity: 'success', summary: 'Informe', detail: "Ambiente criado com sucesso", life: 3000 });
            this.visible = true
          } else {
            this.$toast.add({ severity: 'error', summary: 'Erro', detail: 'Ambiente já existe', life: 3000 });
          }
        }
      })
      this.service.crateEnvironment(this.newEnvironment)
    }
  }
}
</script>
<template>
  <section class="grid grid-cols-2 w-full p-20 justify-center">
    <div class="flex justify-center w-full">
      <Card style="width: 25rem; overflow: hidden; border: solid; border-width: 1px; border-color: #052e16;">
        <template #header>
          <div class="h-12 bg-green-950"> </div>
        </template>
        <template #title>
          <span class="flex font-bold mb-4"> Cadastrar novo ambiente </span>
        </template>
        <template #content>
          <InputText type="text" v-model="newEnvironment.environment" fluid placeholder="Entre com o nome ambiente" />
        </template>
        <template #footer>
          <div class="flex gap-4 mt-6">
            <Button label="Cancel" severity="secondary" outlined class="w-full" @click="$router.push('/')" />
            <Button label="Save" class="w-full" @click="createEnvironment()" />
          </div>
        </template>
      </Card>
    </div>
    <div class="flex justify-center w-full">
      <img width="400" src="../../components/img/imgLogo.png" />
    </div>
  </section>
  <section>
    <div class="card flex justify-center">
      <Dialog v-model:visible="visible" :closable="false" header="Deseja criar uma programação padrão agora?"
        :style="{ width: '25rem' }">
        <div class="flex justify-end gap-2">
          <Button type="button" label="Não" severity="secondary" @click="visible = false, $router.push('/')" />
          <Button type="button" label="Sim"
            @click="visible = false, $router.push({name: 'createProgram', params: {id: newEnvironment._id}})" />
        </div>
      </Dialog>
    </div>
  </section>
</template>