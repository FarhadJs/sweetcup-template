import { defineStore } from "pinia";

export const useStore = defineStore("store", {
  state: () => ({
    is_selecting_cupcake: false,
  }),
  actions: {
    toggleSelectCupCake() {
      this.is_selecting_cupcake = !this.is_selecting_cupcake;
    },
  },
});
