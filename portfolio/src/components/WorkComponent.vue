<template> 
    <div v-for="work in works" :key="work.id">
        <div class="min-h-100 h-full w-full">
            <div class="grid grid-cols-12 w-full">
                <div class="col-start-2 col-span-10 flex flex-justify-between gap-10 border-y-2 border-primary">
                    <div class="py-20 text-primary w-1/2">                    
                        <h1 class="text-5xl font-bold ">{{ work.name }} - {{ work.type }}</h1>
                        <h1 class="text-lg ">{{ work.time }}</h1>
                        <h1 class="text-xl ">{{ work.longdescription }}</h1>
                    </div>
                    <div class="w-1/2">
                        <img class="w-full" :src="work.imageURL" alt="" preview />
                    </div>
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