import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useListStore = defineStore("list", () => {
  const list = ref([]);
  function addList(param) {
    list.value.push(param);
  }
  const getDataAll = computed(() => list.value);
  return { list, addList, getDataAll };
});
