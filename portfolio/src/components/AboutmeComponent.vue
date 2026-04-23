<template>
    <div class="bg-tertiary  h-full border-b-2 border-primary">
      <div class="grid grid-cols-12 w-full">
        <div class="col-start-2 col-span-10 pt-10">
          <h1 class="text-5xl font-bold text-secondary">About Me </h1>
        </div>
      </div>
      <div class="flex justify-center pb-20 pt-10">
        <div class="flex justify-between w-4/5 flex-col gap-4">
          <p class="text-secondary text-lg font-normal">Hello! My name is Vid Richard Hana. I am an international student from Hungary now studying at Syddansk Erhvervsakademi as a multimedia designer.
            I have a passion for creative work and I am always eager to learn new skills and explore new ideas. I am a creative problem solver and enjoy working on projects that challenge me.
            In my free time, I enjoy playing video games, watching movies.
          </p>
          <div class="flex justify-start flex-col sm:flex-row text-center gap-4 w-full">
            <a :href="cvPdfHref" download="Vid_Richard_Hana_CV.pdf" class="text-primary border-2 border-primary p-2 bg-secondary rounded-md hover:bg-primary hover:text-secondary transition-colors duration-300"> Download CV </a>
            <a href="https://www.linkedin.com/in/vid-hana/" target="_blank" class="text-primary border-2 border-primary p-2 bg-secondary rounded-md hover:bg-primary hover:text-secondary transition-colors duration-300">LinkedIn</a>
          </div>
        </div>
      </div>
    </div>
</template>


<script setup>
const cvPdfHref = `${import.meta.env.BASE_URL}Vid_Richard_Hana_CV.pdf`;
</script>



<style scoped>

</style>