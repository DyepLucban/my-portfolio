<template>
    <b-card bg-variant="dark" text-variant="white">
        <b-form>
            <b-row>
                <b-col lg="6">
                    <b-form-group label="Email address:" description="I'll never share your email with anyone else.">
                        <b-form-input v-model="data.email" autocomplete="off" size="lg" type="email" placeholder="Enter email" :state="this.error.email.state"></b-form-input>
                        <b-form-invalid-feedback id="email-feedback">{{ this.error.email.message }}</b-form-invalid-feedback>                        
                    </b-form-group>
                </b-col>

                <b-col lg="6">
                    <b-form-group label="Your Name:">
                        <b-form-input v-model="data.name" autocomplete="off" size="lg" placeholder="Enter name" :state="this.error.name.state"></b-form-input>
                        <b-form-invalid-feedback id="name-feedback">{{ this.error.name.message }}</b-form-invalid-feedback>                        
                    </b-form-group>
                </b-col>

                <b-col lg="12">
                    <b-form-group label="Subject">
                        <b-form-input v-model="data.subject" autocomplete="off" size="lg" placeholder="Enter Subject" :state="this.error.subject.state"></b-form-input>
                        <b-form-invalid-feedback id="subject-feedback">{{ this.error.subject.message }}</b-form-invalid-feedback>                        
                    </b-form-group>
                </b-col>

                <b-col>
                    <b-form-group label="Your Message:">
                        <b-textarea v-model="data.message" size="lg" :state="this.error.message.state"></b-textarea>
                        <b-form-invalid-feedback id="message-feedback">{{ this.error.message.message }}</b-form-invalid-feedback>                        
                    </b-form-group>
                    <div v-if="sending == false">
                        <b-button size="lg" variant="info" @click="sendEmail">
                            Submit 
                        </b-button>
                    </div>
                    <div v-else>
                        <b-button size="lg" variant="info" disabled>
                            Sending ... 
                            <b-spinner lg></b-spinner>
                        </b-button>
                    </div>
                   
                </b-col>
            </b-row>
        </b-form>                    
    </b-card> 
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {    
    name: 'ContactFormComponent',

    component: {

    },

    data: () => ({
        data: {
            email: '',
            name: '',
            subject: '',
            message: '',
        },
        error: {
            email: {
                state: null,
                message: '',
            },
            name: {
                state: null,
                message: '',
            },
            subject: {
                state: null,
                message: '',
            },
            message: {
                state: null,
                message: '',
            },                                    
        },
        state: null,
        sending: false
    }),


    methods: {
        ...mapActions('contact', ['sendNewEmail']),

        async sendEmail() {
            this.sending = true
            let res = await this.sendNewEmail(this.data);

            if(res.status == 200) {
                this.data = ''
                this.error.email.state = null;
                this.error.name.state = null;
                this.error.subject.state = null;
                this.error.message.state = null;
                this.$swal(res.data.message);
                this.sending = false
            } else if (res.code == 422) {
                this.error.email.message = (res.message.email) ? res.message.email.toString() : ''
                this.error.email.state = (res.message.email) ? false : true
                this.error.name.message = (res.message.name) ? res.message.name.toString() : ''
                this.error.name.state = (res.message.name) ? false : true
                this.error.subject.message = (res.message.subject) ? res.message.subject.toString() : ''
                this.error.subject.state = (res.message.subject) ? false : true
                this.error.message.message = (res.message.message) ? res.message.message.toString() : ''
                this.error.message.state = (res.message.message) ? false : true
                this.sending = false
            } else {
                this.$swal(res.message);
                this.data = ''
                this.error.email.state = null;
                this.error.name.state = null;
                this.error.subject.state = null;
                this.error.message.state = null;      
                this.sending = false
            }
        }
    }
    
}
</script>