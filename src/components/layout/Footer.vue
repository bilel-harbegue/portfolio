```vue
<template>

  <footer
    class="relative overflow-hidden border-t border-cyan-500/10 bg-[#050816]"
  >

    <!-- ========================================================= -->
    <!-- B CUBE WATERMARK / العلامة المائية -->
    <!-- ========================================================= -->

    <div
      class="pointer-events-none absolute bottom-[-45px] left-[-35px] z-0 select-none sm:bottom-[-55px] sm:left-[-45px]"
      aria-hidden="true"
    >

      <img
        :src="logo"
        alt=""
        class="h-auto w-[180px] object-contain sm:w-[240px] md:w-[290px]"
      />

    </div>


    <!-- ========================================================= -->
    <!-- Subtle Glow / توهج خفيف -->
    <!-- ========================================================= -->

    <div
      class="pointer-events-none absolute bottom-0 left-0 h-40 w-40 rounded-full bg-cyan-500/[0.025] blur-3xl"
    ></div>


    <!-- ========================================================= -->
    <!-- Main Content / المحتوى -->
    <!-- ========================================================= -->

    <div
      class="relative z-10 mx-auto max-w-7xl px-6 py-10 text-center"
    >

      <!-- ======================================================= -->
      <!-- Copyright / حقوق النشر -->
      <!-- ======================================================= -->

      <p class="text-gray-400">

        © 2026 Harbegue Bilel.
        Tous droits réservés.

      </p>


      <!-- ======================================================= -->
      <!-- Founder / المؤسس -->
      <!-- ======================================================= -->

      <p class="mt-2 text-sm text-gray-600">

        <span class="text-gray-500">
          Founder of
        </span>

        <span
          class="ml-1 font-semibold text-cyan-400 transition-colors duration-300 hover:text-blue-400"
        >
          3rd Mark
        </span>

      </p>

    </div>

  </footer>

</template>


<script setup>

import logo from '../../assets/images/3rd_mark1 (1).png'

</script>


<style scoped>

/* =========================================================
   B CUBE WATERMARK
   العلامة المائية لشعار B Cube
   ========================================================= */

div[aria-hidden="true"] img {

  /*
   * شفافية الشعار
   */

  opacity: 0.10;


  /*
   * مظهر أكثر هدوءًا
   */

  filter:
    saturate(0.75)
    brightness(0.9);


  /*
   * دوران ثابت بدون Animation
   */

  transform:
    rotate(-8deg);

}


/* =========================================================
   MOBILE
   ========================================================= */

@media (max-width: 640px) {

  div[aria-hidden="true"] img {

    /*
     * حجم أصغر على الهاتف
     */

    width: 180px;


    /*
     * شفافية أقل على الهاتف
     */

    opacity: 0.005;

  }

}

</style>
```
