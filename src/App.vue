<template>

  <Navbar />

  <RouterView />

  <!-- Bouton retour en haut -->
  <button
  v-if="showScrollTop"
  @click="scrollToTop"
  class="fixed bottom-6 right-12 z-50
         flex h-12 w-12 items-center justify-center
         rounded-full
         bg-gradient-to-r from-cyan-400 to-blue-500
         text-white
         shadow-lg shadow-cyan-500/20
         transition-all duration-300
         hover:scale-110
         hover:shadow-[0_0_25px_rgba(34,211,238,0.4)]"
  aria-label="Retour en haut"
>
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="3"
    stroke-linecap="round"
    stroke-linejoin="round"
    class="h-6 w-6"
  >
    <path d="M12 19V5" />
    <path d="M6 11l6-6 6 6" />
  </svg>
</button>

  <Footer />

</template>


<script setup>

import { RouterView } from 'vue-router'

import Navbar from './components/layout/Navbar.vue'
import Footer from './components/layout/Footer.vue'

import { ref, onMounted, onUnmounted } from 'vue'


// ================================================
// SCROLL TOP BUTTON
// ================================================

const showScrollTop = ref(false)


const handleScroll = () => {

  showScrollTop.value = window.scrollY > 400

}


const scrollToTop = () => {

  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })

}


onMounted(() => {

  window.addEventListener('scroll', handleScroll)

})


onUnmounted(() => {

  window.removeEventListener('scroll', handleScroll)

})

</script>