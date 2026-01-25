<template>
    <v-main class="main-container">
        <!-- SECTION Landing -->
        <div ref="homeRef" class="home">
            <h5>Hello! I am</h5> 
                
            <h1>Elgene John Reyes</h1>
            
            <h3>and I'm a Full Stack Software Engineer</h3>

            <div>
                <ButtonOutlined class="button" text="Get in touch" @click="navigation.gotoSection('contactMe')"></ButtonOutlined>
                <ButtonColored class="button" text="Download CV" @click="openCV()"></ButtonColored>
            </div>
        </div>

        <!-- SECTION Professional Experience -->
        <div ref="professioinalExperienceRef" class="professional-experiece">
            <h1>PROFESSIONAL EXPERIENCE</h1>
            <v-card class="pe-card">
                <v-card-title><strong>Full Stack Web Engineer</strong> | H.R.D SINGAPORE PTE LTD</v-card-title>
                <v-card-subtitle>(Feb 2025 – Present) - {{ getHRDTotalYearsOfExperience.years }} years and {{ getHRDTotalYearsOfExperience.months }} months</v-card-subtitle>
                <v-card-text>
                    Developed and maintained scalable SPAs using Vue.js, improving front-end modularity and user
                    engagement. Engineered robust RESTful APIs using Laravel and Node.js and Express.js, facilitating seamless
                    data exchange between microservices. Optimized MySQL and MSSQL queries, resulting in faster data retrieval times for highconcurrency
                    internal applications. Collaborated in an Agile environment, utilizing Git for version control and peer code reviews to
                    ensure code quality.
                </v-card-text>
            </v-card>
        </div>

        <!-- SECTION Software Engineering Projects -->
        <div ref="softwareEngineeringProjectRef" class="software-engineering-projects">
            <h1>SOFTWARE ENGINEERING PROJECTS</h1>
            <v-card class="sep-card">
                <v-card-title><strong>VisiThoughts (Thesis)</strong></v-card-title>
                <v-card-subtitle>Lead Programmer</v-card-subtitle>
                <v-card-text>
                    Implemented a Lexicon-based Sentiment Analysis engine to process customer feedback, 
                    utilizing Django and specialized Natural Language Toolkit (NLTK) toolkit to provide actionable insights for campus administration.
                </v-card-text>
            </v-card>

            <v-card class="sep-card">
                <v-card-title><strong>Pop and Match (2D Game)</strong></v-card-title>
                <v-card-subtitle>Lead Programmer & Artist</v-card-subtitle>
                <v-card-text>
                    Developed game logic and state management in C# for a 2D game, handling asset optimization and responsive UI scaling.
                </v-card-text>
            </v-card>

            <v-card class="sep-card">
                <v-card-title><strong>Pop and Match (2D Game)</strong></v-card-title>
                <v-card-subtitle>Lead Programmer & Artist</v-card-subtitle>
                <v-card-text>
                    Developed game logic and state management in C# for a 2D game, handling asset optimization and responsive UI scaling.
                </v-card-text>
            </v-card>
        </div>

        <!-- SECTION Skills -->
        <div ref="skillsRef" class="skills">
            <h1>SKILLS</h1>
            <v-card class="s-card">
                <ul>
                    <li>
                        <strong>Languages:</strong>
                        JavaScript (ES6+), PHP, Java, SQL, HTML5, CSS3, Python
                    </li>
                    <li>
                        <strong>Frameworks/Libraries:</strong>
                        Laravel, Vue.js, Node.js, Express.js
                    </li>
                    <li>
                        <strong>Databases:</strong>
                        MySQL, MSSQL
                    </li>
                    <li>
                        <strong>Tools & Technologies:</strong>
                        Git, RESTful APIs, Unity Game Engine, Agile
                    </li>
                    <li>
                        <strong>Design/Multimedia:</strong>
                        Adobe Illustrator, Photoshop, Premiere Pro (UI/UX focused)
                    </li>
                </ul>
            </v-card>
        </div>

        <!-- SECTION About Me -->
        <div ref="aboutMeRef" class="about-me">
            <h1>ABOUT ME</h1>

            <v-card class="am-card">
                <v-card-title><strong>SUMMARY</strong></v-card-title>
                <v-card-text>
                    Full Stack Software Engineer (Laravel, Vue, Node.js) specializing in full-stack web development with
                    a focus on modern JavaScript frameworks and PHP ecosystems. Experienced in migrating legacy
                    concepts to scalable Node.js/Express architectures and optimizing MSSQL/MySQL databases.
                    Leveraging a strong Computer Science foundation to solve complex architectural challenges and
                    improve application performance.
                </v-card-text>
            </v-card>

            <v-card class="am-card">
                <v-card-title><strong>AWARDS & CERTIFICATIONS</strong></v-card-title>
                <ul>
                    <li>
                        <v-card-subtitle>1st Place Winner (CvSU) CALABARZON Regional HackForGov 2 Competition - Sept 2023</v-card-subtitle>
                    </li>
                    <li>
                        <v-card-subtitle>Civil Service Professional Eligibility – (Honor Graduate Eligibility)</v-card-subtitle>
                    </li>
                    <li>
                        <v-card-subtitle>Java (Core Competencies & OOP) Certification – Armada Logics (Nov 11 - Dec 20, 2024)</v-card-subtitle>
                    </li>
                    <li>
                        <v-card-subtitle>Web Development (HTML, CSS, JavaScript) – Armada Logics (Oct 21 - Nov 8, 2024)</v-card-subtitle>
                    </li>
                    <li>
                        <v-card-subtitle>Web Fundamentals – Armada Logics (July 9, 2024 8hrs)</v-card-subtitle>
                    </li>
                    <li>
                        <v-card-subtitle>Advanced UI/UX Concepts (4hrs) & AI Prompt Engineering (4hrs) – Armada Logics (July 8, 2024)</v-card-subtitle>
                    </li>
                </ul>
            </v-card>

            <v-card class="am-card">
                <v-card-title><strong>EDUCATION</strong></v-card-title>
                <v-card-subtitle>Bachelor of Science in Computer Science</v-card-subtitle>
                <v-card-text>
                    <ul>
                        <li>
                            Cavite State University - CCAT Campus
                        </li>
                        <li>
                            2019-2024
                        </li>
                        <li>
                            Magna Cum Laude
                        </li>
                    </ul>
                </v-card-text>
            </v-card>

            <v-card class="am-card">
                <v-card-title><strong>LANGUAGE</strong></v-card-title>
                <v-card-text>
                    <ul>
                        <li>
                            Tagalog
                        </li>
                        <li>
                            English
                        </li>
                    </ul>
                </v-card-text>
            </v-card>
        </div>

        <!-- SECTION Contact Me -->
        <div ref="contactMeRef" class="contact-me">
            <h1>CONTACT ME</h1>
            <v-card class="cm-card">
                <v-form class="cm-form" ref="formRef" @submit.prevent="sendEmail">
                    <v-text-field
                        v-model="form.name"
                        label="Name"
                        variant="outlined"
                        clearable
                        :rules="[rules.required]"
                    ></v-text-field>
                    <v-text-field
                        v-model="form.email"
                        label="Email"
                        variant="outlined"
                        placeholder="example@email.com"
                        type="email"
                        clearable
                        :rules="[rules.required, rules.email]"
                    ></v-text-field>
                    <v-textarea
                        v-model="form.message"
                        label="Message"
                        variant="outlined"
                        clearable
                        :rules="[rules.required]"
                    ></v-textarea>
                    <v-btn text="Submit" type="submit"></v-btn>
                </v-form>
            </v-card>
        </div>

        <!-- SECTION dialog -->
        <CustomDialog></CustomDialog>
        <CustomLoader></CustomLoader>
    </v-main>

