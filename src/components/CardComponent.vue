<template>
    <div class="lg:w-1/5 md:1/5 font-[Open_Sans] text-secondary shadow-2xl  bg-tertiary rounded-sm h-full border-2 border-secondary"  v-for="work in works" :key="work.id">
        <div class="h-full w-full flex flex-col justify-between">
            <div class="h-1/2">
            <img class="rounded-sm w-full h-full" :src="work.imageURL" alt="">
            </div>
            <div class="p-5 min-h-25 h-full  flex flex-col justify-between xl:w-51 lg:w-45 w-full">
                <h3 class="font-extrabold text-base pb-1 lg:min-h-20 md:min-h-20 md:pb-10 py-2 w-full">{{ work.name }}</h3>
                <p class="text-sm font-normal pt-0 pb-10 md:pb-17 md:min-h-15 md:w-full ">{{ work.shortdescription }}</p>
                <p class="text-xs font-light pt-0 pb-1 ">{{ work.time }}</p>
                <div>
                  <RouterLink to="/work" class="font-inter  font-bold text-xs bg-secondary  text-primary w-full border-tetriary rounded-sm shadow-xl p-1.5 px-3 hover:bg-primary hover:text-secondary transition-colors duration-300 h-full">See details</RouterLink>
                </div>
            </div>
        </div>
    </div>
</template>


<script setup>
import { useWorks } from '../modules/useWorks';
const { works } = useWorks();
</script>



<style scoped>

</style>
