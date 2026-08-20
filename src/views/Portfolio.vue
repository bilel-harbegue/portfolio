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
               bg-black/90
               backdrop-blur-md
               flex items-center
               justify-center
               p-4 md:p-6"
        @click.self="fermerDemo"
      >

        <div
          class="relative
                 w-full max-w-5xl
                 bg-[#08101f]
                 border border-cyan-400/20
                 rounded-2xl
                 overflow-hidden
                 shadow-[0_0_60px_rgba(34,211,238,.15)]"
        >

          <!-- Fermer -->
          <button
            @click="fermerDemo"
            class="absolute
                   top-4 right-4
                   z-20
                   w-10 h-10
                   rounded-full
                   bg-black/70
                   text-white
                   hover:bg-cyan-400
                   hover:text-black
                   transition"
            aria-label="Fermer"
          >
            ✕
          </button>


          <!-- Vidéo disponible -->

          <video
            v-if="demoProjet.video"
            :src="demoProjet.video"
            :poster="demoProjet.poster"
            controls
            autoplay
            playsinline
            class="w-full
                   max-h-[75vh]
                   bg-black"
            @error="videoErreur"
          ></video>


          <!-- Vidéo indisponible -->

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
               p-6"
        @click.self="fermerDetails"
      >

        <div
          class="relative
                 w-full max-w-2xl
                 max-h-[85vh]
                 overflow-y-auto
                 bg-[#08101f]
                 border border-cyan-400/20
                 rounded-3xl
                 p-8"
        >

          <!-- Fermer -->

          <button
            @click="fermerDetails"
            class="absolute
                   top-5 right-5
                   w-9 h-9
                   rounded-full
                   bg-white/5
                   text-gray-400
                   hover:text-white
                   hover:bg-cyan-400/10
                   transition"
          >
            ✕
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
                     leading-relaxed"
            >
              {{ info }}
            </p>

          </div>


          <!-- Voir la démonstration -->

          <button
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

import { ref } from 'vue'

import ProjectCard from '../components/portfolio/ProjectCard.vue'

import stagesImage from '../assets/images/1.png'
import stagesVideo from '../assets/videos/2026-08-09 08-05-34.mp4'


// =================================================
// PROJETS
// =================================================
//
// Les informations de chaque projet sont regroupées
// ici afin de garder Portfolio.vue simple à gérer.
// =================================================

const projets = [

  // =================================================
  // PROJET 1 : PFE
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
      'Python',
      'IA'
    ],

    poster: stagesImage,

    video: stagesVideo,

    github: ''
  },


  // =================================================
  // PROJET 2 : VIKASPACE
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

    poster: '/images/files-management.jpg',

    video: '/videos/files-management.mp4',

    github: ''
  },


  // =================================================
  // PROJET 3 : PORTFOLIO
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

    poster: '/images/portfolio.jpg',

    video: '/videos/portfolio-demo.mp4',

    github: ''
  }

]


// =================================================
// VIDEO
// =================================================

const demoProjet = ref(null)


// Ouvrir la démonstration
const ouvrirDemo = (projet) => {

  detailsProjet.value = null

  demoProjet.value = projet

}


// Fermer la démonstration
const fermerDemo = () => {

  demoProjet.value = null

}


// =================================================
// DETAILS
// =================================================

const detailsProjet = ref(null)


// Ouvrir les détails
const ouvrirDetails = (projet) => {

  detailsProjet.value = projet

}


// Fermer les détails
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

/*
  Animation simple pour les fenêtres
  de détails et de démonstration.
*/

.modal-enter-active,
.modal-leave-active {

  transition: .3s;

}


.modal-enter-from,
.modal-leave-to {

  opacity: 0;

  transform: scale(.95);

}

</style>