</template>

<script setup>
import { computed, ref, watch, reactive} from 'vue';
import cvFile from '../../assets/Elgene_Reyes_Full_Stack_Software_Engineer.pdf'
import { useNavigationStore } from '@/stores/navigation';
import { useGlobalStore } from '@/stores/globalStore';
import emailjs from '@emailjs/browser';

    // NOTE stores
    const globalStore = useGlobalStore();

    // NOTE navigation
    const navigation = useNavigationStore();
    const homeRef = ref(null);
    const professioinalExperienceRef = ref(null);
    const softwareEngineeringProjectRef = ref(null);
    const skillsRef = ref(null);
    const aboutMeRef = ref(null);
    const contactMeRef = ref(null);

    watch(
    () => [
        homeRef.value,
        professioinalExperienceRef.value,
        softwareEngineeringProjectRef.value,
        skillsRef.value,
        aboutMeRef.value,
        contactMeRef.value
    ],
    (values) => {
        navigation.homeRef = values[0];
        navigation.professioinalExperienceRef = values[1];
        navigation.softwareEngineeringProjectRef = values[2];
        navigation.skillsRef = values[3];
        navigation.aboutMeRef = values[4];
        navigation.contactMeRef = values[5];
    }
    );

    const openCV = () => {
        window.open(cvFile, '_blank' );
    }

    // NOTE for getting the total years of experience
    const currentDate = new Date();
    const getHRDTotalYearsOfExperience = computed(() => {
        const hiringDateHRD = new Date('2025-02-21')
        var years = currentDate.getFullYear() - hiringDateHRD.getFullYear();
        var months = currentDate.getMonth() - hiringDateHRD.getMonth();

        if(months < 0){
            years = years - 1;
            months = months + 12;
        }

        return {
            'years': years,
            'months': months
        }
    });

    // NOTE form
    const form = reactive({
        name : '',
        email : '',
        message : ''
    })
    const formRef = ref(null);    

    const rules = reactive({
        required: value => !!value || 'This field is required.',
        email: value => {
            const pattern = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/
            return pattern.test(value) || 'Invalid email address.'
        }
    })
    
    // NOTe Email Sending
    const sendEmail = async () => {
        const { valid } = await formRef.value.validate();

        if (valid) {
            const templateParams = {
                name: form.name,
                email: form.email,
                message: form.message,
            }

            try {
                // Replace with your actual IDs from the EmailJS dashboard
                globalStore.isLoading = true;
                await emailjs.send(
                    'service_82x2571', 
                    'template_4ondxdk', 
                    templateParams, 
                    'AhZioTCSlmn32-hQO'
                );
                globalStore.isLoading = false;

                // Success state
                globalStore.dialog.isSHow = true;
                globalStore.dialog.title = "Email Sent";
                globalStore.dialog.status = "success";
                globalStore.dialog.text = "Thank you for messaging me. I will respond to your inquiry via email as soon as I get notified. Have a nice day!";
                
                formRef.value.reset(); // Clears form and validation
                
            } catch (error) {
                // Error state
                globalStore.dialog.title = "Sending Failed";
                globalStore.dialog.status = "error";
                globalStore.dialog.text = "There was an issue sending your message. Please try again later.";
                console.error('EmailJS Error:', error);
            }

            formRef.value.reset();
        }
    };
