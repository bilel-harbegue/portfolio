<template>
  <section
    class="relative overflow-hidden bg-[#050816] py-24 text-white"
  >

    <!-- ================= Background Glow ================= -->

    <div
      class="absolute left-0 top-10 h-80 w-80 rounded-full
             bg-cyan-500/10 blur-[120px]"
    ></div>

    <div
      class="absolute bottom-0 right-0 h-80 w-80 rounded-full
             bg-violet-600/10 blur-[120px]"
    ></div>


    <!-- ================= Container ================= -->

    <div class="relative z-10 mx-auto max-w-7xl px-6">


      <!-- ================= Title ================= -->

      <div class="mb-16 text-center">

        <p class="mb-3 font-medium text-cyan-400">
          Ce que je propose
        </p>

        <h2 class="text-4xl font-bold md:text-5xl">
          Mes Services
        </h2>

        <div
          class="mx-auto mt-5 h-1 w-20 rounded-full
                 bg-gradient-to-r from-cyan-400 to-violet-500"
        ></div>

        <p
          class="mx-auto mt-6 max-w-2xl
                 leading-relaxed text-gray-400"
        >
          Je propose des solutions web modernes et adaptées
          aux besoins de chaque projet, de la conception
          jusqu'au développement et à l'intégration.
        </p>

      </div>


      <!-- ================= SERVICES ================= -->

      <div
        class="grid gap-6
               md:grid-cols-2
               lg:grid-cols-6"
      >

        <!-- ================= SERVICE CARD ================= -->

        <div
          v-for="(service, index) in services"
          :key="service.title"

          :class="[
            'group rounded-[22px] border border-cyan-400/10',
            'bg-[rgba(8,16,31,.72)] p-7 backdrop-blur-[14px]',
            'transition-all duration-300',
            'hover:-translate-y-2 hover:border-cyan-400/40',
            'hover:shadow-[0_0_30px_rgba(34,211,238,.08),0_0_60px_rgba(139,92,246,.05)]',
            'lg:col-span-2',
            index === services.length - 1 ? 'lg:col-start-3' : ''
          ]"
        >


          <!-- ================= ICON ================= -->

          <div
            class="mb-[22px] flex h-[58px] w-[58px] items-center
                   justify-center rounded-2xl
                   border border-cyan-400/20
                   bg-gradient-to-br
                   from-cyan-400/12 to-violet-500/10
                   text-cyan-400
                   transition-all duration-300
                   group-hover:scale-105
                   group-hover:-translate-y-1
                   group-hover:border-cyan-400/50
                   group-hover:text-cyan-300
                   group-hover:shadow-[0_0_15px_rgba(34,211,238,.2),0_0_30px_rgba(34,211,238,.08)]"
          >

            <!-- Frontend -->

            <svg
              v-if="service.icon === 'frontend'"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.7"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="h-7 w-7"
            >
              <rect x="3" y="4" width="18" height="16" rx="2"/>
              <path d="M3 9h18"/>
              <path d="M7 6.5h.01"/>
              <path d="M10 6.5h.01"/>
              <path d="M8 13l-2 2 2 2"/>
              <path d="M12 17h4"/>
            </svg>


            <!-- Backend -->

            <svg
              v-else-if="service.icon === 'backend'"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.7"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="h-7 w-7"
            >
              <rect x="4" y="3" width="16" height="6" rx="2"/>
              <rect x="4" y="15" width="16" height="6" rx="2"/>
              <path d="M8 6h.01"/>
              <path d="M8 18h.01"/>
              <path d="M12 9v6"/>
              <path d="M9 12h6"/>
            </svg>


            <!-- Full Stack -->

            <svg
              v-else-if="service.icon === 'fullstack'"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.7"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="h-7 w-7"
            >
              <rect x="3" y="3" width="18" height="18" rx="3"/>
              <path d="M8 8l-2 2 2 2"/>
              <path d="M16 8l2 2-2 2"/>
              <path d="M10 16h4"/>
              <path d="M10 12l4-4"/>
            </svg>


            <!-- API -->

            <svg
              v-else-if="service.icon === 'api'"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.7"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="h-7 w-7"
            >
              <circle cx="6" cy="12" r="3"/>
              <circle cx="18" cy="6" r="3"/>
              <circle cx="18" cy="18" r="3"/>
              <path d="M8.5 10.5l7-3"/>
              <path d="M8.5 13.5l7 3"/>
            </svg>


            <!-- Database -->

            <svg
              v-else-if="service.icon === 'database'"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.7"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="h-7 w-7"
            >
              <ellipse cx="12" cy="5" rx="7" ry="3"/>

              <path
                d="M5 5v7c0 1.7 3.1 3 7 3
                   s7-1.3 7-3V5"
              />

              <path
                d="M5 12v7c0 1.7 3.1 3 7 3
                   s7-1.3 7-3v-7"
              />
            </svg>


            <!-- AI -->

            <svg
              v-else-if="service.icon === 'ai'"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.7"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="h-7 w-7"
            >
              <rect x="6" y="6" width="12" height="12" rx="3"/>

              <path d="M9 1v3"/>
              <path d="M15 1v3"/>
              <path d="M9 20v3"/>
              <path d="M15 20v3"/>
              <path d="M1 9h3"/>
              <path d="M1 15h3"/>
              <path d="M20 9h3"/>
              <path d="M20 15h3"/>

              <circle cx="10" cy="12" r="1"/>
              <circle cx="14" cy="12" r="1"/>

              <path d="M10 15h4"/>
            </svg>


            <!-- Maintenance -->

            <svg
              v-else
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.7"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="h-7 w-7"
            >
              <path
                d="M14.7 6.3a4 4 0 0 0-5.4 5.4L4 17
                   a2 2 0 0 0 3 3l5.3-5.3
                   a4 4 0 0 0 5.4-5.4l-2.4 2.4-3-3z"
              />

              <path d="M15 4l5 5"/>
            </svg>

          </div>


          <!-- ================= TITLE ================= -->

          <h3 class="mb-3 text-xl font-bold">
            {{ service.title }}
          </h3>


          <!-- ================= DESCRIPTION ================= -->

          <p
            class="text-sm leading-relaxed text-gray-400"
          >
            {{ service.description }}
          </p>


          <!-- ================= TECHNOLOGIES ================= -->

          <div class="mt-6 flex flex-wrap gap-2">

            <span
              v-for="tech in service.technologies"
              :key="tech"
              class="rounded-full border border-cyan-400/12
                     bg-cyan-400/6 px-2.5 py-1
                     text-xs text-cyan-300
                     transition duration-300
                     hover:border-cyan-400/30
                     hover:bg-cyan-400/12"
            >
              {{ tech }}
            </span>

          </div>

        </div>

      </div>


      <!-- ================= PROCESS ================= -->

      <div class="mt-24">

        <div class="mb-12 text-center">

          <p class="mb-3 font-medium text-cyan-400">
            Ma méthode
          </p>

          <h2 class="text-3xl font-bold md:text-4xl">
            Comment je travaille
          </h2>

          <p
            class="mx-auto mt-5 max-w-2xl text-gray-400"
          >
            Une approche simple et organisée pour transformer
            une idée en solution web fonctionnelle.
          </p>

        </div>


        <div
          class="grid gap-6
                 md:grid-cols-2
                 lg:grid-cols-4"
        >


          <!-- Step 1 -->

          <div
            class="rounded-[20px] border border-cyan-400/8
                   bg-[rgba(8,16,31,.55)] p-7
                   transition duration-300
                   hover:-translate-y-1
                   hover:border-cyan-400/30"
          >

            <span
              class="font-bold tracking-[2px] text-cyan-400"
            >
              01
            </span>

            <h3 class="mt-[18px] text-lg font-bold">
              Analyse
            </h3>

            <p
              class="mt-2.5 text-sm leading-[1.7]
                     text-gray-400"
            >
              Comprendre les besoins, les objectifs et
              les fonctionnalités du projet.
            </p>

          </div>


          <!-- Step 2 -->

          <div
            class="rounded-[20px] border border-cyan-400/8
                   bg-[rgba(8,16,31,.55)] p-7
                   transition duration-300
                   hover:-translate-y-1
                   hover:border-cyan-400/30"
          >

            <span
              class="font-bold tracking-[2px] text-cyan-400"
            >
              02
            </span>

            <h3 class="mt-[18px] text-lg font-bold">
              Conception
            </h3>

            <p
              class="mt-2.5 text-sm leading-[1.7]
                     text-gray-400"
            >
              Organiser la structure de l'application,
              les interfaces et les données.
            </p>

          </div>


          <!-- Step 3 -->

          <div
            class="rounded-[20px] border border-cyan-400/8
                   bg-[rgba(8,16,31,.55)] p-7
                   transition duration-300
                   hover:-translate-y-1
                   hover:border-cyan-400/30"
          >

            <span
              class="font-bold tracking-[2px] text-cyan-400"
            >
              03
            </span>

            <h3 class="mt-[18px] text-lg font-bold">
              Développement
            </h3>

            <p
              class="mt-2.5 text-sm leading-[1.7]
                     text-gray-400"
            >
              Développer le frontend, le backend et
              les différentes fonctionnalités.
            </p>

          </div>


          <!-- Step 4 -->

          <div
            class="rounded-[20px] border border-cyan-400/8
                   bg-[rgba(8,16,31,.55)] p-7
                   transition duration-300
                   hover:-translate-y-1
                   hover:border-cyan-400/30"
          >

            <span
              class="font-bold tracking-[2px] text-cyan-400"
            >
              04
            </span>

            <h3 class="mt-[18px] text-lg font-bold">
              Tests & amélioration
            </h3>

            <p
              class="mt-2.5 text-sm leading-[1.7]
                     text-gray-400"
            >
              Tester l'application, corriger les problèmes
              et améliorer la qualité du projet.
            </p>

          </div>

        </div>

      </div>


      <!-- ================= CTA ================= -->

      <div class="mx-auto mt-20 max-w-4xl px-6">

        <div
          class="relative overflow-hidden rounded-[28px]
                 border border-cyan-400/20
                 bg-gradient-to-br
                 from-[rgba(8,16,31,.9)]
                 to-[rgba(10,15,35,.75)]
                 px-7 py-12 text-center
                 shadow-[0_0_40px_rgba(34,211,238,.06)]
                 backdrop-blur-[16px]
                 sm:px-10"
        >

          <!-- Glow -->

          <div
            class="pointer-events-none absolute -top-24 left-1/2
                   h-48 w-72 -translate-x-1/2 rounded-full
                   bg-cyan-400/12 blur-[80px]"
          ></div>


          <!-- Content -->

          <div class="relative z-10">

            <p class="mb-3 font-medium text-cyan-400">
              Un projet en tête ?
            </p>

            <h2 class="text-3xl font-bold md:text-4xl">

              Construisons quelque chose

              <span
                class="bg-gradient-to-r
                       from-cyan-400 to-violet-500
                       bg-clip-text text-transparent"
              >
                d'exception.
              </span>

            </h2>

            <p
              class="mx-auto mt-5 max-w-xl
                     leading-relaxed text-gray-400"
            >
              Discutons de votre idée et trouvons ensemble
              la solution technique la plus adaptée.
            </p>

            <RouterLink
              to="/contact"
              class="mt-8 inline-flex rounded-full
                     bg-gradient-to-r
                     from-cyan-400 to-violet-500
                     px-7 py-3
                     font-semibold text-[#050816]
                     transition-all duration-300
                     hover:scale-105
                     hover:shadow-[0_0_30px_#22d3ee]"
            >
              Démarrer un projet
            </RouterLink>

          </div>

        </div>

      </div>

    </div>

  </section>
</template>


<script setup>

import { RouterLink } from 'vue-router'

const services = [

  {
    icon: 'frontend',
    title: 'Développement Frontend',
    description:
      'Création d’interfaces web modernes, responsives et interactives avec une attention particulière portée à l’expérience utilisateur.',
    technologies: [
      'HTML',
      'CSS',
      'JavaScript',
      'Vue.js',
      'Tailwind CSS'
    ]
  },

  {
    icon: 'backend',
    title: 'Développement Backend',
    description:
      'Développement de la logique métier, gestion des utilisateurs, traitement des données et création de fonctionnalités backend adaptées au projet.',
    technologies: [
      'Django',
      'PHP',
      'Python',
      'SQL'
    ]
  },

  {
    icon: 'fullstack',
    title: 'Développement Full-Stack',
    description:
      'Développement d’applications web complètes en reliant l’interface utilisateur, le backend, les bases de données et les différentes fonctionnalités.',
    technologies: [
      'Vue.js',
      'Django',
      'JavaScript',
      'PHP',
      'SQL'
    ]
  },

  {
    icon: 'api',
    title: 'API & Intégration',
    description:
      'Création et intégration d’API REST pour permettre la communication entre le frontend, le backend et différents services.',
    technologies: [
      'REST API',
      'Axios',
      'Postman',
      'JWT'
    ]
  },

  {
    icon: 'database',
    title: 'Bases de données',
    description:
      'Conception et gestion des bases de données pour organiser efficacement les informations utilisées par les applications.',
    technologies: [
      'SQL',
      'MySQL'
    ]
  },

  {
    icon: 'ai',
    title: 'IA & Automatisation',
    description:
      'Intégration de fonctionnalités basées sur l’intelligence artificielle pour automatiser certaines tâches et améliorer les applications.',
    technologies: [
      'Python',
      'Automatisation'
    ]
  },

  {
    icon: 'maintenance',
    title: 'Maintenance & Optimisation',
    description:
      'Correction des problèmes, amélioration des performances et évolution des applications existantes selon les nouveaux besoins.',
    technologies: [
      'Git',
      'GitHub',
      'Postman',
      'Xampp',
      'Vite'
    ]
  }

]

</script>