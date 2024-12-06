<template>
  <div class="relative bg-black lg:-mt-[45vh] mt-80 lg:ml-20 w-96">
    <div
      v-show="!is_play"
      class="absolute lg:left-[7.9em] -top-48 right-0 left-0 z-10  lg:w-full transition-all duration-500 scale-105 rounded-2xl flex justify-center items-center cursor-pointer"
      @click="playVideo">
      <div class="absolute flex gap-3 flex-col justify-center items-center">
        <p class="text-3xl font-[Sail] text-white w-52">
          Video about our confectionery
        </p>
        <img src="../assets/img/play-icon.png" class="w-14 h-14 z-30" />
      </div>
      <img
        src="../assets/img/video-cover.png"
        class="w-full h-72" />
    </div>
    <video
      class="absolute -top-32 lg:left-44 left-12 z-0 -mt-4 bg-black p-4 w-72 lg:h-44 rounded-2xl"
      controls>
      <source src="../assets/video/History-of-cupcakes.mp4" type="video/mp4" />
    </video>

    <img
      src="../assets/img/raspberry.png"
      class=" w-32 h-32 absolute left-96 -z-10 -top-20 ml-5" />
  </div>
</template>
<script setup>
  import { ref } from "vue";

  const is_play = ref(false);

  const playVideo = () => {
    is_play.value = !is_play.value;

    if (is_play.value) {
      document.querySelector("video").play();
    } else {
      document.querySelector("video").pause();
    }
  };
</script>
<style></style>
