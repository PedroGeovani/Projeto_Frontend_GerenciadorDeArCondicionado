<template>
  <section class="flex flex-col items-center p-8">
    <span class=" text-2xl font-bold p-4 text-green-950"> Ambiente: {{ $route.params.name }} </span>
    <Card style="width: auto; overflow: hidden; border: solid; border-width: 2px; border-color: #14532d;">
      <template #content>
        <div class="card">
          <div class="flex justify-between">
            <span class="flex text-xl font-bold px-4 rounded-xl"> Programação Padrão </span>
          </div>
          <div class="flex flex-row gap-4 items-center 2 justify-between text-xl bg-green-50 p-2 rounded-md">
            <span> Manhã: 07:30 --- 12:00 </span> |
            <span> Tarde: 13:30 --- 16:00 </span> |
            <span> Noite: 16:30 --- 22:00 </span>
            <Button :disabled="disableM || disableA || disableN" type="button" label="Inserir padrão" class="w-32" @click="programStandard()" />
          </div>
          <div class="card">
            <DataTable :value="program" tableStyle="min-width: 80rem">
              <template #header>
                <div class="flex flex-wrap items-center justify-between gap-2">
                  <span class="flex text-xl font-bold pt-4 rounded-xl">Criar nova programação </span>
                </div>
              </template>
              <Column header="Data:">
                <template #body="slotProps">
                  <div class="flex items-center">
                    <DatePicker class="!w-40" @date-select="dataSelect(true)" v-model="slotProps.data.day"
                      :minDate="minDate" :manualInput="false" fluid dateFormat="dd-mm-yy" showIcon iconDisplay="input"/>
                  </div>
                </template>
              </Column>
              <Column header="Manhã:">
                <template #body="slotProps">
                  <div class="flex flex-row gap-2 items-center">
                    <DatePicker :min-date="new Date(program[0].day.setHours(0, 0, 0))"
                      :max-date="slotProps.data.endMorning" :disabled="disableM" class="!w-20"
                      v-model="slotProps.data.startMorning" timeOnly /> a
                    <DatePicker :min-date="slotProps.data.startMorning"
                      :max-date="new Date(program[0].day.setHours(12, 0, 0))" :disabled="disableM" class="!w-20"
                      v-model="slotProps.data.endMorning" timeOnly />
                      <Button :disabled="disableM && disableA && disableN" type="button" :icon="disableM?'pi pi-check':'pi pi-times'" @click="disableM = !disableM" />
                  </div>
                </template>
              </Column>
              <Column header="Tarde:">
                <template #body="slotProps">
                  <div class="flex flex-row gap-2 items-center">
                    <DatePicker :min-date="new Date(program[0].day.setHours(12, 0, 0))"
                      :max-date="slotProps.data.endAfternoon" :disabled="disableA" class="!w-20"
                      v-model="slotProps.data.startAfternoon" timeOnly/> a
                    <DatePicker :min-date="slotProps.data.startAfternoon"
                      :max-date="new Date(program[0].day.setHours(18, 0, 0))" :disabled="disableA" class="!w-20"
                      v-model="slotProps.data.endAfternoon" timeOnly/>
                      <Button :disabled="disableM && disableA && disableN" type="button" :icon="disableA?'pi pi-check':'pi pi-times'" @click="disableA= !disableA" />
                  </div>
                </template>
              </Column>
              <Column header="Tarde:">
                <template #body="slotProps">
                  <div class="flex flex-row gap-2 items-center">
                    <DatePicker :min-date="new Date(program[0].day.setHours(18, 0, 0))"
                      :max-date="slotProps.data.endNight" :disabled="disableN" class="!w-20"
                      v-model="slotProps.data.startNight" timeOnly/> a
                    <DatePicker :min-date="slotProps.data.startNight"
                      :max-date="new Date(program[0].day.setHours(23, 59, 0))" :disabled="disableN" class="!w-20"
                      v-model="slotProps.data.endNight" timeOnly/>
                      <Button :disabled="disableM && disableA && disableN" type="button" :icon="disableN?'pi pi-check':'pi pi-times'" @click="disableN = !disableN" />
                  </div>
                </template>
              </Column>
              <Column>
                <template #body="slotProps">
                  <div class="flex flex-row gap-4 justify-end">
                    <Button :disabled="disableM && disableA && disableN" type="button" class="w-32" label="Salvar" @click="saveProgram()"></Button>
                    <Button :disabled="disableM && disableA && disableN" type="button" class="w-32" label="Limpar" @click="dataSelect(false)"></Button>
                  </div>
                </template>
              </Column>
            </DataTable>
          </div>
        </div>
      </template>
      <template #footer>
        <div class="flex p-4 justify-end">
          <Button label="Retornar" icon="pi pi-arrow-left" iconPos="left" class="w-32" @click="$router.push('/')" />
        </div>
      </template>
    </Card>
  </section> 
