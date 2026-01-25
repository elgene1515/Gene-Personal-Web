import { defineStore } from "pinia";
import { reactive, ref } from "vue";

export const useGlobalStore = defineStore('globalStore', () => {

    const dialog = reactive({
        isSHow: false,
        title: '',
        text: '',
        status: '',
    });

    const isLoading = ref(false);
    return {
        dialog,
        isLoading,
    }
})