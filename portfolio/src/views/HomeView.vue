<script setup>
import CardComponent from '@/components/CardComponent.vue';
import HomeHeaderComponent from '@/components/HomeHeaderComponent.vue';
</script>

<template>
  <main>
    <HomeHeaderComponent/>
    <div>
      <div class="bg-primary min-h-125 h-full border-y-2 border-primary">
        <div class="grid grid-cols-12 w-full">
          <div class="col-start-2 col-span-10 pt-10">
            <h1 class="text-5xl font-bold text-secondary">Some of My Works </h1>
          </div>
        </div>
        <div class="flex justify-center pb-20 pt-10">
          <div class="flex justify-between lg:w-4/5 md:flex-row w-full flex-col gap-4">
            <CardComponent/>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style>
</style>