</template>

<script lang="ts">
import { RegisterDate } from '@/models/model.register-date';
import { RegisteService } from '@/service/service.schedule';
import { take } from 'rxjs';

export default {
  name: 'edit',
  data() {
    return {
      disableM: true,
      disableA: true,
      disableN: true,
      minDate: new Date(),
      programSave: {} as RegisterDate,
      programDatabase: {} as RegisterDate,
      program: [{
        day: new Date(),
        startMorning: new Date(),
        endMorning: new Date(),
        startAfternoon: new Date(),
        endAfternoon: new Date(),
        startNight: new Date(),
        endNight: new Date(),
      }]
    }
  },
  computed: {
    service(): RegisteService {
      return new RegisteService()
    }
  },
  methods: {  
    dataSelect(op: boolean): void {
      this.program[0].day = new Date(this.program[0].day.setHours(0, 0, 0))
      this.program[0].startMorning = this.program[0].day
      this.program[0].endMorning = this.program[0].day
      this.program[0].startAfternoon = this.program[0].day
      this.program[0].endAfternoon = this.program[0].day
      this.program[0].startNight = this.program[0].day
      this.program[0].endNight = this.program[0].day
      if( op ){
        this.disableM = false
        this.disableA = false
        this.disableN = false
      } else {
        this.program[0].day = new Date(new Date().setHours(0, 0, 0))   
        this.disableM = true
        this.disableA = true
        this.disableN = true
      }
    },
    programStandard(): void {
      this.program[0].startMorning = new Date(this.program[0].day.setHours(7, 30))
      this.program[0].endMorning = new Date(this.program[0].day.setHours(12, 0))
      this.program[0].startAfternoon = new Date(this.program[0].day.setHours(13, 30, 0))
      this.program[0].endAfternoon = new Date(this.program[0].day.setHours(18, 0, 0))
      this.program[0].startNight = new Date(this.program[0].day.setHours(18, 30, 0))
      this.program[0].endNight = new Date(this.program[0].day.setHours(22, 0, 0))
    },
    saveProgram(): void {
      if(!this.disableM){
        this.programSave.startTimeMorning = String(this.program[0].startMorning)
        this.programSave.endTimeMorning = String(this.program[0].endMorning)
      }
      if(!this.disableM){
        this.programSave.startTimeAfternoon = String(this.program[0].startAfternoon)
        this.programSave.endTimeAfternoon = String(this.program[0].endAfternoon)
      }
      if(!this.disableM){
        this.programSave.startTimeNight = String(this.program[0].startNight)
        this.programSave.endTimeNight = String(this.program[0].endNight)        
      }
      if(!this.disableM || !this.disableA || !this.disableN){
        this.programSave.environment = String(this.$route.params.name) 
        this.programSave.date = String(new Date(this.program[0].day.setHours(0,0,0)))    
        this.criateSchedule()
      }
    }, 
    criateSchedule(): void {
      this.service.manager.pipe(take(1)).subscribe({
        next: (response) => {
          console.log()
          if(response === 'Sucess') {
            this.$toast.add({ severity: 'success', summary: 'Informe', detail: response, life: 3000 });
            this.dataSelect(false)
          } else {
            this.$toast.add({ severity: 'error', summary: 'Erro', detail: response, life: 3000 });
          }
        }
      })
      this.service.crateMeneger(this.programSave)
    },
    consult(): void {
      const dat = this.program[0].day.getFullYear()+'-'+("00"+(this.program[0].day.getMonth()+1)).slice(-2)+'-'+("00"+this.program[0].day.getDate()).slice(-2)+'T00:00:00'
      this.service.manager.pipe(take(1)).subscribe({
        next: (response) => {
          this.programDatabase = response
        }
      })
      this.service.getMenegerByEnvironmentAndDate(String(this.$route.params.name),dat)
    }
    
  }
}
</script>