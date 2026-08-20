<template>
  <main class="min-h-screen bg-[#050816] text-white pt-20">

    <!-- ================================================= -->
    <!-- HERO -->
    <!-- ================================================= -->

    <section class="relative py-20 overflow-hidden">

      <!-- Glow -->

      <div
        class="absolute -top-20 -left-20
               w-80 h-80
               bg-cyan-500/10
               rounded-full
               blur-[120px]"
      ></div>

      <div
        class="absolute bottom-0 -right-20
               w-80 h-80
               bg-violet-600/10
               rounded-full
               blur-[120px]"
      ></div>


      <div class="relative z-10 max-w-7xl mx-auto px-6">

        <!-- Title -->

        <div class="text-center">

          <p class="text-cyan-400 font-medium mb-3">
            Parlons de votre projet
          </p>

          <h1
            class="text-5xl md:text-6xl
                   font-extrabold"
          >
            Me
            <span
              class="text-transparent
                     bg-clip-text
                     bg-gradient-to-r
                     from-cyan-400
                     to-violet-500"
            >
              contacter
            </span>
          </h1>

          <p
            class="max-w-2xl
                   mx-auto
                   mt-6
                   text-gray-400
                   text-lg
                   leading-relaxed"
          >
            Vous avez une idée, un projet web ou besoin
            d'une solution digitale ? Décrivez-moi votre
            projet et choisissez votre moyen de contact.
          </p>

          <div class="section-line"></div>

        </div>


        <!-- ================================================= -->
        <!-- CONTACT AREA -->
        <!-- ================================================= -->

        <div
          class="grid lg:grid-cols-[.75fr_1.25fr]
                 gap-8
                 mt-16
                 items-start"
        >


          <!-- ================================================= -->
          <!-- CONTACT INFO -->
          <!-- ================================================= -->

          <div class="space-y-5">

            <!-- WhatsApp -->

            <div class="contact-card">

              <div class="contact-icon">

                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.7"
                  class="w-6 h-6"
                >
                  <path
                    d="M20 11.5a8 8 0 0 1-11.8 7L4 20l1.5-4.1A8 8 0 1 1 20 11.5Z"
                  />

                  <path
                    d="M8.5 8.5c.3-.5.7-.5 1-.1l.9 1c.2.3.2.6 0 .9.3 1.3 1.7 2.2 3 3l.5-.4c.3-.2.6-.2.9 0l1 .9c.4.3.4.7-.1 1-.5.4-1.2.5-1.8.3-2.2-.7-4.7-3.2-5.4-5.4-.2-.6-.1-1.3.4-1.7Z"
                  />
                </svg>

              </div>


              <div class="flex-1">

                <p class="contact-label">
                  WhatsApp
                </p>

                <p class="contact-value">
                  Disponible pour discuter
                </p>

              </div>


              <button
                type="button"
                @click="openWhatsApp"
                class="contact-action"
              >
                Écrire
              </button>

            </div>


            <!-- Email -->

            <div class="contact-card">

              <div class="contact-icon">

                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.7"
                  class="w-6 h-6"
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


              <div class="flex-1 min-w-0">

                <p class="contact-label">
                  Email
                </p>

                <p class="contact-value truncate">
                  {{ emailAddress }}
                </p>

              </div>


              <button
                type="button"
                @click="openGmail"
                class="contact-action"
              >
                Gmail
              </button>

            </div>


            <!-- Location -->

            <div class="contact-card">

              <div class="contact-icon">

                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.7"
                  class="w-6 h-6"
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

                <p class="contact-label">
                  Localisation
                </p>

                <p class="contact-value">
                  Tunisie
                </p>

              </div>

            </div>


            <!-- Availability -->

            <div
              class="availability-card"
            >

              <span class="status-dot"></span>

              <div>

                <p class="font-semibold">
                  Disponible pour de nouveaux projets
                </p>

                <p class="text-gray-500 text-sm mt-1">
                  N'hésitez pas à me contacter.
                </p>

              </div>

            </div>

          </div>


          <!-- ================================================= -->
          <!-- CONTACT FORM -->
          <!-- ================================================= -->

          <div
            class="form-card"
          >

            <!-- Form Header -->

            <div class="mb-8">

              <p class="text-cyan-400 text-sm font-medium">
                Envoyez-moi un message
              </p>

              <h2 class="text-2xl md:text-3xl font-bold mt-2">
                Parlons de votre idée
              </h2>

              <p class="text-gray-500 text-sm mt-3">
                Remplissez le formulaire puis choisissez
                WhatsApp ou Gmail pour envoyer votre message.
              </p>

            </div>


            <!-- Name + Email -->

            <div class="grid md:grid-cols-2 gap-5">

              <div>

                <label>
                  Nom
                </label>

                <input
                  v-model="form.name"
                  type="text"
                  placeholder="Votre nom"
                  class="input"
                />

              </div>


              <div>

                <label>
                  Email
                </label>

                <input
                  v-model="form.email"
                  type="email"
                  placeholder="votre@email.com"
                  class="input"
                />

              </div>

            </div>


            <!-- Subject -->

            <div class="mt-5">

              <label>
                Sujet
              </label>

              <input
                v-model="form.subject"
                type="text"
                placeholder="Ex : Création d'un site web"
                class="input"
              />

            </div>


            <!-- Message -->

            <div class="mt-5">

              <label>
                Message
              </label>

              <textarea
                v-model="form.message"
                rows="6"
                placeholder="Décrivez votre projet..."
                class="input resize-none"
              ></textarea>

            </div>


            <!-- Error -->

            <p
              v-if="error"
              class="mt-4 text-sm text-red-400"
            >
              {{ error }}
            </p>


            <!-- Success -->

            <div
              v-if="success"
              class="success-message"
            >

              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                class="w-5 h-5"
              >
                <path d="m5 12 4 4L19 6" />
              </svg>

              Votre message est prêt à être envoyé.

            </div>


            <!-- Buttons -->

            <div
              class="grid sm:grid-cols-2
                     gap-4
                     mt-7"
            >

              <!-- WhatsApp -->

              <button
                type="button"
                @click="sendWhatsApp"
                class="send-button whatsapp"
              >

                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.8"
                  class="w-5 h-5"
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


              <!-- Gmail -->

              <button
                type="button"
                @click="sendGmail"
                class="send-button gmail"
              >

                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.8"
                  class="w-5 h-5"
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
              class="text-center
                     text-gray-600
                     text-xs
                     mt-5"
            >
              Aucun backend nécessaire.
              Votre message est envoyé via votre application
              de messagerie ou WhatsApp.
            </p>

          </div>

        </div>

      </div>

    </section>


    <!-- ================================================= -->
    <!-- CTA -->
    <!-- ================================================= -->

    <section class="relative py-20">

      <div
        class="absolute inset-0
               bg-cyan-500/[.02]
               pointer-events-none"
      ></div>

      <div class="max-w-4xl mx-auto px-6">

        <div class="cta">

          <div
            class="absolute
                   -top-24
                   left-1/2
                   -translate-x-1/2
                   w-80 h-40
                   bg-cyan-400/10
                   rounded-full
                   blur-[90px]"
          ></div>


          <div class="relative z-10">

            <p class="text-cyan-400 font-medium mb-3">
              Merci pour votre visite
            </p>

            <h2
              class="text-3xl md:text-4xl
                     font-bold"
            >
              Construisons quelque chose
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
              class="text-gray-400
                     max-w-xl
                     mx-auto
                     mt-5
                     leading-relaxed"
            >
              Une idée, un projet ou simplement
              une question ? Je serais ravi d'échanger
              avec vous.
            </p>


            <button
              type="button"
              @click="openWhatsApp"
              class="inline-flex
                     items-center
                     gap-2
                     mt-8
                     px-7 py-3
                     rounded-full
                     bg-gradient-to-r
                     from-cyan-400
                     to-violet-500
                     font-semibold
                     transition
                     hover:scale-105
                     hover:shadow-[0_0_30px_#22d3ee]"
            >

              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.8"
                class="w-5 h-5"
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


/* ================================================= */
/* CONTACT INFORMATION */
/* ================================================= */

/*
  ضع رقم WhatsApp الخاص بك هنا
  بدون + وبدون مسافات

  مثال تونس:
  216XXXXXXXX
*/

const whatsappNumber = '216XXXXXXXX'


/*
  ضع Gmail الخاص بك هنا
*/

const emailAddress = 'your@email.com'


/* ================================================= */
/* FORM */
/* ================================================= */

const form = reactive({

  name: '',

  email: '',

  subject: '',

  message: ''

})


const error = ref('')

const success = ref(false)


/* ================================================= */
/* VALIDATION */
/* ================================================= */

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


/* ================================================= */
/* WHATSAPP */
/* ================================================= */

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


/* ================================================= */
/* GMAIL */
/* ================================================= */

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

  const subject =
    'Contact depuis mon portfolio'


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


<style scoped>

/* ================================================= */
/* SECTION TITLE */
/* ================================================= */

.section-line {

  width: 70px;

  height: 3px;

  margin: 20px auto 0;

  border-radius: 999px;

  background:
    linear-gradient(
      90deg,
      #22d3ee,
      #8b5cf6
    );

}


/* ================================================= */
/* CONTACT CARD */
/* ================================================= */

.contact-card {

  display: flex;

  align-items: center;

  gap: 16px;

  padding: 20px;

  border-radius: 20px;

  background:
    rgba(8,16,31,.72);

  border:
    1px solid
    rgba(34,211,238,.10);

  backdrop-filter:
    blur(12px);

  transition:
    .3s;

}


.contact-card:hover {

  transform:
    translateX(5px);

  border-color:
    rgba(34,211,238,.35);

  box-shadow:
    0 0 30px
    rgba(34,211,238,.05);

}


/* ================================================= */
/* CONTACT ICON */
/* ================================================= */

.contact-icon {

  width: 48px;

  height: 48px;

  flex-shrink: 0;

  display: flex;

  align-items: center;

  justify-content: center;

  border-radius: 14px;

  color: #22d3ee;

  background:
    rgba(34,211,238,.08);

  border:
    1px solid
    rgba(34,211,238,.15);

}


.contact-label {

  color: #9ca3af;

  font-size: 12px;

}


.contact-value {

  margin-top: 4px;

  color: #e5e7eb;

  font-size: 14px;

}


/* ================================================= */
/* CONTACT ACTION */
/* ================================================= */

.contact-action {

  padding: 8px 14px;

  border-radius: 999px;

  color: #67e8f9;

  background:
    rgba(34,211,238,.06);

  border:
    1px solid
    rgba(34,211,238,.15);

  font-size: 12px;

  font-weight: 600;

  transition: .3s;

}


.contact-action:hover {

  background:
    rgba(34,211,238,.12);

  border-color:
    rgba(34,211,238,.4);

}


/* ================================================= */
/* AVAILABILITY */
/* ================================================= */

.availability-card {

  display: flex;

  align-items: center;

  gap: 12px;

  padding: 20px;

  border-radius: 20px;

  background:
    linear-gradient(
      135deg,
      rgba(34,211,238,.06),
      rgba(139,92,246,.05)
    );

  border:
    1px solid
    rgba(34,211,238,.12);

}


.status-dot {

  width: 10px;

  height: 10px;

  flex-shrink: 0;

  border-radius: 50%;

  background: #22d3ee;

  box-shadow:
    0 0 10px
    rgba(34,211,238,.9);

}


/* ================================================= */
/* FORM CARD */
/* ================================================= */

.form-card {

  padding: 32px;

  border-radius: 28px;

  background:
    rgba(8,16,31,.78);

  border:
    1px solid
    rgba(34,211,238,.14);

  backdrop-filter:
    blur(16px);

  box-shadow:
    0 0 50px
    rgba(34,211,238,.04);

}


.form-card label {

  display: block;

  margin-bottom: 8px;

  color: #d1d5db;

  font-size: 13px;

  font-weight: 500;

}


/* ================================================= */
/* INPUT */
/* ================================================= */

.input {

  width: 100%;

  padding: 13px 15px;

  border-radius: 12px;

  outline: none;

  color: white;

  background:
    rgba(255,255,255,.025);

  border:
    1px solid
    rgba(255,255,255,.08);

  transition:
    .3s;

}


.input::placeholder {

  color:
    #4b5563;

}


.input:focus {

  border-color:
    rgba(34,211,238,.5);

  background:
    rgba(34,211,238,.025);

  box-shadow:
    0 0 20px
    rgba(34,211,238,.05);

}


/* ================================================= */
/* SEND BUTTON */
/* ================================================= */

.send-button {

  min-height: 52px;

  display: flex;

  align-items: center;

  justify-content: center;

  gap: 10px;

  padding: 14px 18px;

  border-radius: 999px;

  font-weight: 600;

  transition:
    .3s;

}


.send-button:hover {

  transform:
    translateY(-2px);

}


/* WhatsApp */

.send-button.whatsapp {

  color: white;

  background:
    linear-gradient(
      135deg,
      #22d3ee,
      #8b5cf6
    );

  box-shadow:
    0 0 25px
    rgba(34,211,238,.08);

}


.send-button.whatsapp:hover {

  box-shadow:
    0 0 30px
    rgba(34,211,238,.25);

}


/* Gmail */

.send-button.gmail {

  color: #67e8f9;

  background:
    rgba(34,211,238,.05);

  border:
    1px solid
    rgba(34,211,238,.25);

}


.send-button.gmail:hover {

  background:
    rgba(34,211,238,.10);

  border-color:
    rgba(34,211,238,.45);

}


/* ================================================= */
/* SUCCESS */
/* ================================================= */

.success-message {

  display: flex;

  align-items: center;

  gap: 8px;

  padding: 12px 15px;

  border-radius: 12px;

  color: #67e8f9;

  background:
    rgba(34,211,238,.06);

  border:
    1px solid
    rgba(34,211,238,.15);

  font-size: 13px;

}


/* ================================================= */
/* CTA */
/* ================================================= */

.cta {

  position: relative;

  padding:
    55px 30px;

  text-align: center;

  border-radius: 28px;

  background:
    linear-gradient(
      135deg,
      rgba(8,16,31,.9),
      rgba(10,15,35,.75)
    );

  border:
    1px solid
    rgba(34,211,238,.18);

  backdrop-filter:
    blur(16px);

  overflow: hidden;

  box-shadow:
    0 0 50px
    rgba(34,211,238,.05);

}


/* ================================================= */
/* RESPONSIVE */
/* ================================================= */

@media (max-width: 640px) {

  .form-card {

    padding: 22px;

  }

  .contact-card {

    padding: 16px;

  }

  .contact-action {

    display: none;

  }

}

</style>