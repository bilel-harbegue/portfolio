<template>

  <!-- ================= SECTION PRÉSENTATION ================= -->
  <section
    class="relative py-24 bg-[#050816] text-white overflow-hidden"
  >

    <!-- Effets lumineux en arrière-plan -->
    <div
      class="absolute top-20 left-0 w-72 h-72
             bg-cyan-500/10 rounded-full blur-[120px]"
    ></div>

    <div
      class="absolute bottom-0 right-0 w-80 h-80
             bg-violet-600/10 rounded-full blur-[120px]"
    ></div>


    <!-- ================= CONTAINER ================= -->

    <div class="relative z-10 max-w-7xl mx-auto px-6">


      <!-- ================= TITRE ================= -->

      <div class="text-center mb-16">

        <p class="text-cyan-400 font-medium mb-3 tracking-wide">
          À propos de moi
        </p>

        <h2 class="text-4xl md:text-5xl font-bold">
          Présentation
        </h2>

        <!-- Ligne décorative -->
        <div
          class="w-20 h-1 mx-auto mt-5 rounded-full
                 bg-gradient-to-r from-cyan-400 to-violet-500"
        ></div>

      </div>


      <!-- ================= CONTENU PRINCIPAL ================= -->

      <div class="grid lg:grid-cols-2 gap-14 items-center">


        <!-- ================= TEXTE ================= -->

        <div>

          <h3
            class="text-2xl md:text-3xl font-bold
                   mb-6 leading-tight"
          >

            Je transforme les idées en

            <span class="text-cyan-400">
              solutions digitales.
            </span>

          </h3>


          <!-- Présentation personnelle -->
          <p class="text-gray-400 leading-relaxed mb-5">

            Je suis un développeur Full-Stack passionné par
            la conception et le développement d'applications web
            modernes et performantes.

          </p>


          <p class="text-gray-400 leading-relaxed mb-8">

            J'aime transformer des besoins réels en solutions
            simples, efficaces et intuitives, en combinant
            développement, design et nouvelles technologies.

          </p>


          <!-- ================= INFORMATIONS ================= -->

          <div class="grid sm:grid-cols-2 gap-4">


            <!-- Profil -->
            <div
              class="flex items-center gap-3.5 p-4 rounded-2xl
                     border border-cyan-400/10
                     bg-[#08101f]/70
                     transition duration-300
                     hover:-translate-y-1
                     hover:border-cyan-400/40
                     hover:shadow-[0_0_25px_rgba(34,211,238,.08)]"
            >

              <!-- Icône -->
              <div
                class="w-[42px] h-[42px] shrink-0
                       flex items-center justify-center
                       rounded-xl
                       text-cyan-400
                       bg-gradient-to-br
                       from-cyan-400/12 to-violet-500/12
                       border border-cyan-400/15
                       transition duration-300
                       group-hover:scale-105"
              >

                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  class="w-[21px] h-[21px]"
                >

                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.8"
                    d="M15.5 21a6.5 6.5 0 0 0-13 0
                       M9 11a4 4 0 1 0 0-8
                       4 4 0 0 0 0 8Z"
                  />

                </svg>

              </div>


              <div>

                <span
                  class="block text-cyan-400
                         text-xs mb-0.5"
                >
                  Profil
                </span>

                <span
                  class="block text-gray-300 text-sm"
                >
                  Développeur Full-Stack
                </span>

              </div>

            </div>


            <!-- Spécialité -->
            <div
              class="flex items-center gap-3.5 p-4 rounded-2xl
                     border border-cyan-400/10
                     bg-[#08101f]/70
                     transition duration-300
                     hover:-translate-y-1
                     hover:border-cyan-400/40
                     hover:shadow-[0_0_25px_rgba(34,211,238,.08)]"
            >

              <div
                class="w-[42px] h-[42px] shrink-0
                       flex items-center justify-center
                       rounded-xl
                       text-cyan-400
                       bg-gradient-to-br
                       from-cyan-400/12 to-violet-500/12
                       border border-cyan-400/15
                       transition duration-300
                       hover:scale-105"
              >

                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  class="w-[21px] h-[21px]"
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
                    d="M8 9l3 3-3 3
                       M13 15h3"
                    stroke-width="1.8"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />

                </svg>

              </div>


              <div>

                <span
                  class="block text-cyan-400
                         text-xs mb-0.5"
                >
                  Spécialité
                </span>

                <span
                  class="block text-gray-300 text-sm"
                >
                  Applications Web
                </span>

              </div>

            </div>


            <!-- Technologies -->
            <div
              class="flex items-center gap-3.5 p-4 rounded-2xl
                     border border-cyan-400/10
                     bg-[#08101f]/70
                     transition duration-300
                     hover:-translate-y-1
                     hover:border-cyan-400/40
                     hover:shadow-[0_0_25px_rgba(34,211,238,.08)]"
            >

              <div
                class="w-[42px] h-[42px] shrink-0
                       flex items-center justify-center
                       rounded-xl
                       text-cyan-400
                       bg-gradient-to-br
                       from-cyan-400/12 to-violet-500/12
                       border border-cyan-400/15
                       transition duration-300
                       hover:scale-105"
              >

                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  class="w-[21px] h-[21px]"
                >

                  <path
                    stroke-width="1.8"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M8 7 3 12l5 5
                       M16 7l5 5-5 5
                       M14 4l-4 16"
                  />

                </svg>

              </div>


              <div>

                <span
                  class="block text-cyan-400
                         text-xs mb-0.5"
                >
                  Technologies
                </span>

                <span
                  class="block text-gray-300 text-sm"
                >
                  Vue.js · Django
                </span>

              </div>

            </div>


            <!-- Approche -->
            <div
              class="flex items-center gap-3.5 p-4 rounded-2xl
                     border border-cyan-400/10
                     bg-[#08101f]/70
                     transition duration-300
                     hover:-translate-y-1
                     hover:border-cyan-400/40
                     hover:shadow-[0_0_25px_rgba(34,211,238,.08)]"
            >

              <div
                class="w-[42px] h-[42px] shrink-0
                       flex items-center justify-center
                       rounded-xl
                       text-cyan-400
                       bg-gradient-to-br
                       from-cyan-400/12 to-violet-500/12
                       border border-cyan-400/15
                       transition duration-300
                       hover:scale-105"
              >

                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  class="w-[21px] h-[21px]"
                >

                  <circle
                    cx="12"
                    cy="12"
                    r="8"
                    stroke-width="1.8"
                  />

                  <path
                    stroke-width="1.8"
                    stroke-linecap="round"
                    d="M12 8v8
                       M8 12h8"
                  />

                </svg>

              </div>


              <div>

                <span
                  class="block text-cyan-400
                         text-xs mb-0.5"
                >
                  Approche
                </span>

                <span
                  class="block text-gray-300 text-sm"
                >
                  Moderne & orientée solution
                </span>

              </div>

            </div>

          </div>

        </div>


        <!-- ================= CARTE VISUELLE ================= -->

        <div class="flex justify-center">

          <div
            class="relative w-full max-w-md p-8 rounded-3xl
                   border border-cyan-400/20
                   bg-[#08101f]/80
                   backdrop-blur-xl
                   shadow-[0_0_50px_rgba(34,211,238,0.08)]
                   hover:border-cyan-400/40
                   transition-all duration-500"
          >

            <!-- Glow de la carte -->
            <div
              class="absolute -top-10 -right-10
                     w-32 h-32
                     bg-cyan-400/10
                     rounded-full blur-3xl"
            ></div>


            <div class="relative">


              <!-- Icône principale -->
              <div
                class="w-16 h-16 mb-6
                       flex items-center justify-center
                       rounded-2xl
                       bg-gradient-to-br
                       from-cyan-400/20
                       to-violet-500/20
                       border border-cyan-400/20
                       text-cyan-400
                       shadow-[0_0_25px_rgba(34,211,238,.12)]"
              >

                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  class="w-8 h-8"
                >

                  <path
                    d="m8 9-4 3 4 3
                       M16 9l4 3-4 3
                       M14 5l-4 14"
                    stroke-width="1.8"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />

                </svg>

              </div>


              <!-- Titre -->
              <h3 class="text-2xl font-bold mb-4">
                Full-Stack Developer
              </h3>


              <!-- Description -->
              <p class="text-gray-400 leading-relaxed">

                Du frontend au backend, je développe des
                applications complètes avec une attention
                particulière portée à l'expérience utilisateur,
                aux performances et à la qualité du code.

              </p>


              <!-- Technologies -->
              <div class="flex flex-wrap gap-3 mt-8">

                <span
                  class="px-3 py-1.5 rounded-full
                         bg-cyan-400/8
                         border border-cyan-400/15
                         text-cyan-300 text-[13px]
                         transition duration-300
                         hover:-translate-y-0.5
                         hover:bg-cyan-400/14
                         hover:border-cyan-400/35
                         hover:shadow-[0_0_15px_rgba(34,211,238,.12)]"
                >
                  Vue.js
                </span>

                <span
                  class="px-3 py-1.5 rounded-full
                         bg-cyan-400/8
                         border border-cyan-400/15
                         text-cyan-300 text-[13px]
                         transition duration-300
                         hover:-translate-y-0.5
                         hover:bg-cyan-400/14
                         hover:border-cyan-400/35
                         hover:shadow-[0_0_15px_rgba(34,211,238,.12)]"
                >
                Tailwind css
                </span>

                <span
                  class="px-3 py-1.5 rounded-full
                         bg-cyan-400/8
                         border border-cyan-400/15
                         text-cyan-300 text-[13px]
                         transition duration-300
                         hover:-translate-y-0.5
                         hover:bg-cyan-400/14
                         hover:border-cyan-400/35
                         hover:shadow-[0_0_15px_rgba(34,211,238,.12)]"
                >
                Django
                </span>

                <span
                  class="px-3 py-1.5 rounded-full
                         bg-cyan-400/8
                         border border-cyan-400/15
                         text-cyan-300 text-[13px]
                         transition duration-300
                         hover:-translate-y-0.5
                         hover:bg-cyan-400/14
                         hover:border-cyan-400/35
                         hover:shadow-[0_0_15px_rgba(34,211,238,.12)]"
                >
                  SQL
                </span>

              </div>


              <!-- Ligne décorative -->
              <div
                class="mt-8 h-px w-full
                       bg-gradient-to-r
                       from-transparent
                       via-cyan-400/30
                       to-transparent"
              ></div>


              <!-- Disponibilité -->
              <div class="flex items-center gap-3 mt-6">

                <span
                  class="w-2 h-2 rounded-full
                         bg-cyan-400
                         shadow-[0_0_8px_#22d3ee]
                         animate-pulse"
                ></span>

                <span class="text-sm text-gray-400">
                  Disponible pour de nouveaux projets
                </span>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>

  </section>

</template>