<script lang="ts" setup></script>

<template>
  <h1 class="text-center text-5xl font-bold mt-40">How do we work?</h1>

  <div class="w-full relative flex gap-32 justify-center mt-32">
    <div
      class="w-[294px] h-[339px] p-10 border border-[#FFD4DD] rounded flex flex-col items-center container_card">
      <div
        class="bg-Counters w-32 h-32 flex justify-center items-center rounded-full">
        01
      </div>
      <h4>We receive the order</h4>
      <p>We receive the order and contact you to clarify the details</p>
    </div>
    <div
      class="w-[294px] h-[339px] p-10 border border-[#FFD4DD] rounded flex flex-col items-center container_card">
      <div
        class="bg-Counters w-32 h-32 flex justify-center items-center rounded-full">
        02
      </div>
      <h4>Preparing the order</h4>
      <p>We prepare the order in strict accordance with the client's wishes</p>
    </div>
    <div
      class="w-[294px] h-[339px] p-10 border border-[#FFD4DD] rounded flex flex-col items-center relative container_card">
      <div
        class="bg-Counters w-32 h-32 flex justify-center items-center rounded-full">
        03
      </div>
      <h4>We are sending the goods</h4>
      <p>We send your order using the method you previously approved.</p>
      <img
        src="../assets/img/raspberry.png"
        class="scale-[0.5] absolute -bottom-16 -right-20" />
    </div>
    <div
      class="w-[294px] h-[339px] p-10 border border-[#FFD4DD] rounded flex flex-col items-center container_card">
      <div
        class="bg-Counters w-32 h-32 flex justify-center items-center rounded-full">
        04
      </div>
      <h4>Delivery and payment</h4>
      <p>
        Our courier will deliver the goods to your address directly into your
        hands
      </p>
    </div>
  </div>
</template>

<style scoped>
  .bg-Counters {
    color: #b44e79;
    @apply text-5xl font-bold font-[Montserrat];
    background-image: url("../assets/Cover/Ellipse-12.png");
    background-position: center;
    background-size: cover;
    background-clip: content-box;
  }
  .container_card {
    @apply flex flex-col gap-6 items-center;
  }
  p {
    text-align: center;
  }
  h4 {
    @apply text-[#B44E79] font-[Montserrat] text-base text-center;
  }
</style>
