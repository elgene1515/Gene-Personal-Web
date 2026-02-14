<template>
    <v-main class="main-container">
        <!-- SECTION Home -->
        <div ref="homeRef" class="home">
            <v-row class="h-content">
                <v-col>
                    <v-container class="h-container">
                        <h5>Hello! I am</h5> 
        
                        <h1>Elgene John Reyes</h1>
                        
                        <h3>and I'm a Full Stack Software Engineer</h3>
                        <div class="h-button">
                            <ButtonOutlined class="button" text="Get in touch" @click="navigation.gotoSection('contactMe')"></ButtonOutlined>
                            <ButtonColored class="button" text="Download CV" @click="openCV()"></ButtonColored>
                        </div>
                    </v-container>
                </v-col>
            </v-row>
        </div>

        <!-- SECTION Professional Experience -->
        <div ref="professioinalExperienceRef" class="professional-experiece">
            <h1>PROFESSIONAL EXPERIENCE</h1>
            <v-row class="pe-content">
                <v-col>
                    <v-card class="pe-experience">
                        <v-card-title><strong>Full Stack Web Engineer</strong> | H.R.D SINGAPORE PTE LTD</v-card-title>
                        <v-card-subtitle>(Feb 2025 – Present) - {{ getHRDTotalYearsOfExperience.years }} years and {{ getHRDTotalYearsOfExperience.months }} months</v-card-subtitle>
                        <v-card-text>
                            Developed and maintained scalable SPAs using Vue.js, improving front-end modularity and user
                            engagement. Engineered robust RESTful APIs using Laravel and Node.js and Express.js, facilitating seamless
                            data exchange between microservices. Optimized MySQL and MSSQL queries, resulting in faster data retrieval times for highconcurrency
                            internal applications. Collaborated in an Agile environment, utilizing Git for version control and peer code reviews to
                            ensure code quality.
                        </v-card-text>
                        <v-chip-group>
                            <v-chip>Laravel</v-chip>
                            <v-chip>Vue JS</v-chip>
                            <v-chip>Node JS</v-chip>
                            <v-chip>Express JS</v-chip>
                            <v-chip>PHP</v-chip>
                            <v-chip>JavaScript</v-chip>
                            <v-chip>HTML 5</v-chip>
                            <v-chip>CSS 3</v-chip>
                            <v-chip>SQL</v-chip>
                            <v-chip>SQL DBX</v-chip>
                            <v-chip>MSSQL</v-chip>
                        </v-chip-group>
                    </v-card>
                </v-col>
            </v-row>
        </div>

        <!-- SECTION Software Engineering Projects -->
        <div ref="softwareEngineeringProjectRef" class="software-engineering-projects">
            <h1>SOFTWARE ENGINEERING PROJECTS</h1>
            <v-row class="sep-content">
                <v-col>
                    <ButtonOutlined class="left" icon="mdi-chevron-left" @click="prev"></ButtonOutlined>
                </v-col>
    
                <v-col>
                    <v-card :class="['sep-projects-card', getCardClass(projectKey)]" v-for="(project , projectKey) in listOfSoftwareEngineeringProjects" :key="projectKey">
                        <v-card-title><strong>{{ project.title}}</strong></v-card-title>
                        <v-card-subtitle>{{ project.role }}</v-card-subtitle>
                        <v-card-text>{{ project.description }}</v-card-text>
                        <v-spacer></v-spacer>
                        <v-card-actions>
                            <ButtonOutlined text="View Repository" @click="openProjectRepository(project.repo)"></ButtonOutlined>
                        </v-card-actions>
                        <v-chip-group>
                            <v-chip v-for="(tag, tagKey) in project.tags" :key="tagKey">{{ tag }}</v-chip>
                        </v-chip-group>
                    </v-card>
                </v-col>
    
                <v-col>
                    <ButtonOutlined class="right" icon="mdi-chevron-right" @click="next"></ButtonOutlined>
                </v-col>
            </v-row>
        </div>

        <!-- SECTION Skills -->
        <div ref="skillsRef" class="skills">
            <h1>SKILLS</h1>
            <v-row class="s-content">
                <v-col>
                    <v-card class="s-skills">
                        <v-card-title>Languages</v-card-title>
                        <v-card-text>
                            <div class="s-skills-card">
                                <div class="s-skills-card-icon-box">
                                    <v-img src="logo/JavaScript.png"></v-img>
                                </div>
                                <span class="s-skills-card-name">JavaScript</span>
                            </div>

                            <div class="s-skills-card">
                                <div class="s-skills-card-icon-box">
                                    <v-img src="logo/PHP.png"></v-img>
                                </div>
                                <span class="s-skills-card-name">PHP</span>
                            </div>

                            <div class="s-skills-card">
                                <div class="s-skills-card-icon-box">
                                    <v-img src="logo/Java.png"></v-img>
                                </div>
                                <span class="s-skills-card-name">Java</span>
                            </div>

                            <div class="s-skills-card">
                                <div class="s-skills-card-icon-box">
                                    <v-img src="logo/SQL.png"></v-img>
                                </div>
                                <span class="s-skills-card-name">SQL</span>
                            </div>

                            <div class="s-skills-card">
                                <div class="s-skills-card-icon-box">
                                    <v-img src="logo/HTML5.png"></v-img>
                                </div>
                                <span class="s-skills-card-name">HTML5</span>
                            </div>

                            <div class="s-skills-card">
                                <div class="s-skills-card-icon-box">
                                    <v-img src="logo/CSS3.png"></v-img>
                                </div>
                                <span class="s-skills-card-name">CSS3</span>
                            </div>
                            
                            <div class="s-skills-card">
                                <div class="s-skills-card-icon-box">
                                    <v-img src="logo/Python.png"></v-img>
                                </div>
                                <span class="s-skills-card-name">Python</span>
                            </div>
                        </v-card-text>

                        <v-card-title>Frameworks/Libraries</v-card-title>
                        <v-card-text>
                            <div class="s-skills-card">
                                <div class="s-skills-card-icon-box">
                                    <v-img src="logo/Laravel.png"></v-img>
                                </div>
                                <span class="s-skills-card-name">Laravel</span>
                            </div>

                            <div class="s-skills-card">
                                <div class="s-skills-card-icon-box">
                                    <v-img src="logo/VueJS.png"></v-img>
                                </div>
                                <span class="s-skills-card-name">VueJS</span>
                            </div>

                            <div class="s-skills-card">
                                <div class="s-skills-card-icon-box">
                                    <v-img src="logo/NodeJS.png"></v-img>
                                </div>
                                <span class="s-skills-card-name">NodeJS</span>
                            </div>

                            <div class="s-skills-card">
                                <div class="s-skills-card-icon-box">
                                    <v-img src="logo/ExpressJS.png"></v-img>
                                </div>
                                <span class="s-skills-card-name">ExpressJS</span>
                            </div>
                        </v-card-text>
                        
                        <v-card-title>Databases</v-card-title>
                        <v-card-text>
                            <div class="s-skills-card">
                                <div class="s-skills-card-icon-box">
                                    <v-img src="logo/MySQL.png"></v-img>
                                </div>
                                <span class="s-skills-card-name">MySQL</span>
                            </div>

                            <div class="s-skills-card">
                                <div class="s-skills-card-icon-box">
                                    <v-img src="logo/MSSQL.png"></v-img>
                                </div>
                                <span class="s-skills-card-name">MSSQL</span>
                            </div>
                        </v-card-text>

                        <v-card-title>Tools & Technologies</v-card-title>
                        <v-card-text>
                            <div class="s-skills-card">
                                <div class="s-skills-card-icon-box">
                                    <v-img src="logo/GitHub.png"></v-img>
                                </div>
                                <span class="s-skills-card-name">GitHub</span>
                            </div>

                            <div class="s-skills-card">
                                <div class="s-skills-card-icon-box">
                                    <v-img src="logo/GitLab.png"></v-img>
                                </div>
                                <span class="s-skills-card-name">GitLab</span>
                            </div>
                            
                            <div class="s-skills-card">
                                <div class="s-skills-card-icon-box">
                                    <v-img src="logo/Unity.png"></v-img>
                                </div>
                                <span class="s-skills-card-name">Unity</span>
                            </div>
                        </v-card-text>
                        
                        <v-card-title>Design/Multimedia</v-card-title>
                        <v-card-text>
                            <div class="s-skills-card">
                                <div class="s-skills-card-icon-box">
                                    <v-img src="logo/AdobeIllustrator.png"></v-img>
                                </div>
                                <span class="s-skills-card-name">Adobe Illustrator</span>
                            </div>
                            
                            <div class="s-skills-card">
                                <div class="s-skills-card-icon-box">
                                    <v-img src="logo/AdobePhotoshop.png"></v-img>
                                </div>
                                <span class="s-skills-card-name">Adobe Photoshop</span>
                            </div>
                            
                            <div class="s-skills-card">
                                <div class="s-skills-card-icon-box">
                                    <v-img src="logo/AdobePremierPro.png"></v-img>
                                </div>
                                <span class="s-skills-card-name">Adobe PremierPro</span>
                            </div>
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </div>

        <!-- SECTION About Me -->
        <div ref="aboutMeRef" class="about-me">
            <h1>ABOUT ME</h1>
            <v-row class="am-content">
                <v-col>
                    <v-card class="am-summary">
                        <v-card-title><strong>SUMMARY</strong></v-card-title>
                        <v-card-text>
                            Full Stack Software Engineer (Laravel, Vue, Node.js) specializing in full-stack web development with
                            a focus on modern JavaScript frameworks and PHP ecosystems. Experienced in migrating legacy
                            concepts to scalable Node.js/Express architectures and optimizing MSSQL/MySQL databases.
                            Leveraging a strong Computer Science foundation to solve complex architectural challenges and
                            improve application performance.
                        </v-card-text>
                    </v-card>
                </v-col>
                
                <v-col>
                    <v-card class="am-awards-and-certification">
                        <v-card-title><strong>AWARDS & CERTIFICATIONS</strong></v-card-title>
                        <v-card-text>
                            <v-list-item-title>Awards</v-list-item-title>
                            <v-list-item>
                                - 1st Place Winner (CvSU) CALABARZON Regional HackForGov 2 Competition - Sept 2023
                            </v-list-item>
                        </v-card-text>
    
                        <v-card-text>
                            <v-list-item-title>Certifications</v-list-item-title>
                            <v-list-item>
                                - 1st Place Winner (CvSU) CALABARZON Regional HackForGov 2 Competition - Sept 2023
                            </v-list-item>
                            <v-list-item>
                                - Civil Service Professional Eligibility – (Honor Graduate Eligibility)
                            </v-list-item>
                            <v-list-item>
                                - Java (Core Competencies & OOP) Certification – Armada Logics (Nov 11 - Dec 20, 2024)
                            </v-list-item>
                            <v-list-item>
                                - Web Development (HTML, CSS, JavaScript) – Armada Logics (Oct 21 - Nov 8, 2024)
                            </v-list-item>
                            <v-list-item>
                                - Web Fundamentals – Armada Logics (July 9, 2024 8hrs)
                            </v-list-item>
                            <v-list-item>
                                - Advanced UI/UX Concepts (4hrs) & AI Prompt Engineering (4hrs) – Armada Logics (July 8, 2024)
                            </v-list-item>
                        </v-card-text>
                    </v-card>
                </v-col>

                <v-col>
                    <v-card class="am-education">
                        <v-card-title><strong>EDUCATION</strong></v-card-title>
                        <v-card-text>
                            <v-list-item-title>Bachelor of Science in Computer Science</v-list-item-title>
                            <v-list-item>
                                - Cavite State University - CCAT Campus
                            </v-list-item>
                            <v-list-item>
                                - 2019-2024
                            </v-list-item>
                            <v-list-item>
                                - Magna Cum Laude
                            </v-list-item>
                        </v-card-text>
                    </v-card>
                </v-col>

                <v-col>
                    <v-card class="am-language">
                        <v-card-title><strong>LANGUAGE</strong></v-card-title>
                        <v-card-text>
                            <v-list-item>
                                - Tagalog
                            </v-list-item>
                            <v-list-item>
                                - English
                            </v-list-item>
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </div>

        <!-- SECTION Contact Me -->
        <div ref="contactMeRef" class="contact-me">
            <v-row class="cm-content">
                <v-col>
                    <v-card class="cm-form">
                        <v-card-title>CONTACT ME</v-card-title>
                        <v-form  ref="formRef" @submit.prevent="sendEmail">
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
                            <ButtonOutlined text="SEND" type="submit" block></ButtonOutlined>
                        </v-form>
                    </v-card>
                </v-col>
            </v-row>
        </div>
    
        <!-- SECTION dialog -->
        <CustomDialog></CustomDialog>
        <CustomLoader></CustomLoader>
    </v-main>
