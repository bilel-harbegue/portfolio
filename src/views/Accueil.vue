<template>
  <main class="">
    <Hero />
    <Presentation />
    <Competences />
    <CTA />
  </main>
</template>

<script setup>
import { useSEO } from '../composables/useSEO'

import Hero from '../components/home/Hero.vue'
import Presentation from '../components/home/Présentation.vue'
import Competences from '../components/home/Compétences.vue'
import CTA from '../components/home/CTA.vue'

useSEO({
  title: 'Bilel Harbegue | Développeur Web Full Stack',
  description:
    'Portfolio de Bilel Harbegue, développeur web Full Stack spécialisé en Vue.js et création d’interfaces web modernes, responsives et intuitives.',
  canonical: 'https://bilel-harbegue.vercel.app/'
})
</script>