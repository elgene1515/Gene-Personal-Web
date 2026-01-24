import { defineStore } from 'pinia'
import { ref } from 'vue';

export const useNavigationStore = defineStore('navigation', () => {
  
  const homeRef = ref(null);
  const professioinalExperienceRef = ref(null);
  const softwareEngineeringProjectRef = ref(null);
  const skillsRef = ref(null);
  const aboutMeRef = ref(null);
  const contactMeRef = ref(null);

  const gotoSection = (sectionRef) => {

    switch (sectionRef) {
      case 'homeRef':
        homeRef.value.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'professionalExperience':
        professioinalExperienceRef.value.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'softwareEngineeringProjects':
        softwareEngineeringProjectRef.value.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'skills':
        skillsRef.value.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'aboutMe':
        aboutMeRef.value.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'contactMe':
        contactMeRef.value.scrollIntoView({ behavior: 'smooth' });
        break;
      default:
        break;
    }
  }

  return {
    homeRef,
    professioinalExperienceRef,
    softwareEngineeringProjectRef,
    skillsRef,
    aboutMeRef,
    contactMeRef,
    gotoSection
  }
})
