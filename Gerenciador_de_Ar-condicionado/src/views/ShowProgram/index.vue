<template>
  <section class="flex flex-col items-center p-8">
    <div class="flex w-[30%] justify-between">
      <span class="text-2xl font-bold py-2 text-green-950"> Ambiente: {{ nameEnvironment }} </span>
      <div class="card flex justify-center">
        <Button type="button" unstyled icon="pi pi-bars" @click="toggle" aria-haspopup="true"
          aria-controls="overlay_menu" />
        <Menu ref="menu" id="overlay_menu" :model="items" :popup="true" />
        <Dialog v-model:visible="renameEnvironment" :closable="false" modal header="Renomear de ambiante"
          :style="{ width: '25rem' }">
          <InputText v-model="newNameEnvironment" fluid type="text" placeholder="Insira o novo nome aqui." />
          <div class="flex flex-wrap gap-2 p-2 justify-between">
            <Button type="button" label="Cancelar" class="w-2/5 !bg-green-900 hover:!bg-green-800"
              @click="renameEnvironment = false"></Button>
            <Button type="button" label="Confirmar" class="w-2/5 !bg-green-900 hover:!bg-green-800"
              @click="renameConfirm()"></Button>
          </div>
        </Dialog>
      </div>
    </div>
    <div v-for="(idate, i) in dates" :id="`${i}`">
      <div class="card m-2">
        <Card style="width: 36rem; overflow: hidden; border-color: #14532d; border-width: 1px;">
          <template #title>
            <div class="w-full border-b-2 border-green-900 ">
              <div class="flex flex-row items-center justify-between m-2">
                <span class="w-fit font-bold"> Data: </span> 
                {{ new Date(idate.date).toLocaleDateString(undefined, {weekday: "long", year: "numeric", month: "long", day: "numeric"}) }}
                <div class="flex">
                  <Button id="trash1" type="button" class="!bg-green-900 hover:!bg-green-800" icon="pi pi-trash"
                    @click="excludeProgram(i, -1)"></Button>
                </div>
              </div>
            </div>
          </template>
          <template #content>
            <div v-for="(itime, j) in idate.times" :id="`${i}${j}`">
              <div class="flex flex-row items-center justify-between m-2">
                <span class="font-semibold">Intervalo: </span>
                <span>{{ new Date(itime.start_time).toLocaleTimeString() }} a {{ new
                  Date(itime.end_time).toLocaleTimeString() }} </span>
                <div class="flex gap-4">
                  <Button :id="`edit${i}${j}`" type="button" class="!bg-green-900 hover:!bg-green-800"
                    icon="pi pi-pencil" @click="modify(i, j)"></Button>
                  <Button :id="`trash${i}${j}`" type="button" class="!bg-green-900 hover:!bg-green-800"
                    icon="pi pi-trash" @click="excludeProgram(i, j)"></Button>
                </div>
              </div>
            </div>
          </template>
        </Card>
      </div>
    </div>
    <div>
      <Dialog v-model:visible="visibleDialog" :closable="false" modal header="Editar Intervalo"
        :style="{ width: '28rem' }">
        <div class="flex items-center gap-4 mb-4">
          <span class="w-1/5">Ligar</span>
          <DatePicker v-model="eStart" timeOnly @date-select="eEnd = eStart" />
        </div>
        <div class="flex items-center gap-4 mb-2">
          <span class="w-1/5">Desligar </span>
          <DatePicker v-model="eEnd" timeOnly />
        </div>
        <template #footer>
          <Button label="Cancelar" @click="visibleDialog = false" />
          <Button label="Salvar" @click="saveModify()" />
        </template>
      </Dialog>
    </div>
  </section>
</template>

<script lang="ts">
import { take } from 'rxjs';
import { CDates, CTimes, type CEnvironment } from '@/models/model.environment';
import { EnvironmentService } from '@/service/service.environment';

