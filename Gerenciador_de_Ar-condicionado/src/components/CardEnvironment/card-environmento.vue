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
        _id: String
    },
}

</script>

<template>
    <section class="flex justify-center w-full">
        <Card style="width: 20rem; overflow: hidden; border: solid; border-width: 2px; border-color: #14532d;">
            <template #header>
                <div class="flex justify-center items-center w-80 h-10 bg-green-950 font-bold mb-1 overflow-x-auto text-green-50 text-xl"> {{ environmentName }} </div>
            </template>
            <template #title>               
                    <span class="flex font-bold mb-1 overflow-x-auto">Programação </span>           
            </template>
            <template #content>
                <div class="flex flex-row justify-between gap-4">
                    <Button type="button" class="flex p-2 !bg-green-900" fluid @click="$router.push({ name: 'showProgram', params: { id: _id } })"> Mostrar </Button>
                    <Button type="button" class="flex p-2 !bg-green-900" fluid @click="$router.push({ name: 'createProgram', params: { id: _id } })"> Criar</Button>
                </div>
            </template>
        </Card>
    </section>
</template>
