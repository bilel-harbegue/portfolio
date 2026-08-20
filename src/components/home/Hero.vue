<template>
  
  <main class="min-h-screen bg-[#050816] text-white">
    <br><br><br>
    <!-- ================= HERO ================= -->
    <!-- Section principale de la page d'accueil -->

    <section class="relative min-h-[calc(100vh-5rem)] overflow-hidden">

      <!-- Arrière-plan avec effets lumineux -->
      <div class="absolute inset-0 pointer-events-none">

        <div
          class="absolute top-20 left-10 w-72 h-72
                 bg-cyan-500/20 rounded-full blur-[120px]"
        ></div>

        <div
          class="absolute bottom-10 right-10 w-96 h-96
                 bg-violet-600/20 rounded-full blur-[140px]"
        ></div>

        <div
          class="absolute top-1/2 right-[10%] -translate-y-1/2
                 w-80 h-80 bg-cyan-400/10
                 rounded-full blur-[100px]"
        ></div>

      </div>


      <!-- Conteneur principal -->
      <div
        class="relative z-10 max-w-7xl mx-auto
               min-h-[calc(100vh-5rem)] px-6
               flex items-center"
      >

        <!-- ================= TEXTE ================= -->

        <div class="w-full lg:w-1/2">

          <p class="text-cyan-400 font-medium mb-4 tracking-wide">
            Bonjour, je suis
          </p>

          <!-- Nom et métier -->
          <h1
            class="text-5xl md:text-6xl lg:text-7xl
                   font-extrabold leading-tight"
          >

            Harbegue <br>Bilel 

            <!-- Texte animé -->
            <span
              class="block mt-3 min-h-[1.5em]
                     text-2xl md:text-3xl lg:text-4xl
                     font-semibold text-transparent
                     bg-clip-text
                     bg-gradient-to-r
                     from-cyan-400 to-violet-500"
            >

              {{ texteAffiche }}

              <span class="text-cyan-400">|</span>

            </span>

          </h1>


          <!-- Présentation courte -->
          <p
            class="mt-6 max-w-xl text-gray-400
                   text-lg leading-relaxed"
          >
            Je conçois des applications web modernes,
            performantes et intuitives en combinant
            technologie, design et créativité.
          </p>


          <!-- Boutons -->
          <div class="flex flex-wrap gap-4 mt-8">

            <!-- Aller vers le portfolio -->
            <RouterLink
              to="/portfolio"
              class="px-7 py-3 rounded-full
                     bg-gradient-to-r
                     from-cyan-400 to-violet-500
                     font-semibold transition
                     hover:scale-105
                     hover:shadow-[0_0_30px_#22d3ee]"
            >
              Voir mes projets
            </RouterLink>


            <!-- Aller vers la page contact -->
            <RouterLink
              to="/contact"
              class="px-7 py-3 rounded-full
                     border border-cyan-400/50
                     text-cyan-400 font-semibold
                     transition hover:bg-cyan-400
                     hover:text-[#050816]"
            >
              Me contacter
            </RouterLink>

          </div>

        </div>


        <!-- ================= VISUEL ================= -->
        <!-- Partie graphique visible sur grand écran -->

        <div
          class="hidden lg:flex w-1/2
                 justify-center items-center
                 relative visual-zone"
        >

          <!-- Lumière derrière l'image -->
          <div
            class="absolute w-80 h-80
                   rounded-full bg-cyan-400/10 blur-3xl"
          ></div>


          <!-- Particules décoratives -->
          <span
            v-for="n in 6"
            :key="n"
            :class="`particle particle-${n}`"
          ></span>


          <!-- Lignes technologiques -->
          <span class="tech-line line-1"></span>
          <span class="tech-line line-2"></span>
          <span class="tech-line line-3"></span>


          <!-- Cercles néon -->
          <div class="neon-circle outer"></div>
          <div class="neon-circle outer"></div>


          <!-- Image principale -->
          <div class="coin">

            <img
              src="../../assets/images/14.png"
              alt="Illustration de BB"
              class="hero-coin"
            />

          </div>


          <!-- Carte flottante -->
          <div class="floating-card card-top">

            <span class="dot"></span>

            Créativité

          </div>


          <!-- Deuxième carte flottante -->
          <div class="floating-card card-bottom">

            <span class="dot"></span>

            Innovation

          </div>


          <!-- Points lumineux autour de l'image -->
          <span class="orbit-dot dot-1"></span>
          <span class="orbit-dot dot-3"></span>

        </div>

      </div>

    </section>

  </main>
</template>


<script setup>

import { ref, onMounted, onUnmounted } from 'vue'


// ================= TEXTE ANIMÉ =================
// Les différents métiers affichés automatiquement.

const textes = [
  'Développeur Full-Stack',
  'Développeur Web',
  'Créateur d’applications',
  'Passionné par l’IA'
]


const texteAffiche = ref('')

let index = 0
let caractere = 0
let suppression = false
let timer


// Fonction qui écrit puis efface le texte.
const effetEcriture = () => {

  const texte = textes[index]


  // Écriture du texte
  if (!suppression) {

    texteAffiche.value =
      texte.slice(0, caractere + 1)

    caractere++


    // Lorsque le mot est terminé,
    // on attend avant de commencer à l'effacer.
    if (caractere === texte.length) {

      suppression = true

      timer = setTimeout(
        effetEcriture,
        1800
      )

      return
    }


  } else {

    // Suppression du texte caractère par caractère.
    texteAffiche.value =
      texte.slice(0, caractere - 1)

    caractere--


    // Lorsque le texte est complètement effacé,
    // on passe au texte suivant.
    if (caractere === 0) {

      suppression = false

      index =
        (index + 1) % textes.length

    }

  }


  // Vitesse d'écriture et de suppression.
  timer = setTimeout(
    effetEcriture,
    suppression ? 60 : 100
  )

}


// Démarrer l'animation lorsque le composant est chargé.
onMounted(effetEcriture)


// Arrêter le timer lorsque le composant est supprimé.
onUnmounted(() => clearTimeout(timer))

</script>


<style scoped>

/* ================= ZONE VISUELLE ================= */

.visual-zone {
  height: 600px;
  perspective: 1200px;
}


/* ================= CERCLES NÉON ================= */

.neon-circle {
  position: absolute;
  border-radius: 50%;
}

.outer {
  width: 430px;
  height: 430px;

  border: 2px solid rgba(34,211,238,.45);

  box-shadow:
    0 0 10px rgba(34,211,238,.7),
    0 0 30px rgba(34,211,238,.4);

  animation: rotate 22s linear infinite;
}

.inner {
  width: 330px;
  height: 330px;

  border: 2px solid rgba(139,92,246,.5);

  box-shadow:
    0 0 10px rgba(139,92,246,.6),
    0 0 30px rgba(139,92,246,.35);

  animation: pulse 4s ease-in-out infinite;
}


/* ================= IMAGE ================= */

.coin {
  position: relative;
  z-index: 10;

  width: 290px;
  height: 290px;

  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-coin {
  width: 100%;
  height: 100%;

  object-fit: contain;

  animation: coinRotate 7s ease-in-out infinite;
}


/* ================= PARTICULES ================= */

.particle,
.orbit-dot {
  position: absolute;

  width: 6px;
  height: 6px;

  border-radius: 50%;

  background: #22d3ee;

  box-shadow:
    0 0 8px #22d3ee,
    0 0 18px rgba(34,211,238,.7);
}

.particle {
  animation: float 5s ease-in-out infinite;
}

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


/* ================= LIGNES ================= */

.tech-line {
  position: absolute;

  height: 1px;

  background: linear-gradient(
    90deg,
    transparent,
    rgba(34,211,238,.7),
    transparent
  );

  animation: lineMove 4s ease-in-out infinite;
}

.line-1 {
  width: 140px;
  top: 25%;
  right: 15%;
}

.line-2 {
  width: 100px;
  bottom: 50%;
  left: 0;
  animation-delay: 1.5s;
}

.line-3 {
  width: 180px;
  top: 75%;
  right: 5%;
  animation-delay: 2.5s;
}


/* ================= CARTES FLOTTANTES ================= */

.floating-card {
  position: absolute;
  z-index: 20;

  display: flex;
  align-items: center;

  gap: 10px;

  padding: 10px 16px;

  border: 1px solid rgba(34,211,238,.25);
  border-radius: 12px;

  background: rgba(5,8,22,.65);

  backdrop-filter: blur(12px);

  color: rgba(255,255,255,.8);

  font-size: 13px;

  animation: floatCard 4s ease-in-out infinite;
}

.card-top {
  top: 15%;
  right: 2%;
}

.card-bottom {
  bottom: 16%;
  left: 2%;
  animation-delay: 1.5s;
}


.dot {
  width: 7px;
  height: 7px;

  border-radius: 50%;

  background: #22d3ee;

  box-shadow: 0 0 10px #22d3ee;
}


/* ================= POINTS ================= */

.dot-1 {
  top: 28%;
  left: 18%;
}

.dot-2 {
  top: 20%;
  right: 20%;

  background: #8b5cf6;

  box-shadow: 0 0 10px #8b5cf6;
}

.dot-3 {
  bottom: 24%;
  right: 12%;
}


/* ================= ANIMATIONS ================= */

@keyframes rotate {

  to {
    transform: rotate(360deg);
  }

}


@keyframes pulse {

  50% {
    transform: scale(1.04);
    opacity: 1;
  }

}


@keyframes coinRotate {

  0% {
    transform: rotateY(0);
  }

  40% {
    transform: rotateY(180deg);
  }

  70%,
  100% {
    transform: rotateY(360deg);
  }

}


@keyframes float {

  50% {
    transform:
      translate(15px, -25px)
      scale(1.5);

    opacity: 1;
  }

}


@keyframes lineMove {

  50% {
    transform: translateX(20px);
    opacity: .8;
  }

}


@keyframes floatCard {

  50% {
    transform: translateY(-10px);
  }

}


/* ================= RESPONSIVE ================= */
/* Réduction des éléments sur les écrans moyens. */

@media (max-width: 1024px) {

  .outer {
    width: 350px;
    height: 350px;
  }

  .inner {
    width: 270px;
    height: 270px;
  }

  .coin {
    width: 240px;
    height: 240px;
  }

}

</style>