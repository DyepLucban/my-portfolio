<template>
    <b-container id="contact-holder" class="p-4">
        <b-row>
            <b-col>
                <h5 style="color:gray;">CONTACT <span style="color:teal;">{ }</span></h5>
                <h1 class="mb-3" style="color:white;">CONTACT ME</h1>
            </b-col>
        </b-row>
        <b-row>
            <b-col>
                <h3 style="color:teal;">Let's Talk</h3>
                <h4 id="contact-subheader">
                    Got a question? Interested in working together or talk about a project? I'd love to hear from you soon. Send me a message
                    and I'll get back to you right a way.
                </h4>
            </b-col>
        </b-row>
        <br>
        <b-row>
            <b-col class="mb-4" lg="6">
                <b-card bg-variant="dark" text-variant="white">
                    <b-card-text id="info-box" class="m-0">
                        <div id="icon-holder">
                            <font-awesome-icon id="media-icons" :icon="['fas', 'envelope']" size="lg"/>
                        </div>    
                        <h4 style="color:gray;" class="pl-3">Email Me</h4>
                    </b-card-text>
                    <b-card-text>
                        <h4 id="contact-card-content" class="ml-5 pl-4">lucbanjep@gmail.com</h4>
                    </b-card-text>
                </b-card>                
            </b-col>
            <b-col class="mb-4" lg="6" >
                <b-card bg-variant="dark" text-variant="white">
                    <b-card-text id="info-box" class="m-0">
                        <div id="icon-holder">
                            <font-awesome-icon id="media-icons" :icon="['fas', 'share-alt']" size="lg"/>
                        </div>
                        <h4 style="color:gray;" class="pl-3">Social Media</h4>
                    </b-card-text>
                    <b-card-text>
                        <h4 class="ml-5 pl-4">
                            <a href="https://www.facebook.com/hachi.pee.5" class="mr-3">
                                <font-awesome-icon :icon="['fab', 'facebook-square']" size="lg" class="contact-media-icons"/>
                            </a>
                            <a href="https://ithub.com/DyepLucban" class="mr-3">
                                <font-awesome-icon :icon="['fab', 'github-square']" size="lg" class="contact-media-icons"/>
                            </a>
                            <a href="https://www.linkedin.com/in/jeffrey-lucban" class="mr-3">
                                <font-awesome-icon :icon="['fab', 'linkedin']" size="lg" class="contact-media-icons"/>
                            </a>                            
                        </h4>
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
