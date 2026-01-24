<template>
    <v-main class="main-container">
        <!-- SECTION Landing -->
        <v-container class="home">
            <h5>Hello! I am</h5> 
                
            <h1>Elgene John Reyes</h1>
            
            <h3>and I'm a Full Stack Software Engineer</h3>

            <div>
                <ButtonOutlined class="button" text="Get in touch"></ButtonOutlined>
                <ButtonColored class="button" text="Download CV" @click="openCV()"></ButtonColored>
            </div>
        </v-container>

        <!-- SECTION Professional Experience -->
        <v-container class="professional-experiece">
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
        </v-container>

        <!-- SECTION Software Engineering Projects -->
        <v-container class="software-engineering-projects">
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
        </v-container>

        <!-- SECTION Skills -->
        <v-container class="skills">
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
        </v-container>

        <!-- SECTION About Me -->
        <v-container class="about-me">
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
        </v-container>

        <!-- SECTION Contact Me -->
        <v-container class="contact-me">
            <h1>CONTACT ME</h1>
            <v-card class="cm-card">
                <v-form class="cm-form">
                    <v-text-field
                        label="Name"
                        variant="outlined"
                        required
                    ></v-text-field>
                    <v-text-field
                        label="Email"
                        variant="outlined"
                        required
                    ></v-text-field>
                    <v-textarea
                        label="Message"
                        variant="outlined"
                        required
                    ></v-textarea>
                    <ButtonColored text="Submit"></ButtonColored>
                </v-form>
            </v-card>
        </v-container>
    </v-main>
</template>

<script setup>
import { computed} from 'vue';
import ButtonColored from '../base/buttonColored.vue';
import cvFile from '../../assets/Elgene_Reyes_Full_Stack_Software_Engineer.pdf'
    
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