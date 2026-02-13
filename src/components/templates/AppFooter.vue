<template>
    <v-footer class="footer-main-container">
        <v-container>
            <v-row>
                <v-col class="title-container">
                    <h1 class="title" @click="navigation.gotoSection('homeRef')">
                        Software <span class="title-gene">GENE</span>gineer
                    </h1>
                    <i class="subtitle">"Full Stack Engineer. Occasional Bug Creator. Eternal Problem Solver."</i>
                </v-col>

                <v-col class="navigation-container">
                    <b>Navigation</b>
                    
                    <nav>
                        <ul>
                            <li @click="navigation.gotoSection('professionalExperience')">Experience</li>
                            <li @click="navigation.gotoSection('softwareEngineeringProjects')">Projects</li>
                            <li @click="navigation.gotoSection('skills')">Skills</li>
                            <li @click="navigation.gotoSection('aboutMe')">About</li>
                            <li @click="navigation.gotoSection('contactMe')">Contact</li>
                        </ul>
                    </nav>
                </v-col>

                <v-col class="contacts-container">
                    <b>Contacts</b>

                    <ul>
                        <li>(+63) 993-5637-866</li>
                        <li>elgenereyes1515@gmail.com</li>
                        <li>Tanza, Cavite, PH</li>
                    </ul>
                </v-col>

                <v-col class="socials-container">
                    <b>Socials</b>
                    
                    <div class="socialButton">
                        <v-icon v-for="(onlinePlatform, index) in onlinePlatforms" :key="index" @click="openOnlineProfiles(onlinePlatform.name)">
                            {{onlinePlatform.icon}}
                        </v-icon>
                    </div>
                </v-col>
            </v-row>

            <v-row>
                <v-col>
                    <div class="copyright-container">
                        Copyright © {{ new Date().getFullYear() }} by <strong>GENE</strong> 
                        <small class="d-block d-sm-inline"> - Built with Vue, Vuetify, SCSS</small>
                    </div>
                </v-col>
            </v-row>
        </v-container>
    </v-footer>
</template>

<script setup>
    import { useNavigationStore } from '@/stores/navigation';

    const navigation = useNavigationStore();
    
    const onlinePlatforms = [
        {
            name: 'facebook',
            icon: 'mdi-facebook',
        },
        {
            name: 'github',
            icon: 'mdi-github',
        },
        {
            name: 'linkedin',
            icon: 'mdi-linkedin',
        }
    ];

    const openOnlineProfiles = (onlinePlatformName) =>{
        switch (onlinePlatformName) {
            case 'facebook':
                window.open('https://www.facebook.com/elgene8/', '_blank');
                break;
            case 'github':
                window.open('https://github.com/elgene1515', '_blank');
                    break;
            case 'linkedin':
                window.open('https://www.linkedin.com/in/elgene-reyes/', '_blank');
                break;
            default:
                break;
        }
    }
</script>

<style lang="scss" scoped>
    .footer-main-container {
        background-color: #0d1b2a !important;
        color: white;
        padding: 3rem 0 1rem 0;

        .v-row{
            display: flex;
            flex-direction: column;

            .title-container{
                display: flex;
                flex-direction: column;
                align-items: center;

                .title{
                    font-weight: bold;
                    font-size: 1.5rem;
                    color: cyan;
                    cursor: pointer;
                    
                    .title-gene{
                        color: white; 
                    }
                }
                .subtitle {
                    font-size: 0.75rem;
                    opacity: 0.6;
                    margin-top: 0.5rem;
                    text-align: center;
                }
            }

            .navigation-container{
                display: flex;
                flex-direction: column;
                align-items: center;

                b {
                    color: cyan;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                    font-size: 0.9rem;
                    border-bottom: 1px solid rgba(0, 255, 255, 0.3);
                }

                nav{
                    margin-top: 0.5rem;
                    
                    ul {
                        list-style: none;
                        padding: 0;
                        text-align: center;
                        
                        li {
                            margin-bottom: 0.5rem;
                            font-size: 0.9rem;
                            opacity: 0.8;
                            cursor: pointer;
                            transition: 0.3s;
            
                            &:hover {
                                opacity: 1;
                                color: cyan;
                            }
                        }
                    }
                }
            }

            .contacts-container{
                display: flex;
                flex-direction: column;
                align-items: center;
                
                b {
                    color: cyan;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                    font-size: 0.9rem;
                    border-bottom: 1px solid rgba(0, 255, 255, 0.3);
                }

                ul {
                    list-style: none;
                    padding: 0;
                    margin-top: 0.5rem;
                    text-align: center;
                    
                    li {
                        margin-bottom: 0.5rem;
                        font-size: 0.9rem;
                        opacity: 0.8;
                        cursor: pointer;
                        transition: 0.3s;
        
                        &:hover {
                            opacity: 1;
                            color: cyan;
                        }
                    }
                }
            }

            .socials-container{
                display: flex;
                flex-direction: column;
                align-items: center;

                b {
                    color: cyan;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                    font-size: 0.9rem;
                    border-bottom: 1px solid rgba(0, 255, 255, 0.3);
                }

                .socialButton {
                    display: flex;
                    gap: 1.5rem;
                    margin-top: 0.5rem;
                    
                    .v-icon {
                        cursor: pointer;
                        transition: transform 0.2s;
                        
                        &:hover {
                            color: cyan;
                            transform: translateY(-3px);
                        }
                    }
                }
            }
        }

        .v-row{
            .v-col{
                .copyright-container {
                    font-size: 0.8rem;
                    opacity: 0.5;
                    border-top: 1px solid gray;
                    padding: 1rem;
                    display: block;
                    text-align: center;
                }
            }
        }
    }
</style>