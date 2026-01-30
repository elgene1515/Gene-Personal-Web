<template>
    <v-main class="main-container">
        <!-- SECTION Home -->
        <div ref="homeRef" class="home">
            <v-row class="h-content">
                <v-col cols="12">
                    <v-container id="h-container">
                        <h5>Hello! I am</h5> 
        
                        <h1>Elgene John Reyes</h1>
                        
                        <h3>and I'm a Full Stack Software Engineer</h3>
                        <v-row>
                            <ButtonOutlined class="button" text="Get in touch" @click="navigation.gotoSection('contactMe')"></ButtonOutlined>
                            <ButtonColored class="button" text="Download CV" @click="openCV()"></ButtonColored>
                        </v-row>
                    </v-container>
                </v-col>
            </v-row>
        </div>

        <!-- SECTION Professional Experience -->
        <div ref="professioinalExperienceRef" class="professional-experiece">
            <h1>PROFESSIONAL EXPERIENCE</h1>
            <v-row class="pe-content">
                <v-col cols="12">
                    <v-card id="pe-experience">
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
                <v-col cols="4">
                    <v-card id="sep-projects">
                        <v-card-title><strong>VisiThoughts (Thesis)</strong></v-card-title>
                        <v-card-subtitle>Lead Programmer</v-card-subtitle>
                        <v-card-text>
                            Implemented a Lexicon-based Sentiment Analysis engine to process customer feedback, 
                            utilizing Django and specialized Natural Language Toolkit (NLTK) toolkit to provide actionable insights for campus administration.
                        </v-card-text>
                        <v-spacer></v-spacer>
                        <v-card-actions>
                            <ButtonOutlined text="View Repository" @click="openProjectRepository('visithoughts')"></ButtonOutlined>
                        </v-card-actions>
                        <v-chip-group>
                            <v-chip>Python</v-chip>
                            <v-chip>Django</v-chip>
                            <v-chip>NLTK</v-chip>
                            <v-chip>HTML5</v-chip>
                            <v-chip>CSS3</v-chip>
                            <v-chip>JavaScript</v-chip>
                            <v-chip>Adobe Photoshop</v-chip>
                        </v-chip-group>
                    </v-card>
                </v-col>

                <v-col cols="4">
                    <v-card id="sep-projects">
                        <v-card-title><strong>Pop and Match (2D Game)</strong></v-card-title>
                        <v-card-subtitle>Lead Programmer & Artist</v-card-subtitle>
                        <v-card-text>
                            Developed game logic and state management in C# for a 2D game, handling asset optimization and responsive UI scaling.
                        </v-card-text>
                        <v-spacer></v-spacer>
                        <v-card-actions>
                            <ButtonOutlined text="View Repository" @click="openProjectRepository('popandmatch')"></ButtonOutlined>
                        </v-card-actions>
                        <v-chip-group>
                            <v-chip>C#</v-chip>
                            <v-chip>Unity</v-chip>
                            <v-chip>Adobe Photoshop</v-chip>
                            <v-chip>Adobe Illustrator</v-chip>
                        </v-chip-group>
                    </v-card>
                </v-col>

                <v-col cols="4">
                    <v-card id="sep-projects">
                        <v-card-title><strong>Pharmacy Information System</strong></v-card-title>
                        <v-card-subtitle>Java Developer</v-card-subtitle>
                        <v-card-text>
                            Designed and implemented a desktop-based management system using Java and OOP principles to streamline inventory tracking and
                            prescription processing.
                        </v-card-text>
                        <v-spacer></v-spacer>
                        <v-card-actions>
                            <ButtonOutlined text="View Repository" @click="openProjectRepository('pharmacyinformationsystem')"></ButtonOutlined>
                        </v-card-actions>
                        <v-chip-group>
                            <v-chip>Java</v-chip>
                            <v-chip>OOP</v-chip>
                        </v-chip-group>
                    </v-card>
                </v-col>
            </v-row>
        </div>

        <!-- SECTION Skills -->
        <div ref="skillsRef" class="skills">
            <h1>SKILLS</h1>
            <v-row class="s-content">
                <v-card id="s-content-skills">
                    <v-col cols="3">
                        <v-card-text>
                            <v-list-item-title>Languages</v-list-item-title>
                            <v-list-item>
                                - JavaScript (ES6+), PHP, Java, SQL, HTML5, CSS3, Python
                            </v-list-item>
                            <v-list-item-title>Frameworks/Libraries</v-list-item-title>
                            <v-list-item>
                                - Laravel, Vue.js, Node.js, Express.js
                            </v-list-item>
                            <v-list-item-title>Databases</v-list-item-title>
                            <v-list-item>
                                - MySQL, MSSQL
                            </v-list-item>
                            <v-list-item-title>Tools & Technologies</v-list-item-title>
                            <v-list-item>
                                - Git, RESTful APIs, Unity Game Engine, Agile
                            </v-list-item>
                            <v-list-item-title>Design/Multimedia</v-list-item-title>
                            <v-list-item>
                                - Adobe Illustrator, Photoshop, Premiere Pro (UI/UX focused)
                            </v-list-item>
                        </v-card-text>
                    </v-col>
                    
                    <v-divider vertical></v-divider>

                    <v-col id="s-content-skills-images" cols="9">
                        <v-row>
                            <v-col><v-img src="logo/HTML5.png"></v-img></v-col>
                            <v-col><v-img src="logo/CSS3.png"></v-img></v-col>
                            <v-col><v-img src="logo/JavaScript.png"></v-img></v-col>
                            <v-col><v-img src="logo/Java.png"></v-img></v-col>
                            <v-col><v-img src="logo/PHP.png"></v-img></v-col>
                            <v-col><v-img src="logo/Python.png"></v-img></v-col>
                            <v-col><v-img src="logo/SQL.png"></v-img></v-col>
                            <v-col><v-img src="logo/Laravel.png"></v-img></v-col>
                            <v-col><v-img src="logo/VueJS.png"></v-img></v-col>
                            <v-col><v-img src="logo/NodeJS.png"></v-img></v-col>
                            <v-col><v-img src="logo/ExpressJS.png"></v-img></v-col>
                            <v-col><v-img src="logo/MySQL.png"></v-img></v-col>
                            <v-col><v-img src="logo/MSSQL.png"></v-img></v-col>
                            <v-col><v-img src="logo/GitHub.png"></v-img></v-col>
                            <v-col><v-img src="logo/GitLab.png"></v-img></v-col>
                            <v-col><v-img src="logo/Unity.png"></v-img></v-col>
                            <v-col><v-img src="logo/AdobeIllustrator.png"></v-img></v-col>
                            <v-col><v-img src="logo/AdobePhotoshop.png"></v-img></v-col>
                            <v-col><v-img src="logo/AdobePremierPro.png"></v-img></v-col>
                        </v-row>
                    </v-col>
                </v-card>
            </v-row>
        </div>

        <!-- SECTION About Me -->
        <div ref="aboutMeRef" class="about-me">
            <h1>ABOUT ME</h1>
            <v-row class="am-content">
                <v-col>
                    <v-card id="am-content-summary">
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
            </v-row>

            <v-row class="am-content">
                <v-col cols="6">
                    <v-card id="am-content-awards-and-certification">
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
                <v-col cols="3">
                    <v-card id="am-content-education">
                        <v-card-title><strong>EDUCATION</strong></v-card-title>
                        <v-row>
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
                            
                        </v-row>
                    </v-card>
                </v-col>

                <v-col cols="3">
                    <v-card id="am-content-language">
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
            <h1>CONTACT ME</h1>
            <v-row class="cm-content">
                <v-col cols="6">
                    <v-card id="cm-content-form">
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
    
    // NOTE for opening project repository
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
    .main-container {
        background-color: #2C3E50;
        
        .home{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: 100vh;
            scroll-margin-top: 100px;

            padding: 15px;
            gap: 25px;
            color: white;

            .h-content{
                height: 100%;
                
                #h-container {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    background-color: transparent;
                    gap: 50px;
                    height: 100%;

                    h5{
                        font-size: 200%;
                        color: white;
                        margin-top: 200px;
                    }
                    h1{
                        font-size: 700%;
                        color: cyan;
                    }
                    h3{
                        font-size: 300%;
                        color: lightslategray;
                    }
                }
            }
        }

        .professional-experiece{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            scroll-margin-top: 100px;
            
            margin: 50px;
            padding: 15px;
            gap: 25px;
            color: white;

            .pe-content{
                width: 100%;

                #pe-experience{
                    background-color: transparent;
                    border: 1px solid white;
                    color: white;
                    padding: 10px;
                    height: 100%;
                }
            }
        }

        .software-engineering-projects{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            scroll-margin-top: 100px;
            
            margin: 50px;
            padding: 15px;
            gap: 25px;
            color: white;

            .sep-content{
                width: 100%;
                display: flex;
                flex-direction: row;
            
                #sep-projects{
                    background-color: transparent;
                    border: 1px solid white;
                    color: white;
                    padding: 10px;
                    width: 500px;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                }
            }
        }

        .skills{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            scroll-margin-top: 100px;
            
            margin: 50px;
            padding: 15px;
            gap: 25px;
            color: white;

            .s-content{
                width: 100%;
            }

            #s-content-skills{
                background-color: transparent;
                border: 1px solid white;
                color: white;
                padding: 15px;
                width: 100%;
                height: 100%;

                display: flex;
                flex-direction: row;
                
                #s-content-skills-images{
                    display: flex;
                    flex-direction: column;
                    
                    .v-img{
                        height: 100px;
                        width: 150px;
                        filter: grayscale(100%);
                    }
                    .v-img:hover{
                        filter: grayscale(0);
                    }
                }
            }
        }

        .about-me{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            scroll-margin-top: 100px;
            
            margin: 50px;
            padding: 15px;
            gap: 25px;
            color: white;

            .am-content{
                width: 100%;

                #am-content-summary{
                    background-color: transparent;
                    border: 1px solid white;
                    color: white;
                    padding: 15px;
                    width: auto;
                    height: 100%;
                }

                #am-content-awards-and-certification{
                    background-color: transparent;
                    border: 1px solid white;
                    color: white;
                    padding: 10px;
                    width: auto;
                    height: 100%;

                    .v-list {
                        background-color: transparent;
                        color: white;
                    }
                }

                #am-content-education{
                    background-color: transparent;
                    border: 1px solid white;
                    color: white;
                    padding: 10px;
                    width: auto;
                    height: 100%;
                }

                #am-content-language{
                    background-color: transparent;
                    border: 1px solid white;
                    color: white;
                    padding: 10px;
                    width: auto;
                    height: 100%;
                }
            }
        }

        .contact-me{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            scroll-margin-top: 100px;
            
            margin: 50px;
            padding: 15px;
            gap: 25px;
            color: white;
            
            .cm-content{
                width: 100%;
                display: flex;
                flex-direction: column;
                align-items: center;
                
            }
            #cm-content-form{
                background-color: transparent;
                border: 1px solid white;
                color: white;
                padding: 10px;
                width: auto;
                height: 100%;
                text-align: center;
                padding: 50px;

                // error messaage color
                :deep(.v-input--error .v-messages__message) {
                    color: #FF5252 !important;
                }

                // label color
                :deep(.v-input--error .v-label) {
                    color: #FF5252 !important;
                }

                // border color
                :deep(.v-input--error .v-field__outline) {
                    color: #FF5252 !important; /* This changes the border color */
                }

                // text cursor and input text color
                :deep(.v-input--error .v-field__input) {
                    caret-color: #FF5252 !important;
                }
            }
        }
    }
</style>