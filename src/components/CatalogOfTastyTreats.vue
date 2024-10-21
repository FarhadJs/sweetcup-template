<template>
  <div class="mt-44 relative">
    <h1>Catalog of tasty treats</h1>
    <img
      src="../assets/img/mixed-berries-1.png"
      class="absolute -top-16 left-0" />
    <img src="../assets/img/haf-cupcake.png" class="absolute right-0 -top-48" />
    <div class="mt-20 flex justify-center">
      <div class="mt-10 flex">
        <div
          id="Eclair"
          class="relative w-60 flex flex-col justify-center items-center">
          <img
            src="../assets/img/Eclair.png"
            class="absolute w-36 h-36 top-24 z-30" />
          <img src="../assets/Cover/Ellipse-14.png" class="w-60 h-44" />
          <span>Eclair</span>
        </div>
        <div
          id="Macaroon"
          class="relative w-60 flex flex-col justify-center items-center">
          <img
            src="../assets/img/Macaroon.png"
            class="absolute w-52 scale-125 z-30" />
          <img src="../assets/Cover/Ellipse-14.png" class="w-60 h-44" />
          <span>Macaroon</span>
        </div>
        <div
          id="CupCake_Frame"
          class="frame_cupcake w-[488px] h-[388px] flex flex-col justify-center items-center relative">
          <div class="relative">
            <img
              src="../assets/img/yellow-cupcake.png"
              class="w-52 absolute left-6 right-0 -top-32 z-30" />
            <img src="../assets/Cover/Ellipse-14.png" class="w-64" />
          </div>
          <h5>Cupcake</h5>
        </div>

        <div
          id="muffin"
          class="relative flex flex-col justify-center items-center">
          <img
            src="../assets/img/muffin.png"
            class="w-60 h-60 mb-10 relative z-30" />
          <img src="../assets/Cover/Ellipse-14.png" class="w-52 absolute" />
          <span>Muffin</span>
        </div>
        <div
          id="Donut"
          class="relative flex flex-col justify-center items-center">
          <img
            src="../assets/img/Donut.png"
            class="w-60 h-60 mb-10 scale-75 relative z-30" />
          <img src="../assets/Cover/Ellipse-14.png" class="w-52 absolute" />
          <span>Donut</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped>
  .frame_cupcake {
    background-image: url("../assets//Cover/Ellipse-13.png");
    background-clip: content-box;
    background-size: cover;
    background-position: center;
  }
  h5 {
    @apply text-center text-[#B44E79] absolute bottom-5 text-3xl font-[Montserrat];
  }
  span {
    @apply text-center text-[#B44E79] mb-10 text-xl absolute bottom-10 font-[Montserrat];
  }
</style>
