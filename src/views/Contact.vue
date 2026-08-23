
<template>
  <main class="min-h-screen bg-[#050816] pt-20 text-white">

    <!-- HERO -->
    <section class="relative overflow-hidden py-20">

      <!-- Glow -->
      <div
        class="absolute -top-20 -left-20 h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px]"
      ></div>

      <div
        class="absolute right-[-80px] bottom-0 h-80 w-80 rounded-full bg-violet-600/10 blur-[120px]"
      ></div>

      <div class="relative z-10 mx-auto max-w-7xl px-6">

        <!-- TITLE -->
        <div class="text-center">

          <p class="mb-3 font-medium text-cyan-400">
            Parlons de votre projet
          </p>

          <h1 class="text-5xl font-extrabold md:text-6xl">
            Me
            <span
              class="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent"
            >
              contacter
            </span>
          </h1>

          <p
            class="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-400"
          >
            Vous avez une idée, un projet web ou besoin
            d'une solution digitale ? Décrivez-moi votre
            projet et choisissez votre moyen de contact.
          </p>

          <!-- Section line -->
          <div
            class="mx-auto mt-5 h-[3px] w-[70px] rounded-full bg-gradient-to-r from-cyan-400 to-violet-500"
          ></div>

        </div>


        <!-- CONTACT AREA -->
        <div
          class="mt-16 grid items-start gap-8 lg:grid-cols-[.75fr_1.25fr]"
        >

          <!-- CONTACT INFO -->
          <div class="space-y-5">

            <!-- WhatsApp -->
            <div
              class="flex items-center gap-4 rounded-[20px] border border-cyan-400/10 bg-[rgba(8,16,31,.72)] p-5 backdrop-blur-xl transition duration-300 hover:translate-x-1 hover:border-cyan-400/35 hover:shadow-[0_0_30px_rgba(34,211,238,.05)]"
            >

              <div
                class="flex h-12 w-12 shrink-0 items-center justify-center rounded-[14px] border border-cyan-400/15 bg-cyan-400/8 text-cyan-400"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.7"
                  class="h-6 w-6"
                >
                  <path
                    d="M20 11.5a8 8 0 0 1-11.8 7L4 20l1.5-4.1A8 8 0 1 1 20 11.5Z"
                  />
                  <path
                    d="M8.5 8.5c.3-.5.7-.5 1-.1l.9 1c.2.3.2.6 0 .9.3 1.3 1.7 2.2 3 3l.5-.4c.3-.2.6-.2.9 0l1 .9c.4.3.4.7-.1 1-.5.4-1.2.5-1.8.3-2.2-.7-4.7-3.2-5.4-5.4-.2-.6-.1-1.3.4-1.7Z"
                  />
                </svg>
              </div>

              <div class="min-w-0 flex-1">
                <p class="text-xs text-gray-400">
                  WhatsApp
                </p>

                <p class="mt-1 text-sm text-gray-200">
                  Disponible pour discuter
                </p>
              </div>

              <button
                type="button"
                @click="openWhatsApp"
                class="rounded-full border border-cyan-400/15 bg-cyan-400/6 px-3.5 py-2 text-xs font-semibold text-cyan-300 transition duration-300 hover:border-cyan-400/40 hover:bg-cyan-400/12"
              >
                Écrire
              </button>

            </div>


            <!-- EMAIL -->
            <div
              class="flex items-center gap-4 rounded-[20px] border border-cyan-400/10 bg-[rgba(8,16,31,.72)] p-5 backdrop-blur-xl transition duration-300 hover:translate-x-1 hover:border-cyan-400/35 hover:shadow-[0_0_30px_rgba(34,211,238,.05)]"
            >

              <div
                class="flex h-12 w-12 shrink-0 items-center justify-center rounded-[14px] border border-cyan-400/15 bg-cyan-400/8 text-cyan-400"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.7"
                  class="h-6 w-6"
                >
                  <rect
                    x="3"
                    y="5"
                    width="18"
                    height="14"
                    rx="2"
                  />
                  <path d="m3 7 9 6 9-6" />
                </svg>
              </div>

              <div class="min-w-0 flex-1">
                <p class="text-xs text-gray-400">
                  Email
                </p>

                <p class="mt-1 truncate text-sm text-gray-200">
                  {{ emailAddress }}
                </p>
              </div>

              <button
                type="button"
                @click="openGmail"
                class="rounded-full border border-cyan-400/15 bg-cyan-400/6 px-3.5 py-2 text-xs font-semibold text-cyan-300 transition duration-300 hover:border-cyan-400/40 hover:bg-cyan-400/12"
              >
                Gmail
              </button>

            </div>


            <!-- LOCATION -->
            <div
              class="flex items-center gap-4 rounded-[20px] border border-cyan-400/10 bg-[rgba(8,16,31,.72)] p-5 backdrop-blur-xl transition duration-300 hover:translate-x-1 hover:border-cyan-400/35 hover:shadow-[0_0_30px_rgba(34,211,238,.05)]"
            >

              <div
                class="flex h-12 w-12 shrink-0 items-center justify-center rounded-[14px] border border-cyan-400/15 bg-cyan-400/8 text-cyan-400"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.7"
                  class="h-6 w-6"
                >
                  <path
                    d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"
                  />
                  <circle
                    cx="12"
                    cy="10"
                    r="2.5"
                  />
                </svg>
              </div>

              <div>
                <p class="text-xs text-gray-400">
                  Localisation
                </p>

                <p class="mt-1 text-sm text-gray-200">
                  Tunisie
                </p>
              </div>

            </div>


            <!-- AVAILABILITY -->
            <div
              class="flex items-center gap-3 rounded-[20px] border border-cyan-400/12 bg-gradient-to-br from-cyan-400/6 to-violet-500/5 p-5"
            >

              <span
                class="h-2.5 w-2.5 shrink-0 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,.9)]"
              ></span>

              <div>
                <p class="font-semibold">
                  Disponible pour de nouveaux projets
                </p>

                <p class="mt-1 text-sm text-gray-500">
                  N'hésitez pas à me contacter.
                </p>
              </div>

            </div>

          </div>


          <!-- CONTACT FORM -->
          <div
            class="rounded-[28px] border border-cyan-400/14 bg-[rgba(8,16,31,.78)] p-[22px] shadow-[0_0_50px_rgba(34,211,238,.04)] backdrop-blur-2xl md:p-8"
          >

            <!-- FORM HEADER -->
            <div class="mb-8">

              <p class="text-sm font-medium text-cyan-400">
                Envoyez-moi un message
              </p>

              <h2 class="mt-2 text-2xl font-bold md:text-3xl">
                Parlons de votre idée
              </h2>

              <p class="mt-3 text-sm text-gray-500">
                Remplissez le formulaire puis choisissez
                WhatsApp ou Gmail pour envoyer votre message.
              </p>

            </div>


            <!-- NAME + EMAIL -->
            <div class="grid gap-5 md:grid-cols-2">

              <div>
                <label
                  class="mb-2 block text-[13px] font-medium text-gray-300"
                >
                  Nom
                </label>

                <input
                  v-model="form.name"
                  type="text"
                  placeholder="Votre nom"
                  class="w-full rounded-xl border border-white/8 bg-white/[.025] px-[15px] py-[13px] text-white outline-none transition duration-300 placeholder:text-gray-600 focus:border-cyan-400/50 focus:bg-cyan-400/[.025] focus:shadow-[0_0_20px_rgba(34,211,238,.05)]"
                />
              </div>


              <div>
                <label
                  class="mb-2 block text-[13px] font-medium text-gray-300"
                >
                  Email
                </label>

                <input
                  v-model="form.email"
                  type="email"
                  placeholder="votre@email.com"
                  class="w-full rounded-xl border border-white/8 bg-white/[.025] px-[15px] py-[13px] text-white outline-none transition duration-300 placeholder:text-gray-600 focus:border-cyan-400/50 focus:bg-cyan-400/[.025] focus:shadow-[0_0_20px_rgba(34,211,238,.05)]"
                />
              </div>

            </div>


            <!-- SUBJECT -->
            <div class="mt-5">

              <label
                class="mb-2 block text-[13px] font-medium text-gray-300"
              >
                Sujet
              </label>

              <input
                v-model="form.subject"
                type="text"
                placeholder="Ex : Création d'un site web"
                class="w-full rounded-xl border border-white/8 bg-white/[.025] px-[15px] py-[13px] text-white outline-none transition duration-300 placeholder:text-gray-600 focus:border-cyan-400/50 focus:bg-cyan-400/[.025] focus:shadow-[0_0_20px_rgba(34,211,238,.05)]"
              />

            </div>


            <!-- MESSAGE -->
            <div class="mt-5">

              <label
                class="mb-2 block text-[13px] font-medium text-gray-300"
              >
                Message
              </label>

              <textarea
                v-model="form.message"
                rows="6"
                placeholder="Décrivez votre projet..."
                class="w-full resize-none rounded-xl border border-white/8 bg-white/[.025] px-[15px] py-[13px] text-white outline-none transition duration-300 placeholder:text-gray-600 focus:border-cyan-400/50 focus:bg-cyan-400/[.025] focus:shadow-[0_0_20px_rgba(34,211,238,.05)]"
              ></textarea>

            </div>


            <!-- ERROR -->
            <p
              v-if="error"
              class="mt-4 text-sm text-red-400"
            >
              {{ error }}
            </p>


            <!-- SUCCESS -->
            <div
              v-if="success"
              class="mt-4 flex items-center gap-2 rounded-xl border border-cyan-400/15 bg-cyan-400/6 px-[15px] py-3 text-[13px] text-cyan-300"
            >

              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                class="h-5 w-5"
              >
                <path d="m5 12 4 4L19 6" />
              </svg>

              Votre message est prêt à être envoyé.

            </div>


            <!-- BUTTONS -->
            <div class="mt-7 grid gap-4 sm:grid-cols-2">

              <!-- WHATSAPP -->
              <button
                type="button"
                @click="sendWhatsApp"
                class="flex min-h-[52px] items-center justify-center gap-2 rounded-full bg-gradient-to-br from-cyan-400 to-violet-500 px-[18px] py-3.5 font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_30px_rgba(34,211,238,.25)]"
              >

                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.8"
                  class="h-5 w-5"
                >
                  <path
                    d="M20 11.5a8 8 0 0 1-11.8 7L4 20l1.5-4.1A8 8 0 1 1 20 11.5Z"
                  />
                  <path
                    d="M8.5 8.5c.3-.5.7-.5 1-.1l.9 1c.2.3.2.6 0 .9.3 1.3 1.7 2.2 3 3l.5-.4c.3-.2.6-.2.9 0l1 .9c.4.3.4.7-.1 1-.5.4-1.2.5-1.8.3-2.2-.7-4.7-3.2-5.4-5.4-.2-.6-.1-1.3.4-1.7Z"
                  />
                </svg>

                Envoyer via WhatsApp

              </button>


              <!-- GMAIL -->
              <button
                type="button"
                @click="sendGmail"
                class="flex min-h-[52px] items-center justify-center gap-2 rounded-full border border-cyan-400/25 bg-cyan-400/5 px-[18px] py-3.5 font-semibold text-cyan-300 transition duration-300 hover:-translate-y-0.5 hover:border-cyan-400/45 hover:bg-cyan-400/10"
              >

                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.8"
                  class="h-5 w-5"
                >
                  <rect
                    x="3"
                    y="5"
                    width="18"
                    height="14"
                    rx="2"
                  />
                  <path d="m3 7 9 6 9-6" />
                </svg>

                Envoyer via Gmail

              </button>

            </div>


            <p
              class="mt-5 text-center text-xs text-gray-600"
            >
              Aucun backend nécessaire.
              Votre message est envoyé via votre application
              de messagerie ou WhatsApp.
            </p>

          </div>

        </div>

      </div>

    </section>


    <!-- CTA -->
    <section class="relative py-20">

      <div
        class="pointer-events-none absolute inset-0 bg-cyan-500/[.02]"
      ></div>

      <div class="mx-auto max-w-4xl px-6">

        <div
          class="relative overflow-hidden rounded-[28px] border border-cyan-400/18 bg-gradient-to-br from-[rgba(8,16,31,.9)] to-[rgba(10,15,35,.75)] px-[30px] py-[55px] text-center shadow-[0_0_50px_rgba(34,211,238,.05)] backdrop-blur-2xl"
        >

          <!-- Glow -->
          <div
            class="absolute -top-24 left-1/2 h-40 w-80 -translate-x-1/2 rounded-full bg-cyan-400/10 blur-[90px]"
          ></div>

          <div class="relative z-10">

            <p class="mb-3 font-medium text-cyan-400">
              Merci pour votre visite
            </p>

            <h2 class="text-3xl font-bold md:text-4xl">
              Construisons quelque chose
              <span
                class="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent"
              >
                d'exception.
              </span>
            </h2>

            <p
              class="mx-auto mt-5 max-w-xl leading-relaxed text-gray-400"
            >
              Une idée, un projet ou simplement
              une question ? Je serais ravi d'échanger
              avec vous.
            </p>


            <button
              type="button"
              @click="openWhatsApp"
              class="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 px-7 py-3 font-semibold transition duration-300 hover:scale-105 hover:shadow-[0_0_30px_#22d3ee]"
            >

              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.8"
                class="h-5 w-5"
              >
                <path
                  d="M20 11.5a8 8 0 0 1-11.8 7L4 20l1.5-4.1A8 8 0 1 1 20 11.5Z"
                />
                <path
                  d="M8.5 8.5c.3-.5.7-.5 1-.1l.9 1c.2.3.2.6 0 .9.3 1.3 1.7 2.2 3 3l.5-.4c.3-.2.6-.2.9 0l1 .9c.4.3.4.7-.1 1-.5.4-1.2.5-1.8.3-2.2-.7-4.7-3.2-5.4-5.4-.2-.6-.1-1.3.4-1.7Z"
                />
              </svg>

              Discuter sur WhatsApp

            </button>

          </div>

        </div>

      </div>

    </section>

  </main>
