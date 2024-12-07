<template>
  <div
    class="w-full mt-44 relative"
    style="
      background: linear-gradient(
        97.35deg,
        #fca4c9 -7.93%,
        #fe71ad 55.51%,
        #b44e79 104.2%
      );
    ">
    <img src="../assets/img/blur_comp.png" class="absolute -top-20 right-0" />
    <img src="../assets/svg/Mint_leaves.svg" class="absolute -top-32 left-0" />

    <div class="flex flex-col lg:flex-row gap-20 justify-center items-center">
      <div class="flex flex-col items-center relative">
        <h3 class="p-36 text-6xl text-white font-[Montserrat-Bold]">
          Order a <br />
          <span style="color: #a0114e"> customized </span><br />
          set of sweets
        </h3>
        <p class="text-white text-xl w-96" >Fill out the form and we will call you back to place your order</p>

        <div class="flex flex-col gap-10 items-start mt-10 w-full pl-40">
        <div class="relative">
          <img src="../assets/svg/profile-solid.svg" class="absolute right-2 -top-1">
          <input type="text" class="border-b-2  bg-transparent w-80 focus:outline focus:outline-pink-500 focus:outline-offset-8 text-white px-1.5 transition-all rounded-t placeholder:text-white" placeholder="Jon Doe">
        </div>
        <div class="relative">
          <img src="../assets/svg/phone-solid.svg" class="absolute right-2 -top-1">
          <input type="text" class="border-b-2  bg-transparent w-80 focus:outline focus:outline-pink-500 focus:outline-offset-8 text-white px-1.5 transition-all rounded-t placeholder:text-white" placeholder="+1 745 352 1702">
        </div>

        <button
          class="text-white"
          style="
            background: linear-gradient(
              85.61deg,
              #9c0746 -15.57%,
              #b44e79 128.11%
            );
            width: 200px;
            height: 60px;
            top: 5076px;
            left: 860px;
            gap: 0px;
            border-radius: 50px 50px 50px 50px;
            opacity: 0px;
            box-shadow: 0px 20px 40px 0px #42021d4f;
          ">
          Order now!
        </button>
        </div>
      </div>

      <img src="../assets/img/sweet-box.png" alt="sweet box" />
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style></style>
