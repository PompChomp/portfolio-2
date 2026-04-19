<template> 
    <div class="lg:w-1/5 md:1/5 font-[Open_Sans] text-secondary shadow-xl  bg-tertiary rounded-sm h-full"  v-for="work in works" :key="work.id">
        <div>
            <img class="rounded-sm w-full h-1/2" :src="work.imageURL" alt="">
            <div class="p-5 min-h-20 h-1/2 flex flex-col justify-between">
                <h3 class="font-bold text-base pb-1 lg:min-h-15 md:min-h-20 h-full py-2">{{ work.name }}</h3>
                <p class="text-sm font-normal pt-0 pb-20  lg:h-15 md:h-15 h-full ">{{ work.shortdescription }}</p>
                <p class="text-xs font-light pt-0 pb-1  h-full">{{ work.time }}</p>
                <RouterLink to="/work" class="font-inter  font-bold text-xs bg-secondary text-primary w-21 h-7 border-tetriary rounded-sm shadow-xl p-1.5 px-3">See details</RouterLink>
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