<script lang="ts">

export default {
    name: 'environment',
    data() {
        return {
            status: 'on'
        }
    },
    props: {
        environmentName: String,
    },
}

</script>

<template>
    <section class="flex justify-center w-full">
        <Card style="width: 20rem; overflow: hidden; border: solid; border-width: 2px;"
            :style="status == 'on' ? 'border-color: #14532d' : (status == 'off' ? 'border-color: #b45309;' : '#fef3c7')">
            <template #header>
                <div v-if="status == 'on'" class="h-10 bg-green-900"> </div>
                <div v-else-if="status == 'off'" class="h-10 bg-amber-700"> </div>
                <div v-else class="h-10 bg-red-900"> </div>
            </template>
            <template #title>
                <span class="flex font-bold mb-3"> Ambiente: {{ environmentName }}</span>
                <span class="flex"> Programação </span>
            </template>
            <template #content>
                <div class="flex flex-wrap justify-between gap-4">
                    <Button type="button" class="flex p-2 w-2/5" @click="$router.push({ name: 'program', params: { name: environmentName } })"> Mostrar </Button>
                    <Button type="button" class="flex p-2 w-2/5" @click="$router.push({ name: 'edit', params: { name: environmentName } })"> Criar </Button>
                </div>
            </template>
        </Card>
    </section>
</template>
