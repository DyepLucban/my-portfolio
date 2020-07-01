<template>
    <b-card bg-variant="dark" text-variant="white">
        <b-form>
            <b-row>
                <b-col lg="6">
                    <b-form-group label="Email address:" label-for="email" description="I'll never share your email with anyone else.">
                        <b-form-input v-model="data.email" autocomplete="off" size="lg" type="email" placeholder="Enter email"></b-form-input>
                    </b-form-group>
                </b-col>

                <b-col lg="6">
                    <b-form-group label="Your Name:" label-for="input-2">
                        <b-form-input v-model="data.name" autocomplete="off" size="lg" placeholder="Enter name"></b-form-input>
                    </b-form-group>
                </b-col>

                <b-col lg="12">
                    <b-form-group label="Subject" label-for="input-2">
                        <b-form-input v-model="data.subject" autocomplete="off" size="lg" placeholder="Enter Subject"></b-form-input>
                    </b-form-group>
                </b-col>

                <b-col>
                    <b-form-group label="Your Message:" label-for="input-3">
                        <b-textarea v-model="data.message" size="lg"></b-textarea>
                    </b-form-group>
                    <b-button size="lg" variant="info" @click="sendEmail">Submit</b-button>   
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
        }
    }),


    methods: {
        ...mapActions('contact', ['sendNewEmail']),

        async sendEmail() {
            let res = await this.sendNewEmail(this.data);
            if(res) {
                this.data = ''
                this.$swal('Your Email is Successfully Sent!');
            }
        }
    }
    
}
</script>