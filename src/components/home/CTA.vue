<template>
  <section
    class="relative py-24 bg-[#050816] text-white overflow-hidden"
  >

    <!-- ================= Background ================= -->
    <!-- Effets lumineux en arrière-plan -->

    <div class="absolute inset-0 pointer-events-none">

      <div
        class="absolute top-1/2 left-1/2
               -translate-x-1/2 -translate-y-1/2
               w-[550px] h-[300px]
               bg-cyan-500/10
               rounded-full blur-[120px]"
      ></div>

      <div
        class="absolute top-10 left-10
               w-40 h-40
               bg-violet-600/10
               rounded-full blur-[100px]"
      ></div>

      <div
        class="absolute bottom-0 right-10
               w-48 h-48
               bg-cyan-500/10
               rounded-full blur-[100px]"
      ></div>

    </div>


    <!-- ================= Container ================= -->

    <div class="relative z-10 max-w-5xl mx-auto px-6">

      <!-- CTA Card -->

      <div
        class="group relative text-center
               p-10 sm:p-12 md:p-[60px_40px]
               rounded-[28px]
               bg-[#08101f]/80
               border border-cyan-400/20
               backdrop-blur-xl
               overflow-hidden
               shadow-[0_0_60px_rgba(34,211,238,.05)]
               transition-all duration-500
               hover:border-cyan-400/35
               hover:shadow-[0_0_70px_rgba(34,211,238,.08)]"
      >

        <!-- ================= Decorative Lines ================= -->

        <span
          class="absolute top-6 left-[20%]
                 w-[150px] h-px
                 bg-gradient-to-r
                 from-transparent
                 via-cyan-400/50
                 to-transparent
                 opacity-60"
        ></span>

        <span
          class="absolute bottom-6 right-[20%]
                 w-[150px] h-px
                 bg-gradient-to-r
                 from-transparent
                 via-cyan-400/50
                 to-transparent
                 opacity-60"
        ></span>


        <!-- ================= Floating Dots ================= -->

        <span
          class="absolute top-[25%] left-[10%]
                 w-[5px] h-[5px]
                 rounded-full
                 bg-cyan-400
                 shadow-[0_0_8px_#22d3ee,0_0_18px_rgba(34,211,238,.5)]
                 animate-bounce"
        ></span>

        <span
          class="absolute top-[20%] right-[12%]
                 w-[5px] h-[5px]
                 rounded-full
                 bg-violet-500
                 shadow-[0_0_8px_#8b5cf6]
                 animate-pulse"
        ></span>

        <span
          class="absolute bottom-[20%] left-[18%]
                 w-[5px] h-[5px]
                 rounded-full
                 bg-cyan-400
                 shadow-[0_0_8px_#22d3ee,0_0_18px_rgba(34,211,238,.5)]
                 animate-bounce"
        ></span>


        <!-- ================= Icon ================= -->

        <div
          class="w-[58px] h-[58px]
                 mx-auto mb-[22px]
                 flex items-center justify-center
                 rounded-[18px]
                 text-cyan-400
                 bg-gradient-to-br
                 from-cyan-400/12
                 to-violet-500/12
                 border border-cyan-400/20
                 shadow-[0_0_25px_rgba(34,211,238,.08)]
                 animate-pulse"
        >

          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            class="w-7 h-7"
          >

            <path
              d="M21 11.5a8.4 8.4 0 0 1-9 8.5
                 8.4 8.4 0 0 1-8.5-8.5
                 A8.4 8.4 0 0 1 12 3
                 a8.4 8.4 0 0 1 9 8.5Z"
              stroke-width="1.6"
            />

            <path
              d="M8 12h8
                 M12 8v8"
              stroke-width="1.6"
              stroke-linecap="round"
            />

          </svg>

        </div>


        <!-- ================= Text ================= -->

        <p class="text-cyan-400 font-medium mb-4">
          Un projet en tête ?
        </p>


        <h2
          class="text-3xl md:text-5xl
                 font-bold leading-tight"
        >

          Créons quelque chose

          <span
            class="text-transparent
                   bg-clip-text
                   bg-gradient-to-r
                   from-cyan-400
                   to-violet-500"
          >
            d'exception.
          </span>

        </h2>


        <p
          class="max-w-2xl mx-auto mt-6
                 text-gray-400 leading-relaxed"
        >

          Vous avez une idée, un projet web ou besoin
          d'une solution digitale ? Je serais ravi
          d'en discuter avec vous.

        </p>


        <!-- ================= Buttons ================= -->

        <div
          class="flex flex-wrap
                 justify-center
                 gap-4 mt-8"
        >

          <!-- Contact -->

          <RouterLink
            to="/contact"
            class="flex items-center gap-2.5
                   px-6 py-3
                   rounded-full
                   bg-gradient-to-r
                   from-cyan-400
                   to-violet-500
                   text-white
                   font-semibold
                   transition-all duration-300
                   hover:-translate-y-1
                   hover:scale-105
                   hover:shadow-[0_0_30px_rgba(34,211,238,.35)]"
          >

            Me contacter

            <span
              class="transition-transform duration-300
                     group-hover:translate-x-1"
            >
              →
            </span>

          </RouterLink>


          <!-- Portfolio -->

          <RouterLink
            to="/portfolio"
            class="flex items-center
                   px-6 py-3
                   rounded-full
                   border border-cyan-400/35
                   text-cyan-400
                   font-semibold
                   transition-all duration-300
                   hover:-translate-y-1
                   hover:bg-cyan-400
                   hover:text-[#050816]
                   hover:shadow-[0_0_25px_rgba(34,211,238,.2)]"
          >
            Voir mes projets
          </RouterLink>

        </div>


        <!-- ================= Bottom Status ================= -->

        <div
          class="flex items-center
                 justify-center gap-3
                 mt-8"
        >

          <span
            class="w-[7px] h-[7px]
                   rounded-full
                   bg-cyan-400
                   shadow-[0_0_8px_#22d3ee,0_0_16px_rgba(34,211,238,.6)]
                   animate-pulse"
          ></span>

          <span class="text-xs text-gray-500">
            Disponible pour de nouveaux projets
          </span>

        </div>

      </div>

    </div>

  </section>
</template>


<script setup>

// RouterLink permet de naviguer entre les pages
// sans recharger toute l'application.

import { RouterLink } from 'vue-router'

</script>