</template>


<script setup>

import { reactive, ref } from 'vue'


// ================================================
// CONTACT INFORMATION
// ================================================

const whatsappNumber = '21625270149'

const emailAddress = 'bilel.harbegue2003@gmail.com'


// ================================================
// FORM
// ================================================

const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: ''
})


const error = ref('')

const success = ref(false)


// ================================================
// VALIDATION
// ================================================

const validateForm = () => {

  error.value = ''
  success.value = false

  if (!form.name.trim()) {
    error.value = 'Veuillez saisir votre nom.'
    return false
  }

  if (!form.email.trim()) {
    error.value = 'Veuillez saisir votre adresse email.'
    return false
  }

  if (!form.message.trim()) {
    error.value = 'Veuillez saisir votre message.'
    return false
  }

  return true
}


// ================================================
// WHATSAPP
// ================================================

const createMessage = () => {

  return `
Bonjour,

Je m'appelle ${form.name}.

Email : ${form.email}

Sujet : ${form.subject || 'Non précisé'}

Message :
${form.message}

Cordialement,
${form.name}
  `.trim()

}


const openWhatsApp = () => {

  const message = `
Bonjour,

Je souhaite vous contacter concernant un projet web.

Merci.
  `.trim()

  const url =
    `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`

  window.open(url, '_blank')

}


const sendWhatsApp = () => {

  if (!validateForm()) return

  const message = createMessage()

  const url =
    `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`

  success.value = true

  window.open(url, '_blank')

}


// ================================================
// GMAIL
// ================================================

const createEmailBody = () => {

  return `
Bonjour,

Je m'appelle ${form.name}.

Email : ${form.email}

Sujet : ${form.subject || 'Contact depuis mon portfolio'}

Message :

${form.message}

Cordialement,
${form.name}
  `.trim()

}


const openGmail = () => {

  const subject = 'Contact depuis mon portfolio'

  const body =
    'Bonjour, je souhaite vous contacter concernant un projet web.'

  const url =
    `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(emailAddress)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

  window.open(url, '_blank')

}


const sendGmail = () => {

  if (!validateForm()) return

  const subject =
    form.subject || 'Contact depuis mon portfolio'

  const body =
    createEmailBody()

  const url =
    `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(emailAddress)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

  success.value = true

  window.open(url, '_blank')

}

</script>
```
