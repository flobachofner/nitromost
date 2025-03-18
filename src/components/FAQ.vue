<script setup>
import { ref, computed } from "vue";
import bottle_transp from '/images/bottle_transp.png';

const faqs = ref([
  { question: "Wie mache ich den NITROMOST richtig heiss?", answer: "Analog zum verhassten Glühwein kannst du den Nitro einfach mit einer Pfanne oder einem Wärmer auf angenehme 60°C Trinktemperatur erhitzen.", open: false },
  { question: "In welchen Gebinden ist der NITROMOST erhältlich?", answer: "Du kriegst ihn in der 1L Flasche oder dem 10L Bag in Box. Beides in unserem Onlineshop erhältlich natürlich.", open: false },
  { question: "Mein Sohn ist erst 16ni, darf er vor dem einschlafen trotzdem einen NITROMOST trinken?", answer: "Ja liebe Margrit, unser NITROMOST basiert auf Apfelwein und ist in der Schweiz deshalb bereits ab 16 Jahren erhältlich.", open: false },
  { question: "Könnt ihr bitte bitte unsere WG-Party sponsern?", answer: "näi", open: false },
  { question: "Kann ich NITROMOST auch in rauen Mengen für einen Event oder Weihnachtsmarkt bestellen?", answer: "Gerne! Schreib uns doch einfach eine Mail: prost@randvoll.gmbh", open: false },
]);

const isMobile = computed(() => window.innerWidth < 768);
const toggleFAQ = (index) => {
  if (!isMobile.value) {
    faqs.value[index].open = !faqs.value[index].open;
  }
};
</script>

<template>
  <div class="flex flex-col-reverse md:flex-row">
    <div class="w-full md:w-1/2 min-h-screen flex flex-col p-4">
      <!-- Title -->
      <div class="flex flex-col md:flex-row items-baseline space-x-2 mb-4">
        <h2 class="leading-none md:text-[8vw] text-[20vw] text-nitroRed">FAQ</h2>
        <span class="text-nitroRed md:text-xl md:block inline">Frequently (min. 1x) Asked Questions</span>
      </div>

      <!-- FAQ Items -->
      <div class="space-y-4 p-4">
        <div
            v-for="(faq, index) in faqs"
            :key="index"
            @click="toggleFAQ(index)"
            class="text-nitroRed cursor-pointer pb-2 transition-all duration-300"
        >
          <div>{{ faq.question }}</div>
          <div class="pl-4 italic transition-opacity duration-300" :class="{ 'opacity-100': faq.open || isMobile, 'opacity-0': !faq.open && !isMobile }">
            {{ faq.answer }}
          </div>
        </div>
      </div>
    </div>

    <div class="w-full md:w-1/2 min-h-screen bg-nitroRed relative flex flex-col justify-between p-8">
      <div class="absolute inset-0 flex flex-col items-center justify-center">
        <img :src="bottle_transp" alt="Background Image" class="h-2/5 rotate-[33deg] transform translate-x-6 -translate-y-3 z-10">
        <img :src="bottle_transp" alt="Background Image" class="h-2/5 mt-4 rotate-[-27deg] transform -translate-x-20 z-30">
      </div>

      <a href="https://randvoll.gmbh/shop.html" target="_blank" rel="noopener noreferrer" class="absolute top-4 left-4 subtitle-style z-0 hover:italic hover:underline">LOOOOOS</a>
      <a href="https://randvoll.gmbh/shop.html" target="_blank" rel="noopener noreferrer" class="absolute top-1/2 right-4 transform -translate-y-1/2 subtitle-style z-20 hover:italic hover:underline">SOFORT</a>
      <a href="https://randvoll.gmbh/shop.html" target="_blank" rel="noopener noreferrer" class="absolute bottom-4 left-4 subtitle-style z-40 hover:italic hover:underline">BSTELLE</a>
    </div>
  </div>
</template>

<style scoped>
@media (max-width: 768px) {
  .subtitle-style:last-of-type {
    font-style: italic;
    text-decoration: underline;
  }
}
</style>