</script>

<style scoped>
    .main-container {
        height: 100%;
        background-color: #2C3E50;
    }

    .home{
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 50px;
        color: white;
    }
    .home h5{
        font-size: 200%;
        color: white;
    }
    .home h1{
        font-size: 700%;
        color: cyan;
    }
    .home h3{
        font-size: 300%;
        color: lightslategray;
    }

    .professional-experiece{
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 50px;
        color: white;
    }
    .pe-card{
        padding: 15px;
        background-color: transparent;
        color: white;
        border: 1px solid white;
        width: 50%;
    }

    .software-engineering-projects{
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 50px;
        color: white;
    }
    .sep-card{
        padding: 15px;
        background-color: transparent;
        color: white;
        border: 1px solid white;
        width: 50%;
    }

    .skills{
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 50px;
        color: white;
    }
    .s-card{
        padding: 15px;
        background-color: transparent;
        color: white;
        border: 1px solid white;
        width: 50%;
        padding: 50px;
    }

    .about-me{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 50px;
        color: white;
    }
    .am-card{
        padding: 15px;
        background-color: transparent;
        color: white;
        border: 1px solid white;
        width: 50%;
        padding: 50px;
    }

    .contact-me{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 50px;
        color: white;
    }
    .cm-card{
        padding: 15px;
        background-color: transparent;
        color: white;
        border: 1px solid white;
        width: 50%;
        padding: 50px;
    }
    .cm-form{
        display: flex;
        flex-direction: column;
    }
</style>