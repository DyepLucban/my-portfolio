<template>
    <b-container id="portfolio-holder" class="p-4">
        <b-row>
            <b-col cols="12">
                <h5 style="color:gray;">PORTFOLIO <span style="color:teal;">{ }</span></h5>
                <h1 class="mb-3" style="color:white;">MY WORKS</h1>
            </b-col>            
        </b-row>
        <b-row>
            <b-col class="mb-4" lg="4" v-for="(item, k) in works" :key="k">
                <b-card :title="item.title" :img-src="item.image" img-alt="Image" img-top tag="article" style="max-width: 25rem;" class="mb-2">
                    <b-card-text>
                        {{ item.description }}
                    </b-card-text>

                    <h6>Tech Used:</h6>
                    <b-card-text>
                        <div v-for="(lang, k) in item.language_used" :key="k" style="float:left;">
                            <b-badge pill variant="success" class="mr-1">{{ lang.name }}</b-badge>
                        </div>
                    </b-card-text>
                    <br><br>
                    <a class="btn btn-primary" variant="primary" :href="item.url" target="_blank">View Project</a>
                </b-card>                
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
export default {
    name: 'PortfolioComponent',

    components: {},

    data() {
        return {
            works: [
                {
                    title: 'Library System',
                    description: 'This system allows the user to borrow books.',
                    url: 'https://lucban-library-system.herokuapp.com/',
                    image: require('@/assets/images/library_system.png'),
                    language_used: [
                        { name: 'Laravel' },
                        { name: 'Vue.js' },
                        { name: 'MySQL' },
                    ],
                },
                {
                    title: 'Project 2',
                    description: 'Still under recoding',
                    url: '#',
                    image: require('@/assets/images/under_construction.png'),                    
                    language_used: [
                        {},
                    ],
                },
                {
                    title: 'Project 3',
                    description: 'Still under recoding',
                    url: '#',
                    image: require('@/assets/images/under_construction.png'),                    
                    language_used: [
                        {},
                    ],

                },
                {
                    title: 'Project 4',
                    description: 'Still under recoding',
                    url: '#',
                    image: require('@/assets/images/under_construction.png'),                    
                    language_used: [
                        {},
                    ],

                },                                                                               
            ],
        }
    }
}
</script>