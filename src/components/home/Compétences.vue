<template>
  <section class="relative py-24 bg-[#050816] text-white overflow-hidden">

    <!-- ================= Effets lumineux ================= -->

    <div
      class="absolute top-10 right-0 w-80 h-80
             bg-violet-600/10 rounded-full blur-[120px]"
    ></div>

    <div
      class="absolute bottom-0 left-0 w-72 h-72
             bg-cyan-500/10 rounded-full blur-[120px]"
    ></div>


    <!-- ================= Contenu principal ================= -->

    <div class="relative z-10 max-w-7xl mx-auto px-6">


      <!-- ================= Titre ================= -->

      <div class="text-center mb-16">

        <p class="text-cyan-400 font-medium mb-3 tracking-wide">
          Mon expertise
        </p>

        <h2 class="text-4xl md:text-5xl font-bold">
          Compétences
        </h2>

        <!-- Ligne décorative -->

        <div
          class="w-20 h-1 mx-auto mt-5 rounded-full
                 bg-gradient-to-r from-cyan-400 to-violet-500"
        ></div>

        <p class="max-w-2xl mx-auto mt-6 text-gray-400">
          Les technologies et outils que j'utilise pour concevoir
          des applications web modernes et performantes.
        </p>

      </div>


      <!-- ================= Cartes des compétences ================= -->

      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">


        <!-- Carte de compétence -->

        <div
          v-for="competence in competences"
          :key="competence.nom"
          class="group relative p-7 rounded-2xl
                 bg-[#08101f]/75
                 border border-cyan-400/10
                 backdrop-blur-xl
                 overflow-hidden
                 transition-all duration-300
                 hover:-translate-y-2
                 hover:border-cyan-400/35
                 hover:shadow-[0_15px_40px_rgba(0,0,0,.25),0_0_30px_rgba(34,211,238,.08)]"
        >

          <!-- Ligne lumineuse au-dessus de la carte -->

          <div
            class="absolute top-0 left-0 w-full h-px
                   bg-gradient-to-r
                   from-transparent
                   via-cyan-400/50
                   to-transparent
                   opacity-0
                   transition-opacity duration-300
                   group-hover:opacity-100"
          ></div>


          <!-- ================= Icône ================= -->

          <div
            class="w-12 h-12
                   flex items-center justify-center
                   mb-5
                   rounded-xl
                   text-cyan-400
                   bg-gradient-to-br
                   from-cyan-400/12
                   to-violet-500/12
                   border border-cyan-400/15
                   transition-transform duration-300
                   group-hover:scale-105
                   group-hover:shadow-[0_0_20px_rgba(34,211,238,.15)]"
          >

            <!-- Frontend -->

            <svg
              v-if="competence.icon === 'frontend'"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              class="w-6 h-6"
            >

              <rect
                x="3"
                y="4"
                width="18"
                height="16"
                rx="2"
                stroke-width="1.8"
              />

              <path
                d="M3 9h18"
                stroke-width="1.8"
              />

              <path
                d="M8 13l-2 2 2 2
                   M12 17h4"
                stroke-width="1.8"
                stroke-linecap="round"
                stroke-linejoin="round"
              />

            </svg>


            <!-- Backend -->

            <svg
              v-else-if="competence.icon === 'backend'"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              class="w-6 h-6"
            >

              <path
                d="M12 3v4
                   M12 17v4
                   M3 12h4
                   M17 12h4"
                stroke-width="1.8"
                stroke-linecap="round"
              />

              <circle
                cx="12"
                cy="12"
                r="4"
                stroke-width="1.8"
              />

              <path
                d="M5.6 5.6l2.8 2.8
                   M15.6 15.6l2.8 2.8
                   M18.4 5.6l-2.8 2.8
                   M8.4 15.6l-2.8 2.8"
                stroke-width="1.5"
                stroke-linecap="round"
              />

            </svg>


            <!-- Base de données -->

            <svg
              v-else-if="competence.icon === 'database'"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              class="w-6 h-6"
            >

              <ellipse
                cx="12"
                cy="5"
                rx="7"
                ry="3"
                stroke-width="1.8"
              />

              <path
                d="M5 5v7c0 1.7 3.1 3 7 3
                   s7-1.3 7-3V5"
                stroke-width="1.8"
              />

              <path
                d="M5 12v7c0 1.7 3.1 3 7 3
                   s7-1.3 7-3v-7"
                stroke-width="1.8"
              />

            </svg>


            <!-- Outils -->

            <svg
              v-else
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              class="w-6 h-6"
            >

              <path
                d="M4 7h16
                   M4 12h16
                   M4 17h16"
                stroke-width="1.8"
                stroke-linecap="round"
              />

              <circle
                cx="8"
                cy="7"
                r="1.5"
                fill="currentColor"
                stroke="none"
              />

              <circle
                cx="15"
                cy="12"
                r="1.5"
                fill="currentColor"
                stroke="none"
              />

              <circle
                cx="10"
                cy="17"
                r="1.5"
                fill="currentColor"
                stroke="none"
              />

            </svg>

          </div>


          <!-- ================= Nom ================= -->

          <h3 class="text-xl font-bold mb-3">
            {{ competence.nom }}
          </h3>


          <!-- ================= Description ================= -->

          <p class="text-gray-400 text-sm leading-relaxed">
            {{ competence.description }}
          </p>


          <!-- ================= Technologies ================= -->

          <div class="flex flex-wrap gap-2 mt-6">

            <span
              v-for="tech in competence.technologies"
              :key="tech"
              class="px-2.5 py-1.5
                     rounded-full
                     text-xs
                     text-cyan-300
                     bg-cyan-400/6
                     border border-cyan-400/12
                     transition-all duration-300
                     hover:text-white
                     hover:bg-cyan-400/12
                     hover:border-cyan-400/30"
            >
              {{ tech }}
            </span>

          </div>

        </div>

      </div>


      <!-- ================= Message final ================= -->

      <div class="flex justify-center mt-14">

        <div
          class="flex items-center gap-3
                 px-5 py-3
                 rounded-full
                 border border-cyan-400/10
                 bg-cyan-400/[0.03]"
        >

          <!-- Indicateur -->

          <span
            class="w-2 h-2 rounded-full
                   bg-cyan-400
                   shadow-[0_0_8px_#22d3ee,0_0_16px_rgba(34,211,238,.6)]
                   animate-pulse"
          ></span>

          <span class="text-sm text-gray-400">
            Toujours en apprentissage et en évolution
          </span>

        </div>

      </div>

    </div>

  </section>
</template>


<script setup>

// Liste des compétences du développeur

const competences = [

  {
    nom: 'Frontend',
    icon: 'frontend',

    description:
      'Création d’interfaces modernes, responsives et interactives.',

    technologies: [
      'HTML',
      'CSS',
      'JavaScript',
      'Vue.js',
      'Tailwind CSS'
    ]
  },


  {
    nom: 'Backend',
    icon: 'backend',

    description:
      'Développement d’API et de services web robustes et évolutifs.',

    technologies: [
      'Django',
      'PHP'
    ]
  },


  {
    nom: 'Base de données',
    icon: 'database',

    description:
      'Conception et gestion de bases de données adaptées aux applications.',

    technologies: [
      'MySQL',
      'SQL'
    ]
  },


  {
    nom: 'Outils',
    icon: 'tools',

    description:
      'Utilisation des outils modernes pour développer et maintenir les projets.',

    technologies: [
      'Git',
      'GitHub',
      'Postman',
      'Vite',
      'Xampp'
    ]
  }

]

</script>