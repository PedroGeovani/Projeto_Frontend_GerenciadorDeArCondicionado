<template>
  <section class="flex flex-col items-center px-8 py-4">
    <span class=" text-2xl font-bold py-2 text-green-950"> Ambiente: {{ nameEnvironment }} </span>
    <Card style="width: auto; overflow: hidden; border: solid; border-width: 2px; border-color: #14532d;">
      <template #content>
        <div class="card">
          <div class="flex justify-between">
            <span class="flex text-xl font-bold px-4 rounded-xl"> Programação Padrão </span>
          </div>
          <div class="flex flex-row col-span-3 gap-4 items-center justify-between text-xl bg-green-50 p-2 rounded-md">
            <div>
              <span class="flex w-full justify-center font-bold">Manhã</span>
              <div class="flex flex-row w-full gap-2">
                <span @click="insertValue('7', '30', '9', '30')"
                  class="py-2 px-4 bg-green-900 hover:bg-green-700 rounded-md hover:transition hover:delay-150 hover:scale-105  items-center justify-center text-white">
                  07:30 --- 09:30
                </span>
                <span @click="insertValue('10', '0', '12', '0')"
                  class="py-2 px-4 bg-green-900 hover:bg-green-700 rounded-md hover:transition hover:delay-150 hover:scale-105 items-center justify-center text-white">
                  10:00 --- 12:00
                </span>
              </div>
            </div>
            <div>
              <span class="flex w-full justify-center font-bold">Manhã</span>
              <div class="flex flex-row w-full gap-2">
                <span @click="insertValue('13', '30', '15', '30')"
                  class="py-2 px-4 bg-green-900 hover:bg-green-700 rounded-md hover:transition hover:delay-150 hover:scale-105  items-center justify-center text-white">
                  13:30 --- 15:30
                </span>
                <span @click="insertValue('16', '0', '18', '0')"
                  class="py-2 px-4 bg-green-900 hover:bg-green-700 rounded-md hover:transition hover:delay-150 hover:scale-105 items-center justify-center text-white">
                  16:00 --- 18:00
                </span>
              </div>
            </div>
            <div>
              <span class="flex w-full justify-center font-bold">Manhã</span>
              <div class="flex flex-row w-full gap-2">
                <span @click="insertValue('18', '30', '20', '0')"
                  class="py-2 px-4 bg-green-900 hover:bg-green-700 rounded-md hover:transition hover:delay-150 hover:scale-105  items-center justify-center text-white">
                  18:30 --- 20:00
                </span>
                <span @click="insertValue('20', '30', '22', '0')"
                  class="py-2 px-4 bg-green-900 hover:bg-green-700 rounded-md hover:transition hover:delay-150 hover:scale-105 items-center justify-center text-white">
                  20:30 --- 22:00
                </span>
              </div>
            </div>
          </div>
          <span class="flex text-xl font-bold pt-4 rounded-xl">Criar nova programação </span>
          <div class="flex flex-row gap-12 ">
            <div>
              <span class="flex text-xl font-bold pt-4 rounded-xl">Data: </span>
              <div class="flex items-center">
                <DatePicker :disabled="dateDisable" class="me-2" :min-date="minDate" v-model="inputDate"
                  @date-select="checkDate()" :manualInput="false" dateFormat="dd-mm-yy" showIcon
                  iconDisplay="input" />
                <Button type="submit" icon="pi pi-check" :disabled="disableCheck" class="w-32  !bg-green-900 hover:!bg-green-700"
                  @click="clearTimes()" />
              </div>
            </div>
            <div>
              <span class="flex text-xl font-bold pt-4 rounded-xl">Intervalo: </span>
              <div class="flex col-span-5 items-center justify-center gap-6">
                <span class="flex text-xl rounded-xl">Ligar:</span>
                <DatePicker :min-date="minDate1" :disabled="!dateDisable" class="!w-28" @date-select="dateMinEnd()"
                  v-model="inputStartTime" timeOnly />
                <span class="flex text-xl rounded-xl">Desligar:</span>
                <DatePicker :min-date="minDate2" :disabled="!dateDisable" class="!w-28" v-model="inputEndTime"
                  timeOnly />
                <Button :disabled="!dateDisable" type="button" label="Inserir"
                  class="w-32 !bg-green-900 hover:!bg-green-700" @click="timeAcumulate()" />
              </div>
            </div>
          </div>
          <div class="card">
            <DataTable :value="contentTimes" fluid tableStyle="min-width: 80rem" size="small">
              <Column class="w-1/4">
                <template #body="slotprops">
                  <span> Data: {{ new Date(String(inputDate)).toLocaleDateString() }} </span>
                </template>
              </Column>
              <Column class="w-1/4">
                <template #body="slotprops">
                  <span> Ligar: {{ slotprops.data.start_time.toLocaleTimeString() }} </span>
                </template>
              </Column>
              <Column class="w-1/4">
                <template #body="slotprops">
                  <span> Desligar: {{ slotprops.data.end_time.toLocaleTimeString() }} </span>
                  <Button type="button" class="w-32 mx-3" icon="pi pi-trash"
                    @click="contentTimes.splice(slotprops.index, 1)"></Button>
                </template>
              </Column>
              <Column class="w-1/4">
                <template #body>
                </template>
              </Column>
              <Column>
                <template #footer>
                  <div class="flex flex-row gap-4 justify-end">
                    <Button v-if="contentTimes.length > 0" type="button"
                      class="w-32 me-2 !bg-green-900 hover:!bg-green-700" label="Salvar" @click="saveDates()" />
                  </div>
                </template>
              </Column>
            </DataTable>
          </div>
        </div>
      </template>
      <template #footer>
        <div class="flex p-4 justify-end">
          <Button label="Retornar" icon="pi pi-arrow-left" iconPos="left" class="w-32 !bg-green-900 hover:!bg-green-700"
            @click="$router.push('/')" />
        </div>
      </template>
    </Card>
  </section>
