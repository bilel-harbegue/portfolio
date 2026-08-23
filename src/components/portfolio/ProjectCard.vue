
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


    <!-- ================================================= -->
    <!-- PROJECT PREVIEW -->
    <!-- ================================================= -->

    <div
      class="relative
             h-64
             overflow-hidden
             bg-[#050816]
             flex
             items-center
             justify-center"
    >


      <!-- ================= IMAGE ================= -->

      <img
        v-if="projet.poster"
        :src="projet.poster"
        :alt="projet.titre"

        class="w-full
               h-full
               object-contain
               p-2
               transition
               duration-500
               group-hover:scale-[1.03]"

        @error="imageErreur"
      />


      <!-- ================================================= -->
      <!-- IMAGE UNAVAILABLE -->
      <!-- ================================================= -->

      <div
        v-else
        class="absolute
               inset-0
               flex
               flex-col
               items-center
               justify-center
               text-gray-500"
      >

        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.5"
          class="w-12 h-12
                 mb-3
                 text-cyan-400/60"
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


      <!-- ================================================= -->
      <!-- LIGHT OVERLAY -->
      <!-- ================================================= -->

      <div
        class="absolute
               inset-0
               bg-gradient-to-t
               from-[#050816]/35
               via-transparent
               to-transparent
               pointer-events-none"
      ></div>


      <!-- ================================================= -->
      <!-- CATEGORY -->
      <!-- ================================================= -->

      <span
        class="absolute
               top-4
               left-4
               z-10

               px-3
               py-1

               rounded-full

               text-xs

               bg-[#050816]/80
               backdrop-blur-md

               border
               border-cyan-400/20

               text-cyan-400"
      >
        {{ projet.categorie }}
      </span>


      <!-- ================================================= -->
      <!-- DEMO BUTTON -->
      <!-- ================================================= -->

      <!--
        Le bouton est caché par défaut.
        Il apparaît seulement lorsque
        l'utilisateur passe la souris
        sur la carte.
      -->

      <button
        type="button"

        @click="$emit('demo', projet)"

        class="absolute
               inset-0
               m-auto

               w-14
               h-14

               rounded-full

               flex
               items-center
               justify-center

               bg-cyan-400/90

               text-[#050816]

               shadow-[0_0_30px_#22d3ee]

               opacity-0
               scale-75

               group-hover:opacity-100
               group-hover:scale-100

               transition
               duration-300

               z-20"

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


      <!-- ================================================= -->
      <!-- SMALL PLAY INDICATOR -->
      <!-- ================================================= -->

      <div
        v-if="projet.video"
        class="absolute
               bottom-4
               right-4
               z-10

               flex
               items-center
               gap-2

               px-3
               py-1.5

               rounded-full

               bg-black/60
               backdrop-blur-md

               border
               border-white/10

               text-xs
               text-gray-300

               transition
               duration-300

               group-hover:opacity-0"
      >

        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          class="w-3.5 h-3.5 text-cyan-400"
        >

          <path d="M8 5v14l11-7z" />

        </svg>

        Démo disponible

      </div>


    </div>


    <!-- ================================================= -->
    <!-- PROJECT INFORMATION -->
    <!-- ================================================= -->

    <div class="p-6">


      <!-- ================= TITLE ================= -->

      <h2
        class="text-xl
               font-bold
               transition
               group-hover:text-cyan-300"
      >
        {{ projet.titre }}
      </h2>


      <!-- ================= DESCRIPTION ================= -->

      <p
        class="mt-3
               text-sm
               text-gray-400
               leading-relaxed"
      >
        {{ projet.description }}
      </p>


      <!-- ================================================= -->
      <!-- TECHNOLOGIES -->
      <!-- ================================================= -->

      <div
        class="flex
               flex-wrap
               gap-2
               mt-5"
      >

        <span
          v-for="tech in projet.technologies"
          :key="tech"

          class="px-2.5
                 py-1

                 rounded-full

                 text-xs
                 text-cyan-300

                 bg-cyan-400/5

                 border
                 border-cyan-400/10

                 transition

                 hover:bg-cyan-400/10
                 hover:border-cyan-400/30"
        >
          {{ tech }}
        </span>

      </div>


      <!-- ================================================= -->
      <!-- ACTIONS -->
      <!-- ================================================= -->

      <div
        class="flex
               items-center
               gap-5
               mt-6"
      >


        <!-- ================= DETAILS ================= -->

        <button
          type="button"

          @click="$emit('details', projet)"

          class="text-cyan-400
                 text-sm
                 font-semibold

                 hover:text-violet-400

                 transition"
        >
          Détails →
        </button>


        <!-- ================= DEMO ================= -->

        <button
          v-if="projet.video"

          type="button"

          @click="$emit('demo', projet)"

          class="inline-flex
                 items-center
                 gap-1.5

                 text-gray-400
                 text-sm

                 hover:text-cyan-400

                 transition"
        >

          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            class="w-3.5 h-3.5"
          >

            <path d="M8 5v14l11-7z" />

          </svg>

          Démo

        </button>


        <!-- ================= GITHUB ================= -->

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


// =================================================
// PROPS
// =================================================

const props = defineProps({

  projet: {

    type: Object,

    required: true

  }

})


// =================================================
// EVENTS
// =================================================

defineEmits([

  'demo',

  'details'

])


// =================================================
// IMAGE ERROR
// =================================================

const imageErreur = (event) => {

  event.target.style.display = 'none'

}

</script>


<style scoped>

/* ================================================= */
/* IMAGE */
/* ================================================= */

img {

  /*
   * object-contain permet d'afficher
   * toute l'image sans la couper.
   */

  object-fit: contain;

}


/* ================================================= */
/* HOVER */
/* ================================================= */

article {

  transform: translateZ(0);

}


/* ================================================= */
/* MOBILE */
/* ================================================= */

@media (max-width: 640px) {

  article > div:first-child {

    height: 230px;

  }

}

</style>
