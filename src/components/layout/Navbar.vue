<template>
  <header
    :class="[
      'fixed top-0 left-0 w-full z-50 transition-all duration-500',
      scrolled
        ? 'bg-[#050816]/80 backdrop-blur-xl border-b border-cyan-500/10 shadow-lg shadow-cyan-500/10'
        : 'bg-transparent'
    ]"
  >
    <div
      class="max-w-7xl mx-auto h-20 px-6 flex items-center justify-between"
    >

      <!-- ================= Logo ================= -->

      <RouterLink
        to="/"
        class="flex items-center gap-3"
      >
        <span
          class="w-3 h-3 rounded-full bg-cyan-400 animate-pulse"
        ></span>
        
        <span
          class="text-3xl font-bold text-white tracking-wide"
        >
          Bilel.
        </span>
      </RouterLink>

      <!-- ================= Desktop Menu ================= -->

      <nav
        class="hidden lg:flex items-center gap-10"
      >

        <RouterLink
          v-for="lien in liens"
          :key="lien.route"
          :to="lien.route"
          :class="[
            'relative transition-all duration-300 hover:scale-110',

            route.path === lien.route
              ? 'text-cyan-400 scale-110'
              : 'text-gray-300 hover:text-cyan-400'
          ]"
        >
          {{ lien.nom }}

          <span
            v-if="route.path === lien.route"
            class="absolute left-0 -bottom-2 h-[2px] w-full rounded-full bg-cyan-400"
          ></span>

        </RouterLink>

      </nav>

      <!-- ================= Desktop Button ================= -->

      <RouterLink
        to="/contact"
        class="hidden lg:flex items-center justify-center px-6 py-3 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_#22d3ee]"
      >
        Me contacter
      </RouterLink>

      <!-- ================= Mobile Button ================= -->

      <button
        @click="menuOuvert = !menuOuvert"
        class="lg:hidden text-white text-3xl transition duration-300"
      >
        {{ menuOuvert ? '✕' : '☰' }}
      </button>

    </div>
  </header>

  <!-- ================= Overlay ================= -->

  <Transition name="overlay">

    <div
      v-if="menuOuvert"
      @click="menuOuvert = false"
      class="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
    ></div>

  </Transition>

  <!-- ================= Sidebar ================= -->

  <Transition name="sidebar">

    <aside
      v-if="menuOuvert"
      class="fixed top-0 right-0 w-80 h-screen bg-[#08101f] backdrop-blur-xl border-l border-cyan-500/20 z-50 lg:hidden"
    >

      <!-- Header -->

      <div
        class="flex items-center justify-between p-6 border-b border-cyan-500/10"
      >

        <h2
          class="text-white text-xl font-bold"
        >
          Menu
        </h2>

        <button
          @click="menuOuvert = false"
          class="text-white text-3xl"
        >
          ✕
        </button>

      </div>

      <!-- Navigation -->

      <nav
        class="flex flex-col mt-8"
      >

        <RouterLink
          v-for="lien in liens"
          :key="lien.route"
          :to="lien.route"
          @click="menuOuvert = false"
          :class="[
            'px-8 py-5 text-lg transition-all duration-300',

            route.path === lien.route
              ? 'text-cyan-400'
              : 'text-gray-300 hover:text-cyan-400'
          ]"
        >
          {{ lien.nom }}
        </RouterLink>

      </nav>

      <!-- Button -->

      <RouterLink
        to="/contact"
        @click="menuOuvert = false"
        class="absolute bottom-8 left-8 right-8 py-4 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 text-center text-white font-semibold transition-all duration-300 hover:shadow-[0_0_30px_#22d3ee]"
      >
        Me contacter
      </RouterLink>

    </aside>

  </Transition>

</template>


<script setup>
import { ref, watch, onMounted, onUnmounted } from 'vue'
import { RouterLink, useRoute } from 'vue-router'

/* ===========================
   Route active
=========================== */

const route = useRoute()

/* ===========================
   Mobile Menu
=========================== */

const menuOuvert = ref(false)

/* ===========================
   Navbar Scroll Effect
=========================== */

const scrolled = ref(false)

const handleScroll = () => {
  scrolled.value = window.scrollY > 30
}

/* ===========================
   Navigation
=========================== */

const liens = [
  {
    nom: 'Accueil',
    route: '/',
  },
  {
    nom: 'Portfolio',
    route: '/portfolio',
  },
  {
    nom: 'Services',
    route: '/services',
  },
  {
    nom: 'CV',
    route: '/cv',
  },
  {
    nom: 'Contact',
    route: '/contact',
  },
]

/* ===========================
   Bloquer le scroll
=========================== */

watch(menuOuvert, (value) => {
  document.body.style.overflow = value ? 'hidden' : 'auto'
})

/* ===========================
   Lifecycle
=========================== */

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)

  document.body.style.overflow = 'auto'
})
</script>

<style scoped>
.sidebar-enter-active,
.sidebar-leave-active{

transition:.35s ease;

}

.sidebar-enter-from,
.sidebar-leave-to{

transform:translateX(100%);

opacity:0;

}
</style>