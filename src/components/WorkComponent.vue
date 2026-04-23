<template> 
    <div v-for="work in works" :key="work.id" class="bg-tertiary">
        <div class="w-full h-full">
            <div class="xl:grid xl:grid-cols-12 w-full ">
                <div class="xl:col-start-2 xl:col-span-10 gap-10 border-b-2 border-primary flex flex-col lg:flex-row">
                    <div class=" text-secondary xl:w-1/2 flex flex-col justify-center px-4 w-full pt-2">                    
                        <h1 class="text-4xl font-bold ">{{ work.name }} - {{ work.type }}</h1>
                        <h1 class="text-lg ">{{ work.time }}</h1>
                        <a :href="work.link" target="_blank" class="text-lg underline hover:text-primary duration-300">View Project</a>
                        <h1 class="text-xl ">{{ work.longdescription }}</h1>
                    </div>
                    <div class="xl:w-1/2 w-full">
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