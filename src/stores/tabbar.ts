import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useTabbarStore = defineStore('tabbar', () => {
  const visable = ref(true);

  return { visable }
})
