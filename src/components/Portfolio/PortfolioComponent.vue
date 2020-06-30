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
                <b-card :title="item.title" img-src="https://picsum.photos/600/300/?image=25" img-alt="Image" img-top tag="article" style="max-width: 25rem;" class="mb-2">
                    <b-card-text>
                        {{ item.description }}
                    </b-card-text>
                    <b-card-text>
                        {{ item.language_used }}
                    </b-card-text>

                    <b-button variant="primary">View Project</b-button>
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
                    title: 'Project 1',
                    description: 'Description 1',
                    language_used: 'language',
                },
                {
                    title: 'Project 2',
                    description: 'Description 2',
                    language_used: 'language',
                },
                {
                    title: 'Project 3',
                    description: 'Description 3',
                    language_used: 'language',
                },
                {
                    title: 'Project 4',
                    description: 'Description 4',
                    language_used: 'language',
                },                                                                               
            ],
        }
    }
}
</script>