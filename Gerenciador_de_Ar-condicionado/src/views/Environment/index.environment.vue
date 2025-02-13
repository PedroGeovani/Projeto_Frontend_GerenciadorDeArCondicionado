<script lang="ts">
import { EnvironmentDate } from '@/models/model.environment';
import { EnvironmentService } from '@/service/service.environment';
import { take } from 'rxjs';

export default {
  name: 'environment',
  data() {
    return {
      content: [] as EnvironmentDate[],
    }
  },
  mounted() {
    this.getList()
  },
  computed: {
    service(): EnvironmentService {
      return new EnvironmentService()
    }
  },
  methods: {
    getList(): void {
      this.service.environment
        .pipe(take(1))
        .subscribe({
          next: (response) => {
            this.content = response
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
    <div v-for="item in content">
      <Environment :environmentName="item.environment" :status="'on'" />
    </div>
    </div>
  </section>
</template>