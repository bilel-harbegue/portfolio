<template>

  <!-- ================= Project Card ================= -->

  <article
    class="group overflow-hidden rounded-2xl
           bg-[#08101f]/80
           border border-cyan-400/10
           backdrop-blur-xl
           transition duration-300
           hover:-translate-y-2
           hover:border-cyan-400/40
           hover:shadow-[0_0_35px_rgba(34,211,238,.08)]"
  >

    <!-- ================= Project Preview ================= -->

    <div class="relative h-56 overflow-hidden bg-[#080f20]">

      <!-- Image du projet -->
      <img
        v-if="projet.poster"
        :src="projet.poster"
        :alt="projet.titre"
        class="w-full h-full object-cover
               transition duration-500
               group-hover:scale-110"
        @error="imageErreur"
      />

      <!-- Affichage si l'image est indisponible -->
      <div
        v-else
        class="absolute inset-0
               flex flex-col
               items-center justify-center
               text-gray-500"
      >

        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.5"
          class="w-12 h-12 mb-3 text-cyan-400/60"
        >

          <rect
            x="3"
            y="3"
            width="18"
            height="18"
            rx="2"
          />

          <circle
            cx="8.5"
            cy="8.5"
            r="1.5"
          />

          <path d="m21 15-5-5L5 21" />

        </svg>

        <span class="text-sm">
          Aperçu indisponible
        </span>

      </div>


      <!-- Overlay sombre sur l'image -->
      <div
        class="absolute inset-0
               bg-gradient-to-t
               from-[#050816]/80
               via-black/20
               to-transparent"
      ></div>


      <!-- Catégorie du projet -->
      <span
        class="absolute top-4 left-4
               px-3 py-1
               rounded-full
               text-xs
               bg-[#050816]/80
               backdrop-blur-md
               border border-cyan-400/20
               text-cyan-400"
      >
        {{ projet.categorie }}
      </span>


      <!-- Bouton pour voir la démonstration -->
      <button
        @click="$emit('demo', projet)"
        class="absolute inset-0 m-auto
               w-14 h-14
               rounded-full
               flex items-center justify-center
               bg-cyan-400/90
               text-[#050816]
               shadow-[0_0_30px_#22d3ee]
               hover:scale-110
               transition duration-300"
        aria-label="Voir la démonstration"
      >

        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          class="w-5 h-5 ml-1"
        >

          <path d="M8 5v14l11-7z" />

        </svg>

      </button>

    </div>


    <!-- ================= Project Information ================= -->

    <div class="p-6">

      <!-- Nom du projet -->
      <h2 class="text-xl font-bold">
        {{ projet.titre }}
      </h2>


      <!-- Description courte -->
      <p
        class="mt-3
               text-sm
               text-gray-400
               leading-relaxed"
      >
        {{ projet.description }}
      </p>


      <!-- Technologies utilisées -->
      <div class="flex flex-wrap gap-2 mt-5">

        <span
          v-for="tech in projet.technologies"
          :key="tech"
          class="px-2.5 py-1
                 rounded-full
                 text-xs
                 text-cyan-300
                 bg-cyan-400/5
                 border border-cyan-400/10
                 transition
                 hover:bg-cyan-400/10
                 hover:border-cyan-400/30"
        >
          {{ tech }}
        </span>

      </div>


      <!-- ================= Actions ================= -->

      <div class="flex items-center gap-5 mt-6">

        <!-- Afficher les détails -->
        <button
          @click="$emit('details', projet)"
          class="text-cyan-400
                 text-sm
                 font-semibold
                 hover:text-violet-400
                 transition"
        >
          Détails →
        </button>


        <!-- GitHub -->
        <a
          v-if="projet.github"
          :href="projet.github"
          target="_blank"
          rel="noopener noreferrer"
          class="text-gray-400
                 text-sm
                 hover:text-white
                 transition"
        >
          GitHub ↗
        </a>

      </div>

    </div>

  </article>

</template>


<script setup>

// ================= Props =================

// Le projet est envoyé depuis Portfolio.vue
const props = defineProps({

  projet: {
    type: Object,
    required: true
  }

})


// ================= Events =================

// Events envoyés à Portfolio.vue
defineEmits([
  'demo',
  'details'
])


// ================= Image Error =================

// Si l'image n'existe pas,
// on la cache pour laisser apparaître
// la zone de remplacement.
const imageErreur = (event) => {

  event.target.style.display = 'none'

}

</script>