export default {
  name: 'program',
  data() {
    return {
      visibleDialog: false,
      nameEnvironment: '',
      newNameEnvironment: '',
      renameEnvironment: false,
      dates: [] as CDates[],
      eStart: null,
      eEnd: null,
      currentDate: '',
      iind: -1,
      jind: -1,
      items: [
        {
          label: 'Excluir ambiante',
          icon: 'pi pi-trash',
          command: () => { this.excludeEnvironment() }
        },
        {
          label: 'Renomear Ambiente',
          icon: 'pi pi-pencil',
          command: () => { this.renameEnvironmentDialog() }
        }
      ]
    }
  },
  computed: {
    service(): EnvironmentService {
      return new EnvironmentService()
    }
  },
  mounted() {
    this.getListRegister()
  },
  methods: {
    renameEnvironmentDialog() {
      this.renameEnvironment = true
    },
    toggle(event: Event) {
      const menu: any = this.$refs.menu
      menu.toggle(event)
    },

    modify(i: number, j: number) {
      this.iind = i
      this.jind = j
      this.visibleDialog = true
      this.currentDate = String(this.dates[i].date)
    },

    saveModify() {
      this.visibleDialog = false

      const start = new Date(String(this.eStart))
      const end = new Date(String(this.eEnd))

      if (end > start) {
        const timeS = new Date(this.currentDate).setHours(start.getHours(), start.getMinutes(), 0)
        const timeE = new Date(this.currentDate).setHours(end.getHours(), end.getMinutes(), 0)

        this.dates[this.iind].times[this.jind].start_time = new Date(timeS)
        this.dates[this.iind].times[this.jind].end_time = new Date(timeE)

        this.updateProgram(this.createBody(), 0)
      } else { this.dialogResponse(2) }
    },

    excludeProgram(i: number, j: number): void {
      if (j === -1) { this.dates.splice(i, 1) }
      else { this.dates[i].times.splice(j, 1) }      

      if (j === -1) { this.updateProgram(this.createBody(), 4) }
      else { this.updateProgram(this.createBody(), 5) }

      j = -1, i = -1
    },

    renameConfirm() {
      if (this.newNameEnvironment.length > 3) { this.updateProgram(this.createBody(this.newNameEnvironment), 0) } 
      else { this.dialogResponse(3) }

      this.renameEnvironment = false
    },

    dialogResponse(option: number): void {
      switch (option) {
        case 0:
          this.$toast.add({ severity: 'success', summary: 'Informe', detail: 'Atualização realizada com sucesso.', life: 3000 })
          break
        case 1:
          this.$toast.add({ severity: 'error', summary: 'Informe', detail: 'Ocorreu um erro na atialização. Por favor vetifique nomes ou horários conflitantes.', life: 3000 });
          break
        case 2:
          this.$toast.add({ severity: 'error', summary: 'Informe', detail: 'Intervalo inválido!.', life: 3000 });
          break
        case 3:
          this.$toast.add({ severity: 'error', summary: 'Informe', detail: 'Nome inválido! Digite pelo menos 3 caracteres.', life: 3000 });
          break
        case 4:
          this.$toast.add({ severity: 'success', summary: 'Informe', detail: 'Data excluida com sucesso.', life: 3000 });
          break
        case 5:
          this.$toast.add({ severity: 'success', summary: 'Informe', detail: 'Programação excluida com sucesso.', life: 3000 });
          break
        case 6:
          this.$toast.add({ severity: 'success', summary: 'Informe', detail: 'Ambiente excluido com sucesso!.', life: 3000 });
          break
        case 7:
          this.$toast.add({ severity: 'error', summary: 'Informe', detail: 'Ocorreu um erro ao excluir o registro!.', life: 3000 });
          break
        default:
      }
    },
    //requisições
    createBody(name?: string): CEnvironment {
      return {
        _id: String(this.$route.params.id),
        environment: name ?? this.nameEnvironment,
        dates: this.dates
      } as CEnvironment
    },
    getListRegister(): void {
      this.service.environment
        .pipe(take(1))
        .subscribe({
          next: (response) => {
            this.dates = response.content.dates
            this.nameEnvironment = response.content.environment
          }
        })
      this.service.getEnvironmentOne(String(this.$route.params.id))
    },
    updateProgram(body: CEnvironment, option: number): void {
      this.service.environment
        .pipe(take(1))
        .subscribe({
          next: (response) => {
            if (response.status === 200) {
              this.dialogResponse(option)
              this.getListRegister()
            } else {
              this.dialogResponse(1)
            }
          }
        })
      this.service.updateEnvironment(String(this.$route.params.id), body)
    },
    excludeEnvironment() {
      this.service.environment
        .pipe(take(1))
        .subscribe({
          next: (response) => {
            if (response.status === 200) {
              this.dialogResponse(6)
              this.$router.push('/')
            } else {
              this.dialogResponse(7)
            }
          }
        })
      this.service.excludeEnvironment(String(this.$route.params.id))
    },

  },

}

</script>