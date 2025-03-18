<script setup>

</script>

<template>
  <div class="flex flex-col-reverse md:flex-row">
    <div class="w-full md:w-1/2 h-screen relative flex flex-col justify-between">
      <div class="absolute top-4 left-4 text-style">
        Fertig luschtig mit billigem <br> Wein aus Spanien!
      </div>
      <div class="absolute top-1/3 right-4 transform -translate-y-1/2 text-style text-right">
        Oder war es doch Italien? <br> Wahrscheinlich sowohlalsauch.
      </div>
      <div class="absolute top-2/3 left-4 transform -translate-y-1/2 text-style">
        Und zweihundertfünzg Gramm <br> Zucker pro Becher?
      </div>
      <div class="absolute bottom-4 right-4 text-style">
        Abfahre!
      </div>
    </div>

    <div class="w-full md:w-1/2 h-screen bg-nitroRed flex items-center justify-center relative">
      <!-- Outer Image (Counterclockwise Rotation) -->
      <img src="/images/apple.png" alt="Outer Image"
           class="w-1/3 max-w-[130px] absolute animate-rotate-clockwise">

      <!-- Inner Image (Clockwise Rotation) -->
      <img src="/images/statistic_1.svg" alt="Inner Image"
           class="w-2/3 max-w-[300px] absolute animate-rotate-counter">
    </div>
  </div>
</template>

<style scoped>

</style>