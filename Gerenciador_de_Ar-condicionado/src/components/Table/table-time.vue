<script lang="ts">
import type { registerDate } from '@/models/model.register-date';
import { DataProduts } from '../ArreyData/Arreydada';

export default {
  data() {
      return {
          products: {},
          columns: [
              { field: 'day', header: 'Dia' },
              { field: 'startTimeMorning', header: 'Inicio Manhã' },
              { field: 'endTimeMorning', header: 'Inicio Manhã' },
              { field: 'startTimeAfternoon', header: 'Inicio Tarde' },
              { field: 'endTimeAfternoon', header: 'Inicio Manhã' },
              { field: 'startTimenight', header: 'Inicio Manhã' },
              { field: 'endTimenight', header: 'Inicio Noite' }
          ]
      };
  },
  mounted() {
   
  
  },

  methods: {}
};
</script>







<template>
  <Card style="width: 40rem; overflow: hidden">
    <template #title>
      <span class="flex w-full py-2 text-xl font-bold justify-center">Grade de Horário</span>
    </template>
    <template #subtitle>      
    </template>
    <template #content>
      <div class="card">
        <DataTable :value="products" editMode="cell">
            <Column v-for="col of columns" :key="col.field" :field="col.field" :header="col.header" style="width: 25%">
                <template #body="{ data, field }">                    
                </template>
                <template #editor="{ data, field }">
                    <template v-if="field !== 'day'">
                        <InputText v-model="data[field]" autofocus fluid />
                    </template>
                    <template v-else>
                        <InputNumber v-model="data[field]" mode="currency" locale="en-US" autofocus fluid />
                    </template>
                </template>
            </Column>
        </DataTable>
    </div>











    </template>
    <template #footer>
      <div class="flex p-4 justify-between">
        <Button label="Retornar" icon="pi pi-arrow-left" severity="contrast" iconPos="left" @click="$router.push('/')" />
        <Button label="Salvar" icon="pi pi-save" severity="contrast" iconPos="right" @click="" />
      </div>
    </template>
  </Card>
</template>