</template>

<script lang="ts">
import { CDates, CEnvironment, CTimes } from '@/models/model.environment';
import { EnvironmentService } from '@/service/service.environment';
import { take } from 'rxjs';

export default {
  name: 'edit',
  data() {
    return {
      disable: false,
      dateDisable: false,
      disableCheck: true,
      nameEnvironment: '',
      contentTimes: [] as CTimes[],
      contentDates: [] as CDates[],
      inputDate: null,
      inputStartTime: null,
      inputEndTime: null,
      minDate: new Date(),
      minDate1: new Date(),
      minDate2: new Date(),
    }
  },
  mounted() {
    this.getProgram()
  },
  computed: {
    service(): EnvironmentService {
      return new EnvironmentService()
    }
  },
  methods: {
    getProgram(): void {
      this.service.environment.pipe(take(1)).subscribe({
        next: (response) => {
          if (response.status === 200) {
            this.nameEnvironment = response.content.environment
            this.contentDates = response.content.dates
          } else {
            this.$toast.add({ severity: 'error', summary: 'Erro', detail: 'Ambiente não encontrado', life: 3000 });
          }
        }
      })
      this.service.getEnvironmentOne(String(this.$route.params.id))
    },
    checkDate(): void { 
      const i = new Date(String(this.inputDate))
      let index = 0
      this.contentDates.forEach((item) => {
        const f = new Date(item.date)
        if (f.getFullYear() === i.getFullYear() && f.getMonth() === i.getMonth() && f.getDate() === i.getDate()) {
          index++
        }
      })
      if ( index === 0) {
        this.disableCheck = false
        this.dateDisable = true
        this.disable = false
        this.minDate1 = new Date(String(this.inputDate))
        this.minDate2 = new Date(String(this.inputStartTime))
      } else { 
        this.disableCheck = true
        this.contentTimes = []
        this.inputStartTime = null
        this.inputEndTime = null
        this.disable = true
        this.dateDisable = false
        this.$toast.add({ severity: 'error', summary: 'Erro', detail: 'Já existe uma programação para esta data.', life: 5000 });
      }
    },

    timeAcumulate(): void {
      const i = new Date(String(this.inputStartTime))
      const f = new Date(String(this.inputEndTime))
      const T: CTimes = { start_time: i, end_time: f }
      this.inputStartTime = null
      this.inputEndTime = null
      let cont = 0;
      this.contentTimes.forEach(item => {
        if ((i < item.start_time && f > item.start_time) || (i < item.end_time && f > item.end_time) || (i > item.start_time && f < item.end_time)) {
          cont++
        }
      })
      if (cont > 0) {
        this.$toast.add({ severity: 'error', summary: 'Erro', detail: 'Horario conflitante, por favor, reedite!', life: 3000 });
      } else {
        this.contentTimes.push(T)
      }
    },

    clearTimes(): void {
      this.inputEndTime = null
      this.inputStartTime = null
      if (this.inputDate !== null) {
        this.dateDisable = !this.dateDisable
        this.contentTimes = []
      }
    },

    dateMinEnd(): void {
      this.inputEndTime = this.inputStartTime
      this.minDate2 = new Date(String(this.inputStartTime))
    },

    saveDates(): void {
      const D: CDates = {
        date: new Date(new Date(String(this.inputDate)).setHours(0,0,0)),
        times: this.contentTimes
      }
      this.contentDates.push(D) 
      const body: CEnvironment = {
        environment: this.nameEnvironment,
        dates: this.contentDates
      }
      console.log(body)
      this.updateProgram(body)
      this.clearTimes()
      this.inputDate = null
    },

    updateProgram(body: CEnvironment): void {
      this.service.environment
        .pipe(take(1))
        .subscribe({
          next: (response) => {
            if (response.status === 200) {
              this.$toast.add({ severity: 'success', summary: 'Informe', detail: 'Programação inserida com sucesso.', life: 3000 });
              this.getProgram()
            } else {
              this.$toast.add({ severity: 'error', summary: 'Informe', detail: 'Ocorreu algum erro na programação.', life: 3000 });
            }
          }
        })
      this.service.updateEnvironment(String(this.$route.params.id), body)
    },

    insertValue(h1: any, m1: any, h2: any, m2: any): void {
      if (this.inputDate !== null) {
        this.inputStartTime = new Date(new Date(String(this.inputDate)).setHours(h1, m1, 0)) as any
        this.inputEndTime = new Date(new Date(String(this.inputDate)).setHours(h2, m2, 0)) as any
        this.minDate2 = new Date(String(this.inputStartTime))
      }
    }
  }
}
</script>