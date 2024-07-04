<template>
  <div class="-mt-56 flex justify-start items-center ml-20">
    <div
      v-show="!is_play"
      class="absolute left-[17.9em] z-50 w-[400px] transition-all duration-500 scale-105 rounded-2xl flex justify-center items-center cursor-pointer"
      @click="playVideo">
      <div class="absolute z-20 flex gap-3 flex-col justify-center items-center">
        <p class="text-3xl font-[Sail] text-white w-52">
          Video about our confectionery
        </p>
        <img src="../assets/img/play-icon.png" class="w-14 h-14 z-30" />
      </div>
      <img
        src="../assets/img/video-cover.png"
        class="w-[430px] h-[290px]" />
    </div>
    <video
      class="ml-64 -mt-4 bg-black p-4 relative z-10 w-[300px] h-48 rounded-2xl">
      <source src="../assets/video/History-of-cupcakes.mp4" type="video/mp4" />
    </video>

    <img
      src="../assets/img/raspberry.png"
      class="-ml-16 mt-5 w-32 h-32 relative" />
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
