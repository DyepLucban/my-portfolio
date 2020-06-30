<template>
    <b-card bg-variant="dark" text-variant="white">
        <b-form>
            <b-row>
                <b-col lg="6">
                    <b-form-group label="Email address:" label-for="email" description="I'll never share your email with anyone else.">
                        <b-form-input autocomplete="off" size="lg" id="email" type="email" placeholder="Enter email"></b-form-input>
                    </b-form-group>
                </b-col>

                <b-col lg="6">
                    <b-form-group label="Your Name:" label-for="input-2">
                        <b-form-input autocomplete="off" size="lg" id="input-2" required placeholder="Enter name"></b-form-input>
                    </b-form-group>
                </b-col>

                <b-col lg="12">
                    <b-form-group label="Subject" label-for="input-2">
                        <b-form-input autocomplete="off" size="lg" id="input-2" required placeholder="Enter Subject"></b-form-input>
                    </b-form-group>
                </b-col>

                <b-col>
                    <b-form-group label="Your Message:" label-for="input-3">
                        <b-textarea size="lg"></b-textarea>
                    </b-form-group>
                    <b-button size="lg" type="submit" variant="info">Submit</b-button>                
                </b-col>
            </b-row>
        </b-form>                    
    </b-card> 
</template>

<script>
export default {    
    name: 'ContactFormComponent',

    component: {

    },

    data() {
        return {}
    }
    
}
</script>