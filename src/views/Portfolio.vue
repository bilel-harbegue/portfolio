
<template>

  <main
    class="min-h-screen
           bg-[#050816]
           text-white
           pt-28
           pb-24"
  >

    <!-- ================= Background ================= -->

    <div class="fixed inset-0 pointer-events-none overflow-hidden">

      <div
        class="absolute
               w-[400px] h-[400px]
               top-[10%] -left-[150px]
               rounded-full
               bg-cyan-500/10
               blur-[140px]"
      ></div>

      <div
        class="absolute
               w-[400px] h-[400px]
               bottom-0 -right-[150px]
               rounded-full
               bg-violet-600/10
               blur-[140px]"
      ></div>

    </div>


    <!-- ================= Container ================= -->

    <div class="relative z-10 max-w-7xl mx-auto px-6">


      <!-- ================= Header ================= -->

      <header class="text-center mb-16">

        <p class="text-cyan-400 font-medium mb-3">
          Mes réalisations
        </p>

        <h1 class="text-4xl md:text-5xl font-bold">
          Mon Portfolio
        </h1>

        <div
          class="w-20 h-1
                 mx-auto mt-5
                 rounded-full
                 bg-gradient-to-r
                 from-cyan-400
                 to-violet-500"
        ></div>

        <p
          class="max-w-2xl
                 mx-auto
                 mt-6
                 text-gray-400"
        >
          Découvrez mes projets et les solutions que j'ai
          développées avec des technologies modernes.
        </p>

      </header>


      <!-- ================= Projects ================= -->

      <div
        class="grid
               md:grid-cols-2
               lg:grid-cols-3
               gap-8"
      >

        <ProjectCard
          v-for="projet in projets"
          :key="projet.id"
          :projet="projet"
          @demo="ouvrirDemo"
          @details="ouvrirDetails"
        />

      </div>

    </div>


    <!-- ================================================= -->
    <!-- VIDEO MODAL -->
    <!-- ================================================= -->

    <Transition name="modal">

      <div
        v-if="demoProjet"
        class="fixed inset-0
               z-[100]
               bg-black/95
               backdrop-blur-md
               flex items-center
               justify-center
               p-2 sm:p-4"
        @click.self="fermerDemo"
      >

        <!-- ================= VIDEO CONTAINER ================= -->

        <div
          class="relative
                 w-full
                 max-w-6xl
                 max-h-[96vh]
                 bg-[#050816]
                 border border-cyan-400/20
                 rounded-2xl
                 overflow-hidden
                 shadow-[0_0_80px_rgba(34,211,238,.18)]
                 flex
                 flex-col"
        >

          <!-- ================= HEADER ================= -->

          <div
            class="flex
                   items-center
                   justify-between
                   gap-4
                   px-5
                   py-4
                   bg-[#08101f]
                   border-b
                   border-white/10
                   shrink-0"
          >

            <div class="min-w-0">

              <p class="text-cyan-400 text-xs font-medium">
                Démonstration du projet
              </p>

              <h2
                class="text-lg
                       sm:text-xl
                       font-bold
                       truncate"
              >
                {{ demoProjet.titre }}
              </h2>

            </div>


            <!-- Bouton fermer -->

            <button
              type="button"
              @click="fermerDemo"
              class="shrink-0
                     w-10 h-10
                     rounded-full
                     bg-white/5
                     border border-white/10
                     text-gray-300
                     flex items-center
                     justify-center
                     hover:bg-cyan-400
                     hover:text-black
                     hover:border-cyan-400
                     transition"
              aria-label="Fermer"
            >

              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                class="w-5 h-5"
              >
                <path d="M6 6l12 12"/>
                <path d="M18 6 6 18"/>
              </svg>

            </button>

          </div>


          <!-- ================= VIDEO ================= -->

          <div
            v-if="demoProjet.video"
            class="relative
                   w-full
                   bg-black
                   flex
                   items-center
                   justify-center
                   overflow-hidden"
          >

            <video
              ref="videoElement"
              :src="demoProjet.video"
              :poster="demoProjet.poster"
              controls
              autoplay
              playsinline
              preload="metadata"
              class="block
                     w-full
                     h-auto
                     max-h-[calc(96vh-130px)]
                     object-contain
                     bg-black"
              @error="videoErreur"
            ></video>

          </div>


          <!-- ================= VIDEO UNAVAILABLE ================= -->

          <div
            v-else
            class="min-h-[400px]
                   flex flex-col
                   items-center
                   justify-center
                   text-center
                   p-10"
          >

            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              class="w-14 h-14
                     text-cyan-400
                     mb-5"
            >

              <rect
                x="3"
                y="4"
                width="18"
                height="16"
                rx="2"
              />

              <path d="m10 9 5 3-5 3V9Z" />

            </svg>

            <h3 class="text-xl font-bold">
              Démonstration indisponible
            </h3>

            <p class="text-gray-500 mt-2">
              La vidéo de ce projet sera ajoutée prochainement.
            </p>

          </div>


          <!-- ================= FOOTER VIDEO ================= -->

          <div
            v-if="demoProjet.video"
            class="px-5
                   py-3
                   bg-[#08101f]
                   border-t
                   border-white/10
                   flex
                   items-center
                   justify-between
                   gap-4
                   shrink-0"
          >

            <p
              class="text-xs
                     sm:text-sm
                     text-gray-500"
            >
              Démonstration vidéo
            </p>

            <span
              class="hidden sm:inline-flex
                     items-center
                     gap-2
                     text-xs
                     text-cyan-400"
            >

              <span
                class="w-2 h-2
                       rounded-full
                       bg-cyan-400
                       shadow-[0_0_10px_#22d3ee]"
              ></span>

              Lecture

            </span>

          </div>

        </div>

      </div>

    </Transition>


    <!-- ================================================= -->
    <!-- DETAILS MODAL -->
    <!-- ================================================= -->

    <Transition name="modal">

      <div
        v-if="detailsProjet"
        class="fixed inset-0
               z-[100]
               bg-black/80
               backdrop-blur-md
               flex items-center
               justify-center
               p-4 sm:p-6"
        @click.self="fermerDetails"
      >

        <div
          class="relative
                 w-full
                 max-w-2xl
                 max-h-[85vh]
                 overflow-y-auto
                 bg-[#08101f]
                 border border-cyan-400/20
                 rounded-3xl
                 p-8"
        >

          <!-- Fermer -->

          <button
            type="button"
            @click="fermerDetails"
            class="absolute
                   top-5 right-5
                   w-9 h-9
                   rounded-full
                   bg-white/5
                   text-gray-400
                   flex items-center
                   justify-center
                   hover:text-white
                   hover:bg-cyan-400/10
                   transition"
          >

            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              class="w-4 h-4"
            >
              <path d="M6 6l12 12"/>
              <path d="M18 6 6 18"/>
            </svg>

          </button>


          <!-- Catégorie -->

          <span class="text-cyan-400 text-sm">
            {{ detailsProjet.categorie }}
          </span>


          <!-- Titre -->

          <h2
            class="text-3xl
                   font-bold
                   mt-3
                   pr-8"
          >
            {{ detailsProjet.titre }}
          </h2>


          <!-- Détails -->

          <p
            class="text-gray-400
                   leading-relaxed
                   mt-5"
          >
            {{ detailsProjet.details }}
          </p>


          <!-- Technologies -->

          <h3 class="font-semibold mt-7 mb-3">
            Technologies
          </h3>

          <div class="flex flex-wrap gap-2">

            <span
              v-for="tech in detailsProjet.technologies"
              :key="tech"
              class="px-2.5 py-1
                     rounded-full
                     text-xs
                     text-cyan-300
                     bg-cyan-400/5
                     border border-cyan-400/10"
            >
              {{ tech }}
            </span>

          </div>


          <!-- Informations supplémentaires -->

          <div
            v-if="detailsProjet.infos"
            class="mt-7
                   p-4
                   rounded-2xl
                   bg-cyan-400/5
                   border border-cyan-400/10"
          >

            <p
              v-for="info in detailsProjet.infos"
              :key="info"
              class="text-sm
                     text-gray-400
                     leading-relaxed
                     mb-2
                     last:mb-0"
            >
              {{ info }}
            </p>

          </div>


          <!-- Voir la démonstration -->

          <button
            type="button"
            @click="ouvrirDemo(detailsProjet)"
            class="mt-7
                   inline-flex
                   items-center
                   gap-2
                   px-5 py-2.5
                   rounded-full
                   bg-gradient-to-r
                   from-cyan-400
                   to-violet-500
                   text-[#050816]
                   font-semibold
                   text-sm
                   hover:scale-105
                   transition"
          >

            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-4 h-4"
            >
              <path d="M8 5v14l11-7z" />
            </svg>

            Voir la démonstration

          </button>

        </div>

      </div>

    </Transition>

  </main>

</template>


<script setup>

import { ref, nextTick } from 'vue'

import ProjectCard
  from '../components/portfolio/ProjectCard.vue'


// =================================================
// IMAGES
// =================================================

import stagesImage
  from '../assets/images/img1.png'

import stagesVideo
  from '../assets/videos/gest_stage.mp4'


import stagesImage2
  from '../assets/images/img2.png'

import stagesVideo2
  from '../assets/videos/gest_fiche.mp4'


import stagesImage3
  from '../assets/images/img3.png'

import stagesVideo3
  from '../assets/videos/port.mp4'


// =================================================
// PROJETS
// =================================================

const projets = [

  // =================================================
  // PROJET 1
  // =================================================

  {
    id: 1,

    titre: 'Gestion intelligente des stages',

    categorie: 'PFE • CNI • 2025',

    description:
      'Plateforme web intelligente destinée à faciliter la gestion des stages, des étudiants, des entreprises et des affectations.',

    details:
      'Projet de Fin d’Études réalisé au Centre National d’Informatique (CNI) en 2025. Le projet a été développé en binôme et consiste à concevoir une plateforme web permettant de centraliser et simplifier la gestion des stages. L’application permet de gérer les étudiants, les entreprises, les offres de stage, les utilisateurs et les rôles. Une partie du processus d’affectation et du traitement des informations a également été automatisée avec une assistance basée sur l’intelligence artificielle développée en Python.',

    infos: [

      'Projet de Fin d’Études réalisé en binôme.',

      'Lieu : Centre National d’Informatique (CNI).',

      'Durée : 4 mois en 2025.',

      'Python a été utilisé pour la partie Intelligence Artificielle.'

    ],

    technologies: [

      'Vue.js',

      'Spring Boot',

      'Tailwind CSS',

      'PostgreSQL',

      'Python'

    ],

    poster: stagesImage,

    video: stagesVideo,

    github: ''

  },


  // =================================================
  // PROJET 2
  // =================================================

  {
    id: 2,

    titre: 'Application de gestion de fichiers',

    categorie: 'Stage • Vikaspace • 2024',

    description:
      'Application web permettant de gérer les fichiers, les utilisateurs, les permissions et les opérations CRUD.',

    details:
      'Application web développée durant mon stage de perfectionnement chez Vikaspace en 2024. Le projet avait pour objectif de faciliter la gestion des fichiers au sein de l’application. J’ai participé au développement des fonctionnalités CRUD ainsi qu’à la gestion des utilisateurs et de leurs permissions. Un tableau de bord administrateur permet également de centraliser la gestion des données et des utilisateurs.',

    infos: [

      'Stage de perfectionnement réalisé chez Vikaspace.',

      'Durée : 1 mois en 2024.',

      'Travail sur une application web de gestion de fichiers.',

      'Participation au développement des fonctionnalités CRUD et de la gestion des utilisateurs.'

    ],

    technologies: [

      'HTML',

      'CSS',

      'JavaScript',

      'PHP',

      'SQL'

    ],

    poster: stagesImage2,

    video: stagesVideo2,

    github: ''

  },


  // =================================================
  // PROJET 3
  // =================================================

  {
    id: 3,

    titre: 'Portfolio Web',

    categorie: 'Projet personnel',

    description:
      'Portfolio personnel moderne permettant de présenter mon parcours, mes compétences et mes réalisations.',

    details:
      'Portfolio personnel développé avec Vue.js 3, Vite et Tailwind CSS. Le site utilise une interface moderne inspirée des designs Web3 avec un thème sombre, des effets lumineux, des animations et une architecture organisée en plusieurs pages. L’objectif est de présenter mon profil, mes compétences, mes expériences et mes projets de manière claire et professionnelle.',

    infos: [

      'Projet personnel développé pour présenter mon profil professionnel.',

      'Architecture basée sur Vue.js 3 et Vue Router.',

      'Interface responsive adaptée aux différentes tailles d’écran.',

      'Design moderne basé principalement sur Tailwind CSS.'

    ],

    technologies: [

      'Vue.js 3',

      'Vite',

      'Tailwind CSS',

      'JavaScript'

    ],

    poster: stagesImage3,

    video: stagesVideo3,

    github: ''

  }

]


// =================================================
// VIDEO
// =================================================

const demoProjet = ref(null)

const videoElement = ref(null)


// =================================================
// OUVRIR DEMO
// =================================================

const ouvrirDemo = async (projet) => {

  detailsProjet.value = null

  demoProjet.value = projet

  await nextTick()

  if (videoElement.value) {

    try {

      videoElement.value.currentTime = 0

      await videoElement.value.play()

    } catch (error) {

      console.warn(
        'Lecture automatique bloquée par le navigateur.'
      )

    }

  }

}


// =================================================
// FERMER DEMO
// =================================================

const fermerDemo = () => {

  if (videoElement.value) {

    videoElement.value.pause()

    videoElement.value.currentTime = 0

  }

  demoProjet.value = null

}


// =================================================
// DETAILS
// =================================================

const detailsProjet = ref(null)


// =================================================
// OUVRIR DETAILS
// =================================================

const ouvrirDetails = (projet) => {

  detailsProjet.value = projet

}


// =================================================
// FERMER DETAILS
// =================================================

const fermerDetails = () => {

  detailsProjet.value = null

}


// =================================================
// VIDEO ERROR
// =================================================

const videoErreur = () => {

  console.warn(
    'La vidéo du projet est introuvable.'
  )

}

</script>


<style scoped>

/* ================================================= */
/* MODAL */
/* ================================================= */

.modal-enter-active,
.modal-leave-active {

  transition:
    opacity .3s ease,
    transform .3s ease;

}


.modal-enter-from,
.modal-leave-to {

  opacity: 0;

  transform: scale(.96);

}


/* ================================================= */
/* VIDEO */
/* ================================================= */

video {

  /*
   * Empêche la vidéo de perdre ses proportions.
   */

  aspect-ratio: auto;

}


/* ================================================= */
/* SCROLLBAR DETAILS */
/* ================================================= */

::-webkit-scrollbar {

  width: 6px;

}


::-webkit-scrollbar-track {

  background: transparent;

}


::-webkit-scrollbar-thumb {

  background: rgba(34, 211, 238, .25);

  border-radius: 999px;

}


::-webkit-scrollbar-thumb:hover {

  background: rgba(34, 211, 238, .5);

}

</style>
```
