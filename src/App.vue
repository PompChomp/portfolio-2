<script setup>
import { RouterLink, RouterView } from 'vue-router'

const cvPdfHref = `${import.meta.env.BASE_URL}Vid_Richard_Hana_CV.pdf`;

</script>

<template>
  <header>
    <nav class="grid grid-cols-12 text-primary bg-secondary min-h-15 py-4 border-b-2 border-primary">
      <div class=" col-start-2 2xl:mx-20 inline-flex gap-4">
        <RouterLink to="/" class="hover:text-tertiary duration-300 w-10">Home</RouterLink>
        <RouterLink to="/work" class="hover:text-tertiary duration-300 w-10">Work </RouterLink>
        <RouterLink to="/about" class="hover:text-tertiary duration-300 w-10">About</RouterLink>
      </div>
    </nav>
  </header>
  <RouterView />
  
<footer>
  <div class="grid grid-cols-12 min-h-50 h-full bg-secondary  py-4 border-t-2 border-primary ">
    <div class="col-start-2 col-span-10 text-primary flex flex-col md:flex-row justify-between">
      <div class="pt-10">
        <div class=" 2xl:mx-20 inline-flex gap-4">
          <p>2026 Vid Richard Hana. </p>
        </div>

        <div class="">
          <div class="flex flex-col">
            <RouterLink to="/" class="hover:text-tertiary hover:underline w-10">Home</RouterLink>
            <RouterLink to="/work" class="hover:text-tertiary hover:underline w-10">Work </RouterLink>
            <RouterLink to="/about" class="hover:text-tertiary hover:underline w-10">About</RouterLink>
          </div>
        </div>
      </div>
      <div class="pt-10">
        <div class="md:pr-0 pr-12 ">
          <div class="flex gap-4">
            <a href="https://www.linkedin.com/in/vid-hana/" target="_blank" class="hover:text-tertiary hover:underline duration-300">LinkedIn</a>
          </div>
          <div>
            <a :href="cvPdfHref" download="Vid_Richard_Hana_CV.pdf" class="text-primary hover:underline hover:text-tertiary duration-300"> Download CV </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</footer>

</template>
