<script lang="ts">
import type { CEnvironment } from '@/models/model.environment';
import { EnvironmentService } from '@/service/service.environment';
import { take } from 'rxjs';

export default {
  name: 'ShowEnvironment',
  data() {
    return {
      content: [] as CEnvironment[],
    }
  },
  mounted() {
    this.getListEnvironment()
  },
  computed: {
    service(): EnvironmentService {
      return new EnvironmentService()
    }
  },
  methods: {
    getListEnvironment(): void {
      this.service.environment
        .pipe(take(1))
        .subscribe({
          next: (response) => {
            this.content = response.content
          }
        })
      this.service.getListEnvironment()
    }
  }
}
</script>
<template>
  <section class="w-full mt-2">
    <div class="flex flex-wrap justify-center gap-3 p-4 items-start">
      <Card style="width: 20rem; overflow: hidden; border: solid; border-width: 2px; border-color: #14532d;">
        <template #header>
          <div class="flex justify-center items-center w-80 h-10 bg-green-950 font-bold overflow-x-auto text-green-50 text-xl"> </div>
        </template>
        <template #title>
          <div class="flex flex-col items-center justify-center">
            <span class="flex font-bold mb-1">Novo Ambiente</span>
            <Button type="button" class="flex !bg-green-900" icon="pi pi-plus"
              @click="$router.push('/CreateEnvironment')" />
          </div>
        </template>
      </Card>
      <div v-for="item in content">
        <CardEnvironment :environmentName="item.environment" :_id="item._id" />
      </div>
    </div>
  </section>
</template>