</template>

<script setup>
import { computed, ref, watch, reactive} from 'vue';
import cvFile from '../../assets/curriculumVitae/Elgene_Reyes_Full_Stack_Software_Engineer.pdf';
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

    // NOTE list of projects
    const listOfSoftwareEngineeringProjects = ref([
        {
            title: "Pharmacy Info System",
            role: "Java Developer",
            repo: "pharmacyinformationsystem",
            description: "Designed and implemented a desktop-based management system using Java and OOP principles to streamline inventory tracking and prescription processing.",
            tags: ["Java", "OOP"]
        },
        {
            title: "VisiThoughts (Thesis)",
            role: "Lead Programmer",
            repo: "visithoughts",
            description: "Implemented a Lexicon-based Sentiment Analysis engine to process customer feedback, utilizing Django and specialized Natural Language Toolkit (NLTK) toolkit to provide actionable insights for campus administration.",
            tags: ["Python", "Django", "NLTK", "HTML5", "CSS3", "JavaScript", "Adobe Photoshop"]
        },
        {
            title: "Pop and Match (2D Game)",
            role: "Lead Programmer & Artist",
            repo: "popandmatch",
            description: "Developed game logic and state management in C# for a 2D game, handling asset optimization and responsive UI scaling.",
            tags: ["C#", "Unity", "Adobe Photoshop", "Adobe Illustrator"]
        }
    ]);

    // NOTE for project carousel
    const activeProjectIndex  = ref(1);
    const next = () => {
        activeProjectIndex.value = (activeProjectIndex.value + 1) % listOfSoftwareEngineeringProjects.value.length;
    }
    const prev = () => {
        activeProjectIndex.value = (activeProjectIndex.value - 1 + listOfSoftwareEngineeringProjects.value.length) % listOfSoftwareEngineeringProjects.value.length;
    }
    const getCardClass = (index) => {
        const total = listOfSoftwareEngineeringProjects.value.length;
        if (index === activeProjectIndex.value) return 'active';
        if (index === (activeProjectIndex.value - 1 + total) % total) return 'prev';
        if (index === (activeProjectIndex.value + 1) % total) return 'next';
        return 'hidden';
    }
    const openProjectRepository = (project) =>{
        switch (project) {
            case 'visithoughts':
                window.open('https://github.com/elgene1515/visithoughts', '_blank');
                break;
            case 'popandmatch':
                window.open('https://github.com/elgene1515/popandmatch', '_blank');
                    break;
            case 'pharmacyinformationsystem':
                window.open('https://github.com/elgene1515/pharmacy-information-system', '_blank');
                break;
            default:
                break;
        }
    }

    // NOTE download CV
    const openCV = () => {
        window.open(cvFile, '_blank' );
    }

    // NOTE for getting the total years of experience
    const currentDate = new Date();
    const getHRDTotalYearsOfExperience = computed(() => {
        const hiringDateHRD = new Date('2025-02-21')
        var years = currentDate.getFullYear() - hiringDateHRD.getFullYear();
        var months = currentDate.getMonth() - hiringDateHRD.getMonth();
        var days = currentDate.getDate() - hiringDateHRD.getDate() + 1;

        if(days < 0){
            months -= 1;
        }
        if(months < 0){
            years = years - 1;
            months = months + 12;
        }

        return {
            'years': years,
            'months': months,
            'days' :days
        }
    });

    // NOTE form
    const formRef = ref(null);    
    const form = reactive({
        name : '',
        email : '',
        message : ''
    })
    const rules = reactive({
        required: value => !!value || 'This field is required.',
        email: value => {
            const pattern = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/
            return pattern.test(value) || 'Invalid email address.'
        }
    })
    
    // NOTE form Email Sending
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

