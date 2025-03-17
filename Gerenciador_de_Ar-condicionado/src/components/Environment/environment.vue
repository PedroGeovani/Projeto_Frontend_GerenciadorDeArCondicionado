<script lang="ts">
export default {
    name: 'environment',
    data () {
        return {
            visible: false,
        }
    },
    props: {
        environmentName: String,
        status: String
    }
}

</script>

<template>
    <Card style="width: 20rem; overflow: hidden; background-color: rgb(203 213 225); border: solid; border-width: 1px;">        
        <template #title>Ambiente: {{ environmentName }}</template>
        <template #subtitle> 
            <div class="flex justify-between px-2">Status:
                <div v-if="status=='on'" class="flex bg-green-600 p-1 rounded-lg justify-center w-2/5 text-white">Ligado</div>
                <div v-else-if="status=='off'" class="flex bg-red-500 p-1 rounded-lg justify-center w-2/5 text-white">Desligado</div>
                <div v-else class="flex bg-amber-400  p-1 rounded-lg justify-center w-2/5 text-white">Não especificado</div>
            </div> 
        </template>
        <template #content>
            <div class="flex flex-wrap justify-between border-t-2 p-2 gap-4">
                <Button type="button" class="flex p-2 w-2/5" @click="" > Programação </Button>
                <Button type="button" class="flex p-2 w-2/5" @click="visible = true"> Histórico </Button>
            </div>
            <Dialog v-model:visible="visible" maximizable modal header="Header" :style="{ width: '50rem' }" :breakpoints="{ '1199px': '75vw', '575px': '90vw' }">
            <p class="m-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
    </Dialog>
        </template>        
    </Card>
      
    

</template>