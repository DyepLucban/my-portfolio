<template>
    <b-container id="contact-holder" class="p-4">
        <b-row>
            <b-col>
                <h5 style="color:gray;">CONTACT <span style="color:teal;">{ }</span></h5>
                <h1 class="mb-3" style="color:white;">CONTACT ME</h1>
            </b-col>
        </b-row>  
        <b-row>
            <b-col class="mb-4" lg="4">
                <b-card bg-variant="dark" text-variant="white">
                    <b-card-text id="info-box" class="m-0">
                        <div id="icon-holder">
                            <font-awesome-icon id="media-icons" :icon="['fas', 'envelope']" size="lg"/>
                        </div>    
                        <h4 style="color:gray;" class="pl-3">Email Me</h4>
                    </b-card-text>
                    <b-card-text>
                        <p class="ml-5 pl-4">lucbanjep@gmail.com</p>
                    </b-card-text>
                </b-card>                
            </b-col>
            <b-col class="mb-4" lg="4" >
                <b-card bg-variant="dark" text-variant="white">
                    <b-card-text id="info-box" class="m-0">
                        <div id="icon-holder">
                            <font-awesome-icon id="media-icons" :icon="['fas', 'share-alt']" size="lg"/>
                        </div>
                        <h4 style="color:gray;" class="pl-3">Social Media</h4>
                    </b-card-text>
                    <b-card-text>
                        <p class="ml-5 pl-4">
                            <a href="#" class="mr-2">
                                <font-awesome-icon :icon="['fab', 'facebook-square']" size="lg"/>
                            </a>
                            <a href="" class="mr-2">
                                <font-awesome-icon :icon="['fab', 'github-square']" size="lg"/>
                            </a>
                            <a href="" class="mr-2">
                                <font-awesome-icon :icon="['fab', 'linkedin']" size="lg"/>
                            </a>                            
                        </p>
                    </b-card-text>
                </b-card>                
            </b-col>
            <b-col class="mb-4" lg="4" >
                <b-card bg-variant="dark" text-variant="white">
                    <b-card-text id="info-box" class="m-0">
                        <div id="icon-holder">
                            <font-awesome-icon id="media-icons" :icon="['fas', 'mobile-alt']" size="lg"/>
                        </div>                            
                        <h4 style="color:gray;" class="pl-3">Call / Text Me</h4>
                    </b-card-text>
                    <b-card-text>
                        <p class="ml-5 pl-4">0923-416-0404</p>
                    </b-card-text>
                </b-card>                
            </b-col>   
            <b-col lg="12">
                <ContactFormComponent />
            </b-col>                     
        </b-row>
    </b-container>    
</template>

<script>
import ContactFormComponent from '@/components/Contact/ContactFormComponent.vue'

export default {
    name: 'ContactComponent',

    components: {
        ContactFormComponent
    },

    data() {
        return {}
    }
}
</script>
