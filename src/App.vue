<template>
  <Navbar />

  <RouterView />
  <!-- Bouton retour en haut -->
<button
  v-if="showScrollTop"
  @click="scrollToTop"
  class="fixed bottom-6 right-12 z-50
         w-12 h-12
         flex items-center justify-center
         rounded-full
         bg-gradient-to-r from-cyan-400 to-violet-500
         text-white text-xl font-bold
         shadow-lg shadow-cyan-500/20
         transition-all duration-300
         hover:scale-110
         hover:shadow-[0_0_25px_rgba(34,211,238,0.4)]"
  aria-label="Retour en haut"
>
  ↑
</button>

  <Footer />
</template>

<script setup>
import { RouterView } from 'vue-router'

import Navbar from './components/layout/Navbar.vue'
import Footer from './components/layout/Footer.vue'

import { reactive, ref, onMounted, onUnmounted } from 'vue'
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

