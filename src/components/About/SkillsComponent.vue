<template>
    <b-container id="about-holder" class="p-4">
        <b-row>
            <b-col>
                <h5 style="color:gray;">SKILLS <span style="color:teal;">{ }</span></h5>
            </b-col>
        </b-row>    
        <b-row>
            <b-col class="mb-4" sm="4" cols="12" v-for="(item, i) in skills" :key="i">
                <b-card bg-variant="dark" text-variant="white">
                    <b-card-text id="icon-box">
                        <font-awesome-icon
                            :icon="[item.prefix, item.icon]"
                            size="2x"
                            :color="item.color"
                        />
                        <h5 class="pl-3 mb-0">{{ item.name }}</h5>
                    </b-card-text>
                </b-card>
            </b-col>
        </b-row>    
    </b-container>
</template>

<script>
export default {
    name: "SkillsComponent",

    components: {

    },

    data() {
        return{
            skills: [
                {
                    name: 'HTML',
                    prefix: 'fab',
                    icon: 'html5',
                    color: '#DE4B25',
                },
                {
                    name: 'CSS',
                    prefix: 'fab',
                    icon: 'css3-alt',
                    color: '#1A70B5',
                },
                {
                    name: 'Javascript',
                    prefix: 'fab',
                    icon: 'js',
                    color: '#EED818',
                },
                {
                    name: 'PHP',
                    prefix: 'fab',
                    icon: 'php',
                    color: '#4D588F',
                },
                {
                    name: 'Laravel',
                    prefix: 'fab',
                    icon: 'laravel',
                    color: '#FF2D20',
                },                
                {
                    name: 'Node.js',
                    prefix: 'fab',
                    icon: 'node-js',
                    color: '#659B60',
                },
                {
                    name: 'Bootstrap',
                    prefix: 'fab',
                    icon: 'bootstrap',
                    color: '#563D7C',
                },                  
                {
                    name: 'Vue',
                    prefix: 'fab',
                    icon: 'vuejs',
                    color: '#41B883',
                },
                {
                    name: 'MYSql',
                    prefix: 'fas',
                    icon: 'database',
                    color: '#005E86',
                },                
                {
                    name: 'GIT',
                    prefix: 'fab',
                    icon: 'git',
                    color: '#3B2C00',
                },                
            ],
        }
    }
}
</script>
