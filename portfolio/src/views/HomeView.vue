<script setup>
import CardComponent from '@/components/CardComponent.vue';
import HomeHeaderComponent from '@/components/HomeHeaderComponent.vue';
import SkillComponent from '@/components/SkillComponent.vue';
</script>

<template>
  <main>
    <HomeHeaderComponent/>
    <div>
      <div class="bg-secondary min-h-125 h-full border-y-2 border-primary">
        <div class="grid grid-cols-12 w-full">
          <div class="col-start-2 col-span-10 pt-10">
            <h1 class="text-5xl font-bold text-primary">Some of My Works </h1>
          </div>
        </div>
        <div class="flex justify-center pb-20 pt-10">
          <div class="flex justify-between lg:w-4/5 md:flex-row flex-col gap-3">
            <CardComponent/>
          </div>
        </div>
      </div>

      
      <SkillComponent/>

      <div class="w-full h-full min-h-125 grid grid-cols-12">
        <div class="col-start-2 col-span-10 py-20">
          <video src="../modules/Videos/VideoCVPortfolio.mp4" controls class="w-full h-full border-3 border-primary"></video>
        </div>
      </div>

    </div>
  </main>
</template>

<style>
</style>