<template> 
    <div class="lg:grid lg:grid-cols-12 text-primary h-full lg:min-h-150 pb-15 flex flex-col ">
        <div class="col-span-6 col-start-2 lg:px-10 md:px-35 md:py-20 sm:px-20 sm:py-15 px-10 py-10">
            <h1 class="text-5xl font-bold">
                Welcome to my portfolio!<br><br>My Name is Vid Richard Hana
            </h1>
            <h1 class="sm:text-4xl text-2xl ">
                <br><br>This is my porfolio website where I share my projects,experiences and skills. Feel free to explore and learn more about me and my work.
            </h1>
        </div>
        <div class="col-start-10 place-self-center ">
            <div class="rounded-full outline-15 outline-primary  place-self-center ">
                <img :src="mugshot" alt="" class=" lg:min-w-100 md:max-w-100 max-w-70 rounded-full outline-35 outline-secondary"   >
            </div>
        </div>
    </div>
</template>


<script setup>
import mugshot from '../modules/pictures/mugshot.png';
import { RouterLink, RouterView } from 'vue-router'

</script>



<style scoped>

</style>