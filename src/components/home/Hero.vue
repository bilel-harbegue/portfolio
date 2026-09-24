<template>

  <main class="min-h-screen bg-[#050816] text-white">

    <br><br><br>

    <!-- ========================================================= -->
    <!-- HERO -->
    <!-- ========================================================= -->

    <section class="relative min-h-[calc(100vh-5rem)] overflow-hidden">


      <!-- ========================================================= -->
      <!-- BACKGROUND -->
      <!-- ========================================================= -->

      <div class="absolute inset-0 pointer-events-none">

        <div
          class="absolute top-20 left-10 w-72 h-72
                 bg-blue-600/20 rounded-full blur-[120px]"
        ></div>

        <div
          class="absolute bottom-10 right-10 w-96 h-96
                 bg-blue-500/20 rounded-full blur-[140px]"
        ></div>

        <div
          class="absolute top-1/2 right-[10%] -translate-y-1/2
                 w-80 h-80 bg-cyan-400/10
                 rounded-full blur-[100px]"
        ></div>

      </div>


      <!-- ========================================================= -->
      <!-- MAIN CONTAINER -->
      <!-- ========================================================= -->

      <div
        class="relative z-10 max-w-7xl mx-auto
               min-h-[calc(100vh-5rem)] px-6
               flex items-center"
      >


        <!-- ======================================================= -->
        <!-- TEXT -->
        <!-- ======================================================= -->

        <div class="w-full lg:w-1/2">


          <!-- Small title -->

          <p
            class="text-cyan-400
                   font-medium
                   mb-4
                   tracking-wide"
          >
            Bonjour, je suis
          </p>


          <!-- Name -->

          <h1
            class="text-5xl md:text-6xl lg:text-7xl
                   font-extrabold
                   leading-tight"
          >

            Bilel <br>Harbegue


            <!-- Animated profession -->

            <span
              class="block
                     mt-3
                     min-h-[1.5em]
                     text-2xl
                     md:text-3xl
                     lg:text-4xl
                     font-semibold
                     text-transparent
                     bg-clip-text
                     bg-gradient-to-r
                     from-cyan-400
                     to-blue-500"
            >

              {{ texteAffiche }}

              <span class="text-cyan-400">|</span>

            </span>

          </h1>


          <!-- Description -->

          <p
            class="mt-6
                   max-w-xl
                   text-gray-400
                   text-lg
                   leading-relaxed"
          >
            Je conçois et développe des interfaces web modernes,
            responsives et intuitives, avec une attention particulière
            portée au design, à l'expérience utilisateur et à la qualité du code.
          </p>


          <!-- Buttons -->

          <div
            class="flex
                   flex-wrap
                   gap-4
                   mt-8"
          >

            <!-- Portfolio -->

            <RouterLink
              to="/portfolio"
              class="px-7
                     py-3
                     rounded-full
                     bg-gradient-to-r
                     from-cyan-400
                     to-blue-600
                     font-semibold
                     transition
                     hover:scale-105
                     hover:shadow-[0_0_30px_#22d3ee]"
            >
              Voir mes projets
            </RouterLink>


            <!-- Contact -->

            <RouterLink
              to="/contact"
              class="px-7
                     py-3
                     rounded-full
                     border
                     border-cyan-400/50
                     text-cyan-400
                     font-semibold
                     transition
                     hover:bg-cyan-400
                     hover:text-[#050816]"
            >
              Me contacter
            </RouterLink>

          </div>

        </div>


        <!-- ======================================================= -->
        <!-- VISUAL -->
        <!-- ======================================================= -->

        <div
          class="hidden
                 lg:flex
                 w-1/2
                 justify-center
                 items-center
                 relative
                 visual-zone"
        >


          <!-- ===================================================== -->
          <!-- LIGHT BEHIND -->
          <!-- ===================================================== -->

          <div
            class="absolute
                   w-80
                   h-80
                   rounded-full
                   bg-cyan-400/10
                   blur-3xl"
          ></div>


          <!-- ===================================================== -->
          <!-- PARTICLES -->
          <!-- ===================================================== -->

          <span
            v-for="n in 6"
            :key="n"
            :class="`particle particle-${n}`"
          ></span>


          <!-- ===================================================== -->
          <!-- TECHNOLOGY LINES -->
          <!-- ===================================================== -->

          <span class="tech-line line-1"></span>

          <span class="tech-line line-2"></span>

          <span class="tech-line line-3"></span>




          <!-- ===================================================== -->
          <!-- BROWSER / CODE PREVIEW -->
          <!-- ===================================================== -->

          <div class="browser-preview">


            <!-- Browser header -->

            <div class="browser-header">


              <!-- Browser dots -->

              <div class="browser-dots">

                <span class="browser-dot"></span>

                <span class="browser-dot"></span>

                <span class="browser-dot"></span>

              </div>


              <!-- Fake URL -->

              <div class="browser-url">

                bilel-harbegue.vercel.app

              </div>

            </div>


            <!-- ================================================= -->
            <!-- Browser content -->
            <!-- ================================================= -->

            <div class="browser-content">


              <!-- Small label -->

              <div class="preview-label">

                FRONTEND

              </div>


              <!-- Code lines -->

              <div class="code-lines">


                <div
                  class="code-line line-large"
                ></div>


                <div
                  class="code-line line-medium"
                ></div>


                <div
                  class="code-line line-small"
                ></div>


                <div
                  class="code-line line-medium"
                ></div>


                <div
                  class="code-line line-extra-small"
                ></div>


              </div>


              <!-- ================================================= -->
              <!-- Vue symbol -->
              <!-- ================================================= -->

              <div class="vue-symbol">

                <span class="vue-bracket">
                  &lt;
                </span>

                <span class="vue-text">
                  Vue
                </span>

                <span class="vue-bracket">
                  /&gt;
                </span>

              </div>


              <!-- ================================================= -->
              <!-- Bottom mini buttons -->
              <!-- ================================================= -->

              <div class="preview-actions">

                <span></span>

                <span></span>

                <span></span>

              </div>


              <!-- ================================================= -->
              <!-- Floating code characters -->
              <!-- ================================================= -->

              <span class="floating-code code-one">
                &lt;/&gt;
              </span>

              <span class="floating-code code-two">
                { }
              </span>

              <span class="floating-code code-three">
                #
              </span>

            </div>

          </div>


          <!-- ===================================================== -->
          <!-- FLOATING CARD TOP -->
          <!-- ===================================================== -->

          <div class="floating-card card-top">

            <span class="dot"></span>

            Frontend · Vue.js

          </div>


          <!-- ===================================================== -->
          <!-- FLOATING CARD BOTTOM -->
          <!-- ===================================================== -->

          <div class="floating-card card-bottom">

            <span class="dot"></span>

            Solutions digitales

          </div>


          <!-- ===================================================== -->
          <!-- ORBIT DOTS -->
          <!-- ===================================================== -->

          <span class="orbit-dot dot-1"></span>

          <span class="orbit-dot dot-3"></span>


        </div>

      </div>

    </section>

  </main>

</template>


<script setup>

import {
  ref,
  onMounted,
  onUnmounted
} from 'vue'


// =============================================================
// TEXTE ANIMÉ
// =============================================================

const textes = [

  'Frontend Web Developer',

  'Vue.js Developer',

  'Développeur Web',

  'Créateur d’interfaces web'

]


const texteAffiche = ref('')


let index = 0

let caractere = 0

let suppression = false

let timer


// =============================================================
// EFFET D'ÉCRITURE
// =============================================================

const effetEcriture = () => {

  const texte = textes[index]


  // -----------------------------------------------------------
  // Écriture
  // -----------------------------------------------------------

  if (!suppression) {

    texteAffiche.value =
      texte.slice(0, caractere + 1)

    caractere++


    // Texte terminé

    if (caractere === texte.length) {

      suppression = true

      timer = setTimeout(
        effetEcriture,
        1800
      )

      return

    }

  }


  // -----------------------------------------------------------
  // Suppression
  // -----------------------------------------------------------

  else {

    texteAffiche.value =
      texte.slice(0, caractere - 1)

    caractere--


    // Texte complètement supprimé

    if (caractere === 0) {

      suppression = false

      index =
        (index + 1) % textes.length

    }

  }


  // -----------------------------------------------------------
  // Vitesse
  // -----------------------------------------------------------

  timer = setTimeout(
    effetEcriture,
    suppression ? 60 : 100
  )

}


// =============================================================
// MOUNT
// =============================================================

onMounted(() => {

  effetEcriture()

})


// =============================================================
// UNMOUNT
// =============================================================

onUnmounted(() => {

  clearTimeout(timer)

})

</script>


<style scoped>


/* ============================================================= */
/* VISUAL ZONE */
/* ============================================================= */

.visual-zone {

  height: 600px;

  perspective: 1200px;

}


/* ============================================================= */
/* NEON CIRCLES */
/* ============================================================= */

.neon-circle {

  position: absolute;

  border-radius: 50%;

  pointer-events: none;

}


/* ============================================================= */
/* OUTER CIRCLE */
/* ============================================================= */

.outer {

  width: 430px;

  height: 430px;

  border:
    2px solid
    rgba(34,211,238,.45);

  box-shadow:

    0 0 10px
    rgba(34,211,238,.7),

    0 0 30px
    rgba(34,211,238,.4);

  animation:
    rotate
    22s
    linear
    infinite;

}


/* ============================================================= */
/* INNER CIRCLE */
/* ============================================================= */

.inner {

  width: 330px;

  height: 330px;

  border:
    2px solid
    rgba(37,99,235,.45);

  box-shadow:

    0 0 10px
    rgba(37,99,235,.6),

    0 0 30px
    rgba(37,99,235,.25);

  animation:
    pulse
    4s
    ease-in-out
    infinite;

}


/* ============================================================= */
/* BROWSER PREVIEW */
/* ============================================================= */

.browser-preview {

  position: relative;

  z-index: 10;

  width: 380px;

  height: 270px;

  border-radius: 18px;

  background:
    rgba(8,16,31,.88);

  border:
    1px solid
    rgba(34,211,238,.35);

  box-shadow:

    0 0 20px
    rgba(34,211,238,.15),

    0 0 60px
    rgba(34,211,238,.08),

    inset 0 0 30px
    rgba(34,211,238,.03);

  backdrop-filter:
    blur(15px);

  overflow: hidden;

  animation:
    browserFloat
    5s
    ease-in-out
    infinite;

}


/* ============================================================= */
/* BROWSER HEADER */
/* ============================================================= */

.browser-header {

  height: 42px;

  display: flex;

  align-items: center;

  gap: 12px;

  padding:
    0 14px;

  border-bottom:
    1px solid
    rgba(255,255,255,.06);

  background:
    rgba(255,255,255,.025);

}


/* ============================================================= */
/* BROWSER DOTS */
/* ============================================================= */

.browser-dots {

  display: flex;

  align-items: center;

  gap: 6px;

}


/* ============================================================= */
/* BROWSER DOT */
/* ============================================================= */

.browser-dot {

  width: 8px;

  height: 8px;

  border-radius: 50%;

  background:
    rgba(34,211,238,.7);

  box-shadow:
    0 0 8px
    rgba(34,211,238,.5);

}


/* ============================================================= */
/* BROWSER URL */
/* ============================================================= */

.browser-url {

  flex: 1;

  height: 24px;

  display: flex;

  align-items: center;

  padding:
    0 10px;

  border-radius: 6px;

  background:
    rgba(255,255,255,.04);

  border:
    1px solid
    rgba(255,255,255,.04);

  color:
    rgba(255,255,255,.35);

  font-size: 10px;

}


/* ============================================================= */
/* BROWSER CONTENT */
/* ============================================================= */

.browser-content {

  position: relative;

  height:
    calc(100% - 42px);

  padding:
    25px;

}


/* ============================================================= */
/* FRONTEND LABEL */
/* ============================================================= */

.preview-label {

  display: inline-flex;

  padding:
    4px 9px;

  border-radius: 20px;

  background:
    rgba(34,211,238,.08);

  border:
    1px solid
    rgba(34,211,238,.15);

  color:
    rgba(34,211,238,.8);

  font-size: 8px;

  letter-spacing:
    .2em;

}


/* ============================================================= */
/* CODE LINES */
/* ============================================================= */

.code-lines {

  margin-top: 22px;

  width: 55%;

}


/* ============================================================= */
/* CODE LINE */
/* ============================================================= */

.code-line {

  height: 6px;

  border-radius: 10px;

  margin-bottom: 12px;

  background:
    linear-gradient(
      90deg,
      rgba(34,211,238,.75),
      rgba(59,130,246,.2)
    );

  box-shadow:
    0 0 8px
    rgba(34,211,238,.08);

  animation:
    codeGlow
    3s
    ease-in-out
    infinite;

}


/* ============================================================= */
/* CODE LINE SIZES */
/* ============================================================= */

.line-large {

  width: 90%;

}


.line-medium {

  width: 70%;

}


.line-small {

  width: 55%;

}


.line-extra-small {

  width: 35%;

}


/* ============================================================= */
/* VUE SYMBOL */
/* ============================================================= */

.vue-symbol {

  position: absolute;

  right: 28px;

  top: 72px;

  display: flex;

  align-items: center;

  gap: 4px;

  font-size: 38px;

  font-weight: 800;

  letter-spacing: -.05em;

  text-shadow:

    0 0 15px
    rgba(34,211,238,.7),

    0 0 35px
    rgba(34,211,238,.3);

  animation:
    vuePulse
    3s
    ease-in-out
    infinite;

}


/* ============================================================= */
/* VUE BRACKETS */
/* ============================================================= */

.vue-bracket {

  color:
    #22d3ee;

}


/* ============================================================= */
/* VUE TEXT */
/* ============================================================= */

.vue-text {

  color:
    #3b82f6;

}


/* ============================================================= */
/* MINI ACTIONS */
/* ============================================================= */

.preview-actions {

  position: absolute;

  left: 25px;

  bottom: 24px;

  display: flex;

  gap: 8px;

}


.preview-actions span {

  width: 55px;

  height: 18px;

  border-radius: 20px;

  background:
    rgba(34,211,238,.08);

  border:
    1px solid
    rgba(34,211,238,.15);

}


/* ============================================================= */
/* FLOATING CODE */
/* ============================================================= */

.floating-code {

  position: absolute;

  color:
    rgba(34,211,238,.45);

  font-size: 12px;

  font-weight: 600;

  text-shadow:
    0 0 10px
    rgba(34,211,238,.5);

}


/* ============================================================= */
/* CODE ONE */
/* ============================================================= */

.code-one {

  top: 20px;

  right: 20px;

  animation:
    codeFloat
    4s
    ease-in-out
    infinite;

}


/* ============================================================= */
/* CODE TWO */
/* ============================================================= */

.code-two {

  bottom: 55px;

  right: 22px;

  animation:
    codeFloat
    5s
    ease-in-out
    infinite;

  animation-delay:
    1s;

}


/* ============================================================= */
/* CODE THREE */
/* ============================================================= */

.code-three {

  bottom: 35px;

  left: 50%;

  animation:
    codeFloat
    4s
    ease-in-out
    infinite;

  animation-delay:
    2s;

}


/* ============================================================= */
/* PARTICLES */
/* ============================================================= */

.particle,
.orbit-dot {

  position: absolute;

  width: 6px;

  height: 6px;

  border-radius: 50%;

  background:
    #22d3ee;

  box-shadow:

    0 0 8px
    #22d3ee,

    0 0 18px
    rgba(34,211,238,.7);

}


/* ============================================================= */
/* PARTICLE ANIMATION */
/* ============================================================= */

.particle {

  animation:
    float
    5s
    ease-in-out
    infinite;

}


/* ============================================================= */
/* PARTICLE POSITIONS */
/* ============================================================= */

.particle-1 {

  top: 12%;

  left: 20%;

}


.particle-2 {

  top: 25%;

  right: 10%;

  animation-delay: 1s;

}


.particle-3 {

  bottom: 20%;

  left: 12%;

  animation-delay: 2s;

}


.particle-4 {

  bottom: 12%;

  right: 20%;

  animation-delay: 3s;

}


.particle-5 {

  top: 42%;

  right: 5%;

  animation-delay: 1.5s;

}


.particle-6 {

  top: 65%;

  left: 8%;

  animation-delay: 2.5s;

}


/* ============================================================= */
/* TECHNOLOGY LINES */
/* ============================================================= */

.tech-line {

  position: absolute;

  height: 1px;

  background:
    linear-gradient(
      90deg,
      transparent,
      rgba(34,211,238,.7),
      transparent
    );

  animation:
    lineMove
    4s
    ease-in-out
    infinite;

}


/* ============================================================= */
/* LINE 1 */
/* ============================================================= */

.line-1 {

  width: 140px;

  top: 33%;

  right: 10%;

}


/* ============================================================= */
/* LINE 2 */
/* ============================================================= */

.line-2 {

  width: 100px;

  bottom: 50%;

  right: 75%;

  animation-delay: 1.5s;

}


/* ============================================================= */
/* LINE 3 */
/* ============================================================= */

.line-3 {

  width: 180px;

  top: 65%;

  right: 10%;

  animation-delay: 2.5s;

}


/* ============================================================= */
/* FLOATING CARDS */
/* ============================================================= */

.floating-card {

  position: absolute;

  z-index: 20;

  display: flex;

  align-items: center;

  gap: 10px;

  padding:
    10px 16px;

  border:
    1px solid
    rgba(34,211,238,.25);

  border-radius: 12px;

  background:
    rgba(5,8,22,.65);

  backdrop-filter:
    blur(12px);

  color:
    rgba(255,255,255,.8);

  font-size: 13px;

  animation:
    floatCard
    4s
    ease-in-out
    infinite;

}


/* ============================================================= */
/* TOP CARD */
/* ============================================================= */

.card-top {

  top: 15%;

  right: 2%;

}


/* ============================================================= */
/* BOTTOM CARD */
/* ============================================================= */

.card-bottom {

  bottom: 16%;

  left: 2%;

  animation-delay:
    1.5s;

}


/* ============================================================= */
/* CARD DOT */
/* ============================================================= */

.dot {

  width: 7px;

  height: 7px;

  border-radius: 50%;

  background:
    #22d3ee;

  box-shadow:
    0 0 10px
    #22d3ee;

}


/* ============================================================= */
/* ORBIT DOTS */
/* ============================================================= */

.dot-1 {

  top: 28%;

  left: 18%;

}


.dot-2 {

  top: 20%;

  right: 20%;

  background:
    #2563eb;

  box-shadow:
    0 0 10px
    #2563eb;

}


.dot-3 {

  bottom: 24%;

  right: 12%;

}


/* ============================================================= */
/* ROTATION */
/* ============================================================= */

@keyframes rotate {

  to {

    transform:
      rotate(360deg);

  }

}


/* ============================================================= */
/* PULSE */
/* ============================================================= */

@keyframes pulse {

  50% {

    transform:
      scale(1.04);

    opacity:
      1;

  }

}


/* ============================================================= */
/* BROWSER FLOAT */
/* ============================================================= */

@keyframes browserFloat {

  0%,
  100% {

    transform:
      translateY(0)
      rotateX(0deg)
      rotateY(0deg);

  }

  50% {

    transform:
      translateY(-12px)
      rotateX(2deg)
      rotateY(-2deg);

  }

}


/* ============================================================= */
/* VUE PULSE */
/* ============================================================= */

@keyframes vuePulse {

  0%,
  100% {

    transform:
      scale(1);

    opacity:
      .9;

  }

  50% {

    transform:
      scale(1.08);

    opacity:
      1;

  }

}


/* ============================================================= */
/* CODE GLOW */
/* ============================================================= */

@keyframes codeGlow {

  0%,
  100% {

    opacity:
      .55;

  }

  50% {

    opacity:
      1;

  }

}


/* ============================================================= */
/* CODE FLOAT */
/* ============================================================= */

@keyframes codeFloat {

  0%,
  100% {

    transform:
      translateY(0);

    opacity:
      .4;

  }

  50% {

    transform:
      translateY(-8px);

    opacity:
      .9;

  }

}


/* ============================================================= */
/* PARTICLE FLOAT */
/* ============================================================= */

@keyframes float {

  50% {

    transform:
      translate(15px, -25px)
      scale(1.5);

    opacity:
      1;

  }

}


/* ============================================================= */
/* LINE MOVE */
/* ============================================================= */

@keyframes lineMove {

  50% {

    transform:
      translateX(20px);

    opacity:
      .8;

  }

}


/* ============================================================= */
/* CARD FLOAT */
/* ============================================================= */

@keyframes floatCard {

  50% {

    transform:
      translateY(-10px);

  }

}


/* ============================================================= */
/* RESPONSIVE */
/* ============================================================= */

@media (max-width: 1024px) {

  .outer {

    width: 350px;

    height: 350px;

  }


  .inner {

    width: 270px;

    height: 270px;

  }


  .browser-preview {

    width: 320px;

    height: 230px;

  }

}


</style>
