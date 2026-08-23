<template>
  <main class="min-h-screen bg-[#050816] text-white pt-20">

    <!-- ================================================= -->
    <!-- HERO -->
    <!-- ================================================= -->

    <section class="relative py-20 overflow-hidden">

      <div
        class="absolute -top-20 -left-20 w-80 h-80
               bg-cyan-500/10 rounded-full blur-[120px]"
      ></div>

      <div
        class="absolute bottom-0 -right-20 w-80 h-80
               bg-violet-600/10 rounded-full blur-[120px]"
      ></div>

      <div class="relative z-10 max-w-7xl mx-auto px-6">

        <div class="grid lg:grid-cols-[1.5fr_.8fr] gap-12 items-center">

          <!-- INTRO -->

          <div>

            <p class="text-cyan-400 font-medium mb-4">
              Mon parcours professionnel
            </p>

            <h1 class="text-5xl md:text-6xl font-extrabold leading-tight">
              Curriculum

              <span
                class="block text-transparent bg-clip-text
                       bg-gradient-to-r from-cyan-400 to-violet-500"
              >
                Vitae
              </span>
            </h1>

            <p
              class="mt-6 max-w-2xl text-gray-400
                     text-lg leading-relaxed"
            >
              Diplômé en Licence Appliquée en Technologies de l’Information,
              actuellement en Cycle d’Ingénieur en Informatique.
              Passionné par le développement web et les technologies numériques,
              avec une expérience acquise à travers des stages, des projets
              académiques et une formation Full Stack.
            </p>

            <div class="flex flex-wrap gap-4 mt-8">

              <!-- Télécharger CV -->

              <a
                :href="cvPDF"
                download="Bilel_Harbegue_CV.pdf"
                class="px-7 py-3 rounded-full
                       bg-gradient-to-r from-cyan-400 to-violet-500
                       font-semibold transition
                       hover:scale-105
                       hover:shadow-[0_0_30px_#22d3ee]"
              >
                Télécharger mon CV
              </a>

              <!-- Contact -->

              <RouterLink
                to="/contact"
                class="px-7 py-3 rounded-full
                       border border-cyan-400/40
                       text-cyan-400 font-semibold
                       transition
                       hover:bg-cyan-400
                       hover:text-[#050816]"
              >
                Me contacter
              </RouterLink>

            </div>

          </div>


          <!-- PROFILE -->

          <div
            class="p-8 rounded-3xl
                   bg-[#08101f]/75
                   border border-cyan-400/20
                   backdrop-blur-xl
                   transition duration-300
                   hover:-translate-y-2
                   hover:border-cyan-400/40"
          >

            <div
              class="w-16 h-16 flex items-center justify-center mb-6
                     rounded-2xl
                     bg-cyan-400/10
                     border border-cyan-400/20
                     text-cyan-400"
            >

              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.7"
                class="w-8 h-8"
              >
                <circle cx="12" cy="8" r="4"/>
                <path d="M4 21c0-4 3.5-7 8-7s8 3 8 7"/>
              </svg>

            </div>

            <h2 class="text-2xl font-bold">
              Harbegue Bilel
            </h2>

            <p class="text-cyan-400 mt-2">
              Full-Stack Developer
            </p>

            <div
              class="h-px my-6
                     bg-gradient-to-r
                     from-transparent
                     via-cyan-400/40
                     to-transparent"
            ></div>

            <div class="space-y-4 text-sm">

              <div class="flex justify-between gap-4">
                <span class="text-gray-500">
                  Formation
                </span>

                <span>
                  Cycle d’Ingénieur
                </span>
              </div>

              <div class="flex justify-between gap-4">
                <span class="text-gray-500">
                  Spécialité
                </span>

                <span>
                  Développement Web
                </span>
              </div>

              <div class="flex justify-between gap-4">
                <span class="text-gray-500">
                  Expérience
                </span>

                <span>
                  Stages & Projets
                </span>
              </div>

              <div class="flex justify-between gap-4">
                <span class="text-gray-500">
                  Localisation
                </span>

                <span>
                  Tunisie
                </span>
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>


    <!-- ================================================= -->
    <!-- FORMATION -->
    <!-- ================================================= -->

    <section class="py-20">

      <div class="max-w-6xl mx-auto px-6">

        <!-- TITRE -->

        <div class="text-center mb-14">

          <p class="text-cyan-400 text-sm font-medium mb-2">
            Mon parcours académique
          </p>

          <h2 class="text-4xl md:text-5xl font-extrabold">
            Formation & Parcours académique
          </h2>

          <div
            class="w-20 h-1 mx-auto mt-5 rounded-full
                   bg-gradient-to-r from-cyan-400 to-violet-500"
          ></div>

        </div>


        <div class="space-y-6">

          <div
            v-for="formation in formations"
            :key="formation.id"
            class="relative pl-8 border-l border-cyan-400/20"
          >

            <span
              class="absolute -left-[7px] top-7
                     w-3 h-3 rounded-full
                     bg-cyan-400
                     shadow-[0_0_15px_#22d3ee]"
            ></span>


            <div
              class="p-7 rounded-2xl
                     bg-[#08101f]/70
                     border border-cyan-400/10
                     transition duration-300
                     hover:-translate-y-1
                     hover:border-cyan-400/30"
            >

              <div class="flex flex-wrap justify-between gap-3">

                <span class="text-cyan-400 text-sm font-semibold">
                  {{ formation.date }}
                </span>

                <span
                  class="px-3 py-1 rounded-full
                         bg-white/[.03]
                         border border-white/5
                         text-gray-500 text-xs"
                >
                  {{ formation.type }}
                </span>

              </div>


              <h3 class="text-xl font-bold mt-4">
                {{ formation.title }}
              </h3>

              <p class="text-cyan-300/80 mt-2">
                {{ formation.place }}
              </p>


              <Transition name="details">

                <div
                  v-if="formation.open"
                  class="mt-5 pt-5 border-t border-white/5"
                >

                  <div class="flex gap-3">

                    <div
                      class="w-8 h-8 shrink-0
                             flex items-center justify-center
                             rounded-lg
                             bg-cyan-400/10
                             text-cyan-400"
                    >

                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="1.7"
                        class="w-4 h-4"
                      >
                        <circle cx="12" cy="12" r="9"/>
                        <path d="M12 11v5"/>
                        <path d="M12 8h.01"/>
                      </svg>

                    </div>

                    <p class="text-gray-400 leading-relaxed">
                      {{ formation.description }}
                    </p>

                  </div>


                  <!-- CERTIFICAT -->

                  <a
                    v-if="formation.certificate"
                    :href="formation.certificate"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="inline-flex items-center gap-2 mt-5
                           px-4 py-2 rounded-lg
                           border border-cyan-400/20
                           bg-cyan-400/5
                           text-cyan-400 text-sm
                           transition
                           hover:bg-cyan-400/10
                           hover:border-cyan-400/40"
                  >

                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="1.7"
                      class="w-4 h-4"
                    >
                      <path
                        d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
                      />

                      <path d="M14 2v6h6"/>
                      <path d="M8 13h8"/>
                      <path d="M8 17h5"/>
                    </svg>

                    Voir le certificat PDF

                  </a>

                </div>

              </Transition>


              <button
                type="button"
                @click="toggleFormation(formation)"
                class="mt-6 group flex items-center gap-2
                       text-cyan-400 text-sm font-medium
                       hover:text-cyan-300 transition"
              >

                <span>
                  {{ formation.open ? 'Réduire' : 'Voir les détails' }}
                </span>

                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  class="w-4 h-4 transition-transform duration-300"
                  :class="formation.open ? 'rotate-180' : ''"
                >
                  <path d="m6 9 6 6 6-6"/>
                </svg>

              </button>

            </div>

          </div>

        </div>

      </div>

    </section>


    <!-- ================================================= -->
    <!-- EXPERIENCES -->
    <!-- ================================================= -->

    <section class="py-20 bg-[#060a19]">

      <div class="max-w-6xl mx-auto px-6">

        <div class="text-center mb-14">

          <p class="text-cyan-400 text-sm font-medium mb-2">
            Mon expérience professionnelle
          </p>

          <h2 class="text-4xl md:text-5xl font-extrabold">
            Expériences professionnelles
          </h2>

          <div
            class="w-20 h-1 mx-auto mt-5 rounded-full
                   bg-gradient-to-r from-cyan-400 to-violet-500"
          ></div>

        </div>


        <div
          class="grid lg:grid-cols-2 gap-6
                 items-start"
        >

          <div
            v-for="experience in experiences"
            :key="experience.id"
            class="group p-7 rounded-2xl
                   bg-[#08101f]/75
                   border border-cyan-400/10
                   transition duration-300
                   hover:-translate-y-2
                   hover:border-cyan-400/30"
          >

            <div class="flex justify-between items-center">

              <span class="text-cyan-400 text-sm font-semibold">
                {{ experience.date }}
              </span>

              <span class="text-gray-600 text-sm">
                {{ experience.number }}
              </span>

            </div>


            <h3 class="text-2xl font-bold mt-5">
              {{ experience.title }}
            </h3>

            <p class="text-cyan-300 mt-2">
              {{ experience.company }}
            </p>

            <p
              v-if="experience.role"
              class="text-gray-500 text-sm mt-3"
            >
              {{ experience.role }}
            </p>


            <Transition name="details">

              <div
                v-if="experience.open"
                class="mt-5 pt-5 border-t border-white/5"
              >

                <p class="text-gray-400 leading-relaxed">
                  {{ experience.description }}
                </p>


                <div class="flex flex-wrap gap-2 mt-5">

                  <span
                    v-for="tech in experience.technologies"
                    :key="tech"
                    class="px-3 py-1.5 rounded-full
                           text-xs text-cyan-300
                           bg-cyan-400/5
                           border border-cyan-400/15"
                  >
                    {{ tech }}
                  </span>

                </div>


                <RouterLink
                  to="/portfolio"
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
                  Voir le projet
                </RouterLink>

              </div>

            </Transition>


            <button
              type="button"
              @click="toggleExperience(experience)"
              class="mt-6 group flex items-center gap-2
                     text-cyan-400 text-sm font-medium
                     hover:text-cyan-300 transition"
            >

              <span>
                {{ experience.open ? 'Réduire' : 'Voir les détails' }}
              </span>

              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                class="w-4 h-4 transition-transform duration-300"
                :class="experience.open ? 'rotate-180' : ''"
              >
                <path d="m6 9 6 6-6"/>
              </svg>

            </button>

          </div>

        </div>

      </div>

    </section>


    <!-- ================================================= -->
    <!-- COMPETENCES -->
    <!-- ================================================= -->

    <section class="py-20">

      <div class="max-w-6xl mx-auto px-6">

        <div class="text-center mb-14">

          <p class="text-cyan-400 text-sm font-medium mb-2">
            Technologies & outils
          </p>

          <h2 class="text-4xl md:text-5xl font-extrabold">
            Compétences techniques
          </h2>

          <div
            class="w-20 h-1 mx-auto mt-5 rounded-full
                   bg-gradient-to-r from-cyan-400 to-violet-500"
          ></div>

        </div>


        <div class="grid md:grid-cols-2 gap-6">

          <div
            v-for="skill in skills"
            :key="skill.title"
            class="group p-7 rounded-2xl
                   bg-[#08101f]/70
                   border border-cyan-400/10
                   transition duration-300
                   hover:-translate-y-2
                   hover:border-cyan-400/30"
          >

            <div class="flex items-center gap-4 mb-6">

              <!-- FRONTEND -->

              <div
                v-if="skill.icon === 'frontend'"
                class="w-14 h-14 flex items-center justify-center
                       rounded-2xl
                       bg-cyan-400/10
                       border border-cyan-400/15
                       text-cyan-400"
              >

                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.7"
                  class="w-7 h-7"
                >
                  <rect x="3" y="4" width="18" height="14" rx="2"/>
                  <path d="M8 21h8M12 18v3"/>
                </svg>

              </div>


              <!-- BACKEND -->

              <div
                v-else-if="skill.icon === 'backend'"
                class="w-14 h-14 flex items-center justify-center
                       rounded-2xl
                       bg-cyan-400/10
                       border border-cyan-400/15
                       text-cyan-400"
              >

                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.7"
                  class="w-7 h-7"
                >
                  <rect x="4" y="4" width="16" height="6" rx="2"/>
                  <rect x="4" y="14" width="16" height="6" rx="2"/>
                  <path d="M8 7h.01M8 17h.01"/>
                </svg>

              </div>


              <!-- DATABASE -->

              <div
                v-else-if="skill.icon === 'database'"
                class="w-14 h-14 flex items-center justify-center
                       rounded-2xl
                       bg-cyan-400/10
                       border border-cyan-400/15
                       text-cyan-400"
              >

                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.7"
                  class="w-7 h-7"
                >
                  <ellipse cx="12" cy="5" rx="8" ry="3"/>
                  <path d="M4 5v7c0 2 3.6 3 8 3s8-1 8-3V5"/>
                  <path d="M4 12v7c0 2 3.6 3 8 3s8-1 8-3v-7"/>
                </svg>

              </div>


              <!-- TOOLS -->

              <div
                v-else
                class="w-14 h-14 flex items-center justify-center
                       rounded-2xl
                       bg-cyan-400/10
                       border border-cyan-400/15
                       text-cyan-400"
              >

                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.7"
                  class="w-7 h-7"
                >
                  <path
                    d="M14.7 6.3a4 4 0 0 0-5.4 5.4L4 17v3h3l5.3-5.3a4 4 0 0 0 5.4-5.4l-2.1 2.1-2.2-2.2 2.1-2.1Z"
                  />
                </svg>

              </div>


              <div>

                <h3 class="font-bold text-lg">
                  {{ skill.title }}
                </h3>

                <p class="text-gray-500 text-xs mt-1">
                  {{ skill.level }}
                </p>

              </div>

            </div>


            <div class="flex flex-wrap gap-2">

              <span
                v-for="item in skill.items"
                :key="item"
                class="px-3 py-1.5 rounded-lg
                       bg-white/[.03]
                       border border-white/5
                       text-gray-300 text-xs
                       transition
                       group-hover:border-cyan-400/10"
              >
                {{ item }}
              </span>

            </div>

          </div>

        </div>

      </div>

    </section>


    <!-- ================================================= -->
    <!-- QUALITES -->
    <!-- ================================================= -->

    <section class="py-20 bg-[#060a19]">

      <div class="max-w-6xl mx-auto px-6">

        <div class="text-center mb-14">

          <p class="text-cyan-400 text-sm font-medium mb-2">
            Mes points forts
          </p>

          <h2 class="text-4xl md:text-5xl font-extrabold">
            Qualités professionnelles
          </h2>

          <div
            class="w-20 h-1 mx-auto mt-5 rounded-full
                   bg-gradient-to-r from-cyan-400 to-violet-500"
          ></div>

        </div>


        <div class="grid md:grid-cols-3 gap-5">

          <div
            v-for="quality in qualities"
            :key="quality.title"
            class="p-7 text-center rounded-2xl
                   bg-[#08101f]/70
                   border border-cyan-400/10
                   transition duration-300
                   hover:-translate-y-2
                   hover:border-cyan-400/30"
          >

            <div
              class="w-14 h-14 mx-auto mb-5
                     flex items-center justify-center
                     rounded-2xl
                     bg-cyan-400/10
                     border border-cyan-400/15
                     text-cyan-400"
            >

              <svg
                v-if="quality.icon === 'analysis'"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.7"
                class="w-7 h-7"
              >
                <circle cx="11" cy="11" r="7"/>
                <path d="m20 20-4-4"/>
                <path d="M11 8v6M8 11h6"/>
              </svg>


              <svg
                v-else-if="quality.icon === 'team'"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.7"
                class="w-7 h-7"
              >
                <circle cx="9" cy="8" r="3"/>
                <circle cx="17" cy="9" r="2.5"/>
                <path d="M3 20c0-3.5 2.5-6 6-6s6 2.5 6 6"/>
                <path d="M15 15c3 0 5 2 5 5"/>
              </svg>


              <svg
                v-else
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.7"
                class="w-7 h-7"
              >
                <path d="M4 6h16M4 12h16M4 18h10"/>
                <circle cx="18" cy="18" r="2"/>
              </svg>

            </div>

            <h3 class="font-bold text-lg">
              {{ quality.title }}
            </h3>

            <p
              class="text-gray-400 text-sm
                     leading-relaxed mt-3"
            >
              {{ quality.description }}
            </p>

          </div>

        </div>

      </div>

    </section>


    <!-- ================================================= -->
    <!-- LANGUES -->
    <!-- ================================================= -->

    <section class="py-20">

      <div class="max-w-6xl mx-auto px-6">

        <div class="text-center mb-14">

          <p class="text-cyan-400 text-sm font-medium mb-2">
            Communication
          </p>

          <h2 class="text-4xl md:text-5xl font-extrabold">
            Langues
          </h2>

          <div
            class="w-20 h-1 mx-auto mt-5 rounded-full
                   bg-gradient-to-r from-cyan-400 to-violet-500"
          ></div>

        </div>


        <div class="grid md:grid-cols-3 gap-6">

          <div
            v-for="language in languages"
            :key="language.name"
            class="relative overflow-hidden
                   group p-7 rounded-2xl
                   bg-[#08101f]/70
                   border border-cyan-400/10
                   transition duration-300
                   hover:-translate-y-2
                   hover:border-cyan-400/30"
          >

            <div
              class="absolute -right-10 -top-10
                     w-24 h-24 rounded-full
                     bg-cyan-400/10 blur-2xl"
            ></div>

            <div class="relative">

              <div
                class="flex items-center
                       justify-between gap-3"
              >

                <h3 class="text-xl font-bold">
                  {{ language.name }}
                </h3>

                <span
                  class="text-xs px-3 py-1
                         rounded-full
                         bg-cyan-400/10
                         text-cyan-300
                         border border-cyan-400/10"
                >
                  {{ language.level }}
                </span>

              </div>

              <p class="text-gray-500 text-sm mt-3">
                Niveau de communication
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>


    <!-- ================================================= -->
    <!-- CENTRES D'INTERET -->
    <!-- ================================================= -->

    <section class="py-20 bg-[#060a19]">

      <div class="max-w-6xl mx-auto px-6">

        <div class="text-center mb-14">

          <p class="text-cyan-400 text-sm font-medium mb-2">
            Au-delà du développement
          </p>

          <h2 class="text-4xl md:text-5xl font-extrabold">
            Centres d’intérêt
          </h2>

          <div
            class="w-20 h-1 mx-auto mt-5 rounded-full
                   bg-gradient-to-r from-cyan-400 to-violet-500"
          ></div>

        </div>


        <div
          class="grid sm:grid-cols-2
                 lg:grid-cols-4 gap-5"
        >

          <div
            v-for="interest in interests"
            :key="interest.title"
            class="group p-6 rounded-2xl
                   bg-[#08101f]/70
                   border border-cyan-400/10
                   transition duration-300
                   hover:-translate-y-2
                   hover:border-cyan-400/30"
          >

            <div
              class="w-12 h-12 rounded-xl
                     flex items-center justify-center
                     bg-cyan-400/10
                     border border-cyan-400/15
                     text-cyan-400
                     mb-5"
            >

              <svg
                v-if="interest.icon === 'search'"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.7"
                class="w-6 h-6"
              >
                <circle cx="11" cy="11" r="7"/>
                <path d="m20 20-4-4"/>
              </svg>


              <svg
                v-else-if="interest.icon === 'code'"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.7"
                class="w-6 h-6"
              >
                <path d="m8 9-4 3 4 3"/>
                <path d="m16 9 4 3-4 3"/>
                <path d="m14 5-4 14"/>
              </svg>


              <svg
                v-else-if="interest.icon === 'idea'"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.7"
                class="w-6 h-6"
              >
                <path d="M9 18h6"/>
                <path d="M10 22h4"/>
                <path
                  d="M8 14a6 6 0 1 1 8 0
                     c-1 1-2 2-2 4H10
                     c0-2-1-3-2-4Z"
                />
              </svg>


              <svg
                v-else
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.7"
                class="w-6 h-6"
              >
                <path d="M3 12a9 9 0 1 0 3-6.7"/>
                <path d="M3 4v5h5"/>
                <path d="M12 7v5l3 2"/>
              </svg>

            </div>


            <h3 class="font-bold">
              {{ interest.title }}
            </h3>

            <p
              class="text-gray-500 text-sm
                     mt-2 leading-relaxed"
            >
              {{ interest.description }}
            </p>

          </div>

        </div>

      </div>

    </section>


    <!-- ================================================= -->
    <!-- CTA -->
    <!-- ================================================= -->

    <section class="py-20">

      <div class="max-w-4xl mx-auto px-6">

        <div
          class="relative text-center
                 p-10 md:p-14
                 rounded-3xl
                 bg-[#08101f]/80
                 border border-cyan-400/20
                 backdrop-blur-xl
                 overflow-hidden"
        >

          <div
            class="absolute -top-20 left-1/2
                   -translate-x-1/2
                   w-72 h-40
                   bg-cyan-400/10
                   rounded-full blur-[80px]"
          ></div>


          <div class="relative z-10">

            <p class="text-cyan-400 font-medium mb-3">
              Une opportunité ?
            </p>

            <h2 class="text-3xl md:text-4xl font-bold">

              Travaillons

              <span
                class="text-transparent bg-clip-text
                       bg-gradient-to-r
                       from-cyan-400 to-violet-500"
              >
                ensemble.
              </span>

            </h2>

            <p class="text-gray-400 max-w-xl mx-auto mt-5">
              Vous recherchez un développeur web pour votre prochain
              projet ? N’hésitez pas à me contacter.
            </p>

            <RouterLink
              to="/contact"
              class="inline-flex mt-8 px-7 py-3
                     rounded-full
                     bg-gradient-to-r
                     from-cyan-400 to-violet-500
                     font-semibold transition
                     hover:scale-105
                     hover:shadow-[0_0_30px_#22d3ee]"
            >
              Me contacter
            </RouterLink>

          </div>

        </div>

      </div>

    </section>

  </main>
</template>


<script setup>

import { ref } from 'vue'
import { RouterLink } from 'vue-router'


/* ================================================= */
/* PDF FILES */
/* ================================================= */

/*
  Les fichiers sont dans :

  src/assets/certificates/

  On les importe ici pour que Vite
  gère correctement les chemins.
*/

import cvPDF from '../assets/certificates/bilel_harbegue.pdf'
import fullStackPDF from '../assets/certificates/full-stack.pdf'

// Si tu as ces fichiers, tu peux aussi les importer.
// Pour l'instant ils restent commentés.

/*
import licencePDF from '../assets/certificates/licence.pdf'
import bacPDF from '../assets/certificates/bac.pdf'
*/


/* ================================================= */
/* FORMATION */
/* ================================================= */

const formations = ref([

  {
    id: 1,

    date: '2026 — Aujourd’hui',

    type: 'Cycle d’Ingénieur',

    title: 'Cycle d’Ingénieur en Informatique',

    place: 'Université SESAME — Tunisie',

    description:
      'Poursuite des études en Cycle d’Ingénieur en Informatique, avec un approfondissement des compétences en développement logiciel et technologies numériques.',

    certificate: null,

    open: false
  },


  {
    id: 2,

    date: '2022 — 2025',

    type: 'Licence',

    title:
      'Licence Appliquée en Technologies de l’Information',

    place:
      'Institut Supérieur des Études Technologiques de Zaghouan',

    description:
      'Formation orientée vers les technologies de l’information, le développement logiciel, les bases de données et la conception d’applications.',

    /*
      Pour le moment pas de PDF associé.
      Si tu as licence.pdf, on pourra l'ajouter.
    */

    certificate: null,

    open: false
  },


  {
    id: 3,

    date: '2026',

    type: 'Formation',

    title:
      'Développement Web Full Stack',

    place:
      'Master Class Tunisie — 5 mois',

    description:
      'Formation pratique en développement frontend, backend, bases de données et conception d’applications web.',

    certificate: fullStackPDF,

    open: false
  },


  {
    id: 4,

    date: '2022',

    type: 'Baccalauréat',

    title:
      'Baccalauréat Sciences de l’Informatique',

    place:
      'Lycée Abou Al Kacem Chabbi',

    description:
      'Formation secondaire spécialisée en informatique et technologies numériques.',

    /*
      Pour le moment pas de PDF associé.
      Si tu as bac.pdf, on pourra l'ajouter.
    */

    certificate: null,

    open: false
  }

])


/* ================================================= */
/* TOGGLE FORMATION */
/* ================================================= */

const toggleFormation = (formation) => {

  formation.open = !formation.open

}


/* ================================================= */
/* EXPERIENCES */
/* ================================================= */

const experiences = ref([

  {
    id: 1,

    number: '01',

    date: '2024 · 1 mois',

    title:
      'Stagiaire Développeur Web',

    company:
      'Vikaspace',

    role:
      'Développement web',

    description:
      'Participation au développement d’une application web de gestion de fichiers avec fonctionnalités CRUD, gestion des utilisateurs, permissions et tableau de bord administrateur.',

    technologies: [
      'HTML',
      'CSS',
      'JavaScript',
      'PHP'
    ],

    open: false
  },


  {
    id: 2,

    number: '02',

    date: '2025 · 4 mois',

    title:
      'Projet de Fin d’Études — Travail en binôme',

    company:
      'Centre National d’Informatique — CNI',

    role:
      'Focus principal : Frontend',

    description:
      'Conception et développement, en collaboration avec un autre développeur, d’une plateforme web intelligente de gestion des stages. J’ai principalement pris en charge la conception et le développement du Frontend, l’intégration avec les API Backend et l’interface utilisateur. Le projet intègre également l’automatisation du traitement et de l’affectation des stagiaires avec assistance par intelligence artificielle.',

    technologies: [
      'Vue.js',
      'Spring Boot',
      'PostgreSQL',
      'Python',
      'IA'
    ],

    open: false
  }

])


/* ================================================= */
/* TOGGLE EXPERIENCE */
/* ================================================= */

const toggleExperience = (experience) => {

  experience.open = !experience.open

}


/* ================================================= */
/* COMPETENCES */
/* ================================================= */

const skills = [

  {
    title: 'Front-end',

    icon: 'frontend',

    level:
      'Interface & expérience utilisateur',

    items: [
      'HTML',
      'CSS',
      'JavaScript',
      'Vue.js',
      'Tailwind CSS'
    ]
  },


  {
    title: 'Back-end',

    icon: 'backend',

    level:
      'API & logique serveur',

    items: [
      'PHP',
      'Django',
      'Spring Boot',
      'Python'
    ]
  },


  {
    title: 'Bases de données',

    icon: 'database',

    level:
      'Gestion & conception',

    items: [
      'MySQL',
      'PostgreSQL',
      'SQL'
    ]
  },


  {
    title: 'Outils & Workflow',

    icon: 'tools',

    level:
      'Développement & collaboration',

    items: [
      'Git',
      'GitHub',
      'Postman',
      'XAMPP',
      'Vite'
    ]
  }

]


/* ================================================= */
/* QUALITES */
/* ================================================= */

const qualities = [

  {
    icon: 'analysis',

    title:
      'Analyse des problèmes',

    description:
      'Capacité à analyser les besoins et rechercher des solutions adaptées.'
  },


  {
    icon: 'team',

    title:
      'Travail en équipe',

    description:
      'Collaboration efficace dans un environnement de développement.'
  },


  {
    icon: 'organisation',

    title:
      'Organisation',

    description:
      'Organisation du travail et respect des objectifs et des délais.'
  }

]


/* ================================================= */
/* LANGUES */
/* ================================================= */

const languages = [

  {
    name: 'Arabe',

    level: 'Langue maternelle'
  },


  {
    name: 'Français',

    level: 'Intermédiaire'
  },


  {
    name: 'Anglais',

    level: 'Intermédiaire'
  }

]


/* ================================================= */
/* CENTRES D'INTERET */
/* ================================================= */

const interests = [

  {
    icon: 'search',

    title: 'Recherche',

    description:
      'Recherche d’informations et découverte de nouvelles technologies.'
  },


  {
    icon: 'code',

    title: 'Programmation',

    description:
      'Développement et expérimentation autour de nouvelles idées.'
  },


  {
    icon: 'idea',

    title: 'Création de solutions',

    description:
      'Transformation des besoins en solutions digitales concrètes.'
  },


  {
    icon: 'history',

    title: 'Histoire',

    description:
      'Intérêt pour l’histoire et la découverte des événements du passé.'
  }

]

</script>