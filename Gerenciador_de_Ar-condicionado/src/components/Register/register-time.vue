<script lang="ts">
import { RegisterDate } from '@/models/model.register-date';

export default {
  name: 'register-Time',
  data() {
    return {
      environmentName: '',
      deviceNumber: 0,
      date: null,
      startTimeMorning: null,
      endTimeMorning: null,
      startTimeAfternoon: null,
      endTimeAfternoon: null,
      startTimeNight: null,
      endTimeNight: null,
      fieldEnableMorning: false,
      fieldEnableAfternoon: false,
      fieldEnableNight: false,
    }
  },
  methods: {
    clearProgram(): void {
      this.date = null
      this.startTimeMorning = null
      this.endTimeMorning = null
      this.startTimeAfternoon = null
      this.endTimeAfternoon = null
      this.startTimeNight = null
      this.endTimeNight = null
    },
    initTime(): void {
      this.startTimeMorning = this.date
      this.endTimeMorning = this.date
      this.startTimeAfternoon = this.date
      this.endTimeAfternoon = this.date
      this.startTimeNight = this.date
      this.endTimeNight = this.date
    },
    compareTime(): boolean{
      if(this.startTimeMorning != null && this.endTimeMorning != null && this.fieldEnableMorning){
        if(new Date(this.startTimeMorning) > new Date(this.endTimeMorning)) {
          this.$toast.add({ severity: 'error', summary: 'Error Message', detail: 'Manhã: Campo inválido!', life: 3000 });
          return false
        }
      }
      if(this.endTimeMorning != null && this.startTimeAfternoon != null && this.fieldEnableMorning && this.fieldEnableAfternoon){
        if(new Date(this.endTimeMorning) > new Date(this.startTimeAfternoon)) {
          this.$toast.add({ severity: 'error', summary: 'Error Message', detail: 'Manhã/Tarde: Campo inválido!', life: 3000 });
          return false
        }
      }
      if(this.startTimeAfternoon != null && this.endTimeAfternoon != null && this.fieldEnableAfternoon){
        if(new Date(this.startTimeAfternoon) > new Date(this.endTimeAfternoon)) {
          this.$toast.add({ severity: 'error', summary: 'Error Message', detail: 'Tarde: Campo inválido!', life: 3000 });
          return false
        }
      }
      if(this.endTimeAfternoon != null && this.startTimeNight != null && this.fieldEnableAfternoon && this.fieldEnableNight){
        if(new Date(this.endTimeAfternoon) > new Date(this.startTimeNight)) {
          this.$toast.add({ severity: 'error', summary: 'Error Message', detail: 'Tarde/noite: Campo inválido!', life: 3000 });
          return false
        }
      }
      if(this.startTimeNight != null && this.endTimeNight != null && this.fieldEnableNight){
        if(new Date(this.startTimeNight) > new Date(this.endTimeNight)) {
          this.$toast.add({ severity: 'error', summary: 'Error Message', detail: 'Noite: Campo inválido!', life: 3000 });
          return false
        }
      }
      return true
    },
    generateGrade() {
      if(this.compareTime() && this.date != null) {
        let newDate:registerDate = {} 
        newDate.day = String(this.date) 
        if(this.fieldEnableMorning) {
          newDate.startTimeMorning = String(this.startTimeMorning)
          newDate.endTimeMorning = String(this.endTimeMorning)
        }
        if(this.fieldEnableAfternoon) {
          newDate.startTimeAfternoon = String(this.startTimeAfternoon)
          newDate.endTimeAfternoon = String(this.endTimeAfternoon)
        }
        if(this.fieldEnableNight) {
          newDate.startTimeNight = String(this.startTimeNight)
          newDate.endTimeNight = String(this.endTimeNight)
        } 
          this.$toast.add({ severity: 'success', summary: 'Sucesso', detail: 'Programação criada com sucesso', life: 3000 });
          this.$emit('dates',{newDate})
      } 
    }
  }
}


</script>

<template>
  <Card style="width: 40rem; overflow: hidden">
    <template #title>
      <span class="flex w-full py-2 text-xl font-bold justify-center">Programar Horário</span>
    </template>
    <template #subtitle>
      <div class="flex justify-start flex-row gap-3 py-2 w-full">       
        <DatePicker v-model="date" showIcon fluid :showOnFocus="false" inputId="buttondisplay" class="flex w-full"
          @date-select="initTime" placeholder="Escolha uma data" />
        <Button type="button" icon="pi pi-trash" iconPos="right" class="px-4" severity="contrast"
          @click="clearProgram" />
      </div>
    </template>
    <template #content>
      <div class="flex flex-col h-fit">
        <div
          class="flex-col w-full border-2 p-4 border-surface-200 rounded-xl bg-surface-50 flex-auto flex justify-center items-start font-medium">
          <div class="flex justify-center items-center flex-row gap-3 py-2">
            <span class="flex py-2 font-bold w-20">Manhã:</span>
            <DatePicker :disabled="!fieldEnableMorning || (date == null)" id="datepicker-timeonly" v-model="startTimeMorning" timeOnly
              placeholder="Ligar às..." />
            <DatePicker :disabled="!fieldEnableMorning || (date == null)" id="datepicker-timeonly" v-model="endTimeMorning" timeOnly
              placeholder="Desligar às..." />
            <Button type="button" icon="pi pi-eraser" iconPos="right" class="px-4" severity="contrast"
              @click="startTimeMorning = null, endTimeMorning = null" />
            <Checkbox v-model="fieldEnableMorning" binary />
          </div>
          <div class="flex justify-center flex-row gap-3 py-2">
            <span class="flex py-2 font-bold w-20">Tarde:</span>
            <DatePicker :disabled="!fieldEnableAfternoon || (date == null)" id="datepicker-timeonly" v-model="startTimeAfternoon" timeOnly
              placeholder="Ligar às..." />
            <DatePicker :disabled="!fieldEnableAfternoon || (date == null)" id="datepicker-timeonly" v-model="endTimeAfternoon" timeOnly
              placeholder="Desligar às..." />
            <Button type="button" icon="pi pi-eraser" iconPos="right" class="px-4" severity="contrast"
              @click="startTimeAfternoon = null, endTimeAfternoon = null" />
            <Checkbox v-model="fieldEnableAfternoon" binary />
          </div>
          <div class="flex justify-center flex-row gap-3 py-2">
            <span class="flex py-2 font-bold w-20">Noite:</span>
            <DatePicker :disabled="!fieldEnableNight || (date == null)" id="datepicker-timeonly" v-model="startTimeNight" timeOnly
              placeholder="Ligar às..." />
            <DatePicker :disabled="!fieldEnableNight || (date == null)" id="datepicker-timeonly" v-model="endTimeNight" timeOnly
              placeholder="Desligar às..." />
            <Button type="button" icon="pi pi-eraser" iconPos="right" class="px-4" severity="contrast"
              @click="startTimeNight = null, endTimeNight = null" />
            <Checkbox v-model="fieldEnableNight" binary />
          </div>
        </div>
      </div>
    </template>
    <template #footer>
      <div class="flex p-4 justify-between">
        <Button label="Retornar" icon="pi pi-arrow-left" severity="contrast" iconPos="left" @click="$router.push('/')"" />
        <Button label="Salvar" icon="pi pi-save" severity="contrast" iconPos="right" @click="generateGrade" />
      </div>
    </template>
  </Card>
</template>