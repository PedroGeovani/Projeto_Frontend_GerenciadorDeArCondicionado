<template>
  <div class="flex flex-col items-center p-8">
    <span class=" text-2xl font-bold p-4 text-green-950"> Ambiente: {{ nameEnvironment }} </span>
    <Card style="width: auto; overflow: hidden; border: solid; border-width: 2px; border-color: #14532d;">
            <template #content>
              <div class="card">
      <DataTable :value="content" tableStyle="min-width: 60rem">
        <template #header>
          <div class="flex flex-wrap items-center justify-between gap-2">
            <span class="text-xl font-bold">Programação</span>           
          </div>
        </template>
        <Column header="Data:">
          <template #body="slotProps">
            <span>{{ new Date(slotProps.data.startTimeMorning).toLocaleDateString() }}</span>
          </template>
        </Column>
        <Column header="Manhã:">
          <template #body="slotProps">
            <span>{{ new Date(slotProps.data.startTimeMorning).toLocaleTimeString() }} a </span>
            <span>{{ new Date(slotProps.data.endTimeMorning).toLocaleTimeString() }}</span>
          </template>
        </Column>
        <Column header="Tarde:">
          <template #body="slotProps">
            <span>{{ new Date(slotProps.data.startTimeAfternoon).toLocaleTimeString() }} a </span>
            <span>{{ new Date(slotProps.data.endTimeAfternoon).toLocaleTimeString() }}</span>
          </template>
        </Column>
        <Column header="Tarde:">
          <template #body="slotProps">
            <span>{{ new Date(slotProps.data.startTimeNight).toLocaleTimeString() }} a </span>
            <span>{{ new Date(slotProps.data.endTimeNight).toLocaleTimeString() }}</span>
          </template>
        </Column>
      </DataTable>
    </div>
            </template>
            <template #footer >
              <div class="flex p-4 justify-between">
      <Button label="Retornar" icon="pi pi-arrow-left" severity="contrast" iconPos="left" @click="$router.push('/')" />
      <Button label="Salvar" icon="pi pi-save" severity="contrast" iconPos="right" @click="" />
    </div>
            </template>
    </Card>



   

    

   
  </div>

</template>

<script lang="ts">
import { MenegerService } from './service.program';
import { take } from 'rxjs';
import type { RegisterDate } from '@/models/model.register-date';

export default {
  name: 'program',
  data() {
    return {
      nameEnvironment: this.$route.params.name,
      registe: {} as RegisterDate,
      content: [] as RegisterDate[],
    }
  },
  computed: {
    service(): MenegerService {
      return new MenegerService()
    }
  },
  mounted() {
    this.getListRegister()
  },
  methods: {
    getListRegister(): void {
      this.service.manager
        .pipe(take(1))
        .subscribe({
          next: (response) => {
            this.content = response       
          }
        })
      this.service.getMenegerByEnvironment(String(this.$route.params.name))
    },
    newProgram(): void {
      this.service.manager
        .pipe(take(1))
        .subscribe({
          next: (response) => {
            this.registe = response
          }
        })
    }
  }
}

</script>