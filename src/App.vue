<template>
  <pageHeader />
  <main class="h-[300vh]">
    
    <FAQ />
  </main>


   <pageFooter /> 
</template>

<script setup>
import pageFooter from "./layouts/pageFooter.vue"
import pageHeader from "./layouts/pageHeader.vue"
import FAQ from "./components/FAQ.vue";
</script>

<style scoped></style>
