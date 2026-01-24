import { defineStore } from 'pinia'
import { ref } from 'vue';

export const useNavigationStore = defineStore('navigation', () => {
  
  const professionalExperienceRef = ref(null);
  
  function scrollToSection(sectionRef){
    if (sectionRef.value) {
      sectionRef.value.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return {
    professionalExperienceRef,
    scrollToSection 
  }
})
