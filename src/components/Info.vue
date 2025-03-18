<script setup>

</script>

<template>
  <div class="flex flex-col md:flex-row">
    <div class="w-full md:w-1/2 h-screen bg-nitroRed flex items-center justify-center relative">
      <!-- Outer Image (Counterclockwise Rotation) -->
      <img src="/images/apple.png" alt="Outer Image"
           class="w-1/3 max-w-[130px] absolute animate-rotate-clockwise">

      <!-- Inner Image (Clockwise Rotation) -->
      <img src="/images/statistic_2.svg" alt="Inner Image"
           class="w-1/2 max-w-[300px] absolute animate-rotate-counter">
    </div>

    <div class="w-full md:w-1/2 h-screen relative flex flex-col justify-between">
      <div class="absolute top-4 left-4 text-style">NITROMOST® heisst Apfelwein, <br>Süssmost, Orange und Gewürze:</div>
      <div class="absolute top-1/3 right-4 transform -translate-y-1/2 text-style text-right">Eine hochwertige Alternative <br> zum omnipräsenten Glühwein!</div>
      <div class="absolute top-2/3 left-4 transform -translate-y-1/2 text-style">Ausgedacht in Zürich und lokal <br> produziert im schönen Unterland.</div>
      <div class="absolute bottom-4 right-4 text-style">Von glücklichen Schweizer Äpfeln.</div>
    </div>
  </div>
</template>



<style scoped>

</style>