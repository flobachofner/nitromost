<script setup>

</script>

<template>
  <div class="flex flex-col md:flex-row">
    <div class="w-full md:w-1/2 h-screen bg-nitroRed flex items-center justify-center">
      <img src="/images/bottle_shadow.png" alt="Centered Image" class="w-1/3 max-w-[200px]">
    </div>

    <div class="w-full md:w-1/2 h-screen relative flex flex-col justify-between p-8">
      <div class="absolute inset-0 flex flex-col items-center justify-center">
        <img src="/images/bottle_transp.png" alt="Background Image" class="h-2/5 rotate-[33deg] transform translate-x-6 -translate-y-3 z-10">
        <img src="/images/bottle_transp.png" alt="Background Image" class="h-2/5 mt-4 rotate-[-27deg] transform -translate-x-6 z-30">
      </div>

      <div class="absolute leading-none top-4 left-4 title-style z-0">ABFAHRE</div>
      <div class="absolute leading-none top-1/2 right-4 transform -translate-y-1/2 title-style z-20">SCHEISS</div>
      <div class="absolute leading-none bottom-4 left-4 title-style z-40">GLÜEHWII</div>
    </div>
  </div>
</template>

<style scoped>

</style>