<style lang="scss" scoped>
    // TODO Mobile (Portrait)	0px to 480px	Your base styles (no media query needed).
    .main-container {
        background-color: #2C3E50;

        .home{
            scroll-margin-top: 80px;
            min-height: 100vh; 
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            padding: 20px;
            color: white;

            .h-content{
                width: 100%;
                
                .h-container {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    text-align: center;
                    gap: 3rem; 

                    h5 {
                        padding: 0;
                        line-height: 1.6;
                        font-size: 1.2rem;
                        color: white;                        
                    }

                    h1 {
                        padding: 0;
                        line-height: 1.1;
                        font-size: 2.5rem;
                        color: cyan;
                        text-transform: uppercase;
                    }

                    h3 {
                        padding: 0;
                        line-height: 1.4;
                        font-size: 1.1rem;
                        color: lightslategray;
                        max-width: 80%;
                    }

                    .h-button {
                        display: flex;
                        flex-direction: column;
                    }
                }
            }
        }
        .professional-experiece {
            scroll-margin-top: 80px;
            min-height: 100vh; 
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            padding: 20px;
            color: white;

            h1 {
                margin-bottom: 2rem;
                font-size: 1.8rem;
            }

            .pe-content {
                width: 100%;

                .pe-experience {
                    background-color: rgba(255, 255, 255, 0.05);
                    border: 1px solid cyan;
                    color: white;
                    padding: 1rem;
                    text-align: left;

                    .v-card-title, 
                    .v-list-item-title,
                    .v-card-subtitle {
                        white-space: normal !important;
                        word-wrap: break-word;
                        line-height: 1.4;
                        font-size: 1rem;
                        padding: 2rem 0 0 0;
                        display: block;
                        font-weight: bold;
                    }

                    .v-card-title {
                        padding: 0;
                        font-size: 1.2rem;
                    }

                    .v-card-subtitle {
                        color: cyan;
                        font-weight: normal;
                        font-size: 1rem;
                        padding: 0 0 1rem 0;
                    }

                    .v-card-text {
                        padding: 0;
                        line-height: 1.6;
                        font-size: 0.95rem;
                    }
                    .v-chip-group{
                        :deep(.v-slide-group__content) {
                            justify-content: center;
                        }
                    }
                }
            }
        }
        .software-engineering-projects{
            scroll-margin-top: 80px;
            min-height: 100vh; 
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            padding: 20px;
            color: white;
            height: 500px;
            overflow: hidden;

            h1 {
                margin-bottom: 2rem;
                font-size: 1.8rem;
            }

            .sep-content{
                width: 100%;
                position: relative;

                .left, .right{
                    position: absolute;
                    top: auto;
                    bottom: 100px;
                    z-index: 10;
                    border: 1px solid cyan;
                }
                .left{
                    left: 1em;
                }
                .right{
                    right: 1em;
                }

                .sep-projects-card{ 
                    background-color: rgba(255, 255, 255, 0.05);
                    border: 1px solid cyan;
                    color: white;
                    padding: 1rem;
                    display: flex; 
                    flex-direction: column;
                    align-items: flex-start;
                    text-align: left;
                    transition: all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
                    position: absolute;
                    width: 80vw;
                    opacity: 0;

                    .v-card-title, 
                    .v-list-item-title,
                    .v-card-subtitle {
                        white-space: normal !important;
                        word-wrap: break-word;
                        line-height: 1.4;
                        font-size: 1rem;
                        padding: 2rem 0 0 0;
                        display: block;
                        font-weight: bold;
                    }

                    .v-card-title {
                        padding: 0;
                        font-size: 1.2rem;
                    }

                    .v-card-subtitle {
                        color: cyan;
                        font-weight: normal;
                        font-size: 1rem;
                        padding: 0 0 1rem 0;
                    }

                    .v-card-text {
                        padding: 0;
                        line-height: 1.6;
                        font-size: 0.95rem;
                        margin-bottom: 1rem;
                    }
                    .v-card-actions{
                        display: flex;
                        flex-direction: column;
                        padding: 0;
                        min-height: 0;

                        .v-btn{
                            margin: 0;
                        }
                    }
                    .v-chip-group{
                        :deep(.v-slide-group__content) {
                            justify-content: center;
                        }
                    }
                }
                .sep-projects-card.prev{
                    transform: translateX(-150%) scale(.8);
                    left: 50%;
                    opacity: .2;
                }
                .sep-projects-card.active{
                    transform: translateX(-50%) scale(1);
                    left: 50%;
                    opacity: 1;
                }
                .sep-projects-card.next{
                    transform: translateX(50%) scale(.8);
                    left: 50%;
                    opacity: .2;
                }
            }
        }
        .skills{
            scroll-margin-top: 80px;
            min-height: 100vh; 
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            padding: 20px;
            color: white;

            h1 {
                margin-bottom: 2rem;
                font-size: 1.8rem;
            }

            .s-content{
                width: 100%;
                display: flex;
                flex-direction: column;

                .s-skills{
                    background-color: rgba(255, 255, 255, 0.05);
                    border: 1px solid cyan;
                    color: white;
                    padding: 1rem;
                    
                    .v-card-title{
                        white-space: normal !important;
                        word-wrap: break-word;
                        line-height: 1.4;
                        display: block;
                        font-weight: bold;
                        font-size: 1.2rem;
                        padding: 2rem 0 1rem 0;
                    }

                    .v-card-text {
                        padding: 0; 
                        line-height: 1.6;
                        font-size: 0.95rem;
                        display: flex;
                        flex-wrap: wrap;
                        align-items: center;
                        justify-content: center;
                        gap: 0.5rem;

                        .s-skills-card{
                            height: 7rem;
                            width: 7rem;

                            display: flex;
                            flex-direction: column;
                            align-items: center;
                            justify-content: center;
                            padding: 0.5rem;

                            background-color: rgba(255, 255, 255, 0.1); 
                            border: 1px solid rgba(0, 255, 255, 0.3);
                            border-radius: 12px;

                            .s-skills-card-icon-box{
                                height: 3rem;
                                width: fit-content;
                                min-width: 3rem;
                                display: flex;
                                align-items: center;
                                justify-content: center;
                                margin-bottom: 1rem;

                                .v-img{
                                    object-fit: contain;
                                }
                            }
                            .s-skills-card-name{
                                color: white;
                                font-size: 0.8rem;
                            }
                        }
                    }
                }
            }
        }
        .about-me{
            scroll-margin-top: 80px;
            min-height: 100vh; 
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            padding: 20px;
            color: white;

            h1 {
                margin-bottom: 2rem;
                font-size: 1.8rem;
            }

            .am-content{
                width: 100%;

                .v-col{
                    flex: 0 0 100% !important;
                    max-width: 100% !important;

                    .am-summary, 
                    .am-awards-and-certification, 
                    .am-education, 
                    .am-language {
                        background-color: rgba(255, 255, 255, 0.05);
                        border: 1px solid cyan;
                        color: white;
                        padding: 1rem;
                        text-align: left;
    
                        .v-card-title, 
                        .v-list-item-title,
                        .v-card-subtitle {
                            white-space: normal !important;
                            word-wrap: break-word;
                            line-height: 1.4;
                            font-size: 1rem;
                            padding: 2rem 0 0 0;
                            display: block;
                            font-weight: bold;
                        }
    
                        .v-card-title {
                            padding: 0 0 1rem 0;
                            font-size: 1.2rem;
                        }
    
                        .v-card-subtitle {
                            color: cyan;
                            font-weight: normal;
                            font-size: 1rem;
                            padding: 0 0 1rem 0;
                        }
    
                        .v-card-text {
                            padding: 0;
                            line-height: 1.6;
                            font-size: 0.95rem;
    
                            .v-list-item-title{
                                padding: 0;
                            }
                        }
                    }
                }
            }
        }
        .contact-me{
            scroll-margin-top: 80px;
            min-height: 100vh; 
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            padding: 20px;
            color: white;
            
            .cm-content{
                width: 100%;

                .cm-form{
                    background-color: rgba(255, 255, 255, 0.05);
                    border: 1px solid cyan;
                    color: white;
                    padding: 1.5rem;
                    display: block; 

                    .v-card-title {
                        margin-bottom: 2rem;
                        font-size: 1.8rem;
                    }

                    :deep(.v-text-field), :deep(.v-textarea) {
                        width: 100%;
                    }

                    // Error message colors
                    :deep(.v-input--error .v-messages__message) {
                        color: #FF5252 !important;
                    }

                    // Label color
                    :deep(.v-input--error .v-label) {
                        color: #FF5252 !important;
                    }

                    // Border color
                    :deep(.v-input--error .v-field__outline) {
                        color: #FF5252 !important;
                    }
    
                    // text cursor and input text color
                    :deep(.v-input--error .v-field__input) {
                        caret-color: #FF5252 !important;
                    }
                }
            }
        }
    }
</style>