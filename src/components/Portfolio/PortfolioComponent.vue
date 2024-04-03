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
                <b-card no-body style="max-width: 30rem;" :img-src="item.image" img-alt="Image" img-top>
                    <template #header>
                        <h4 class="mb-0">
                            <span id="portfolio-header-brace">{ }</span>
                            {{ item.title }}
                        </h4>
                    </template>

                    <b-card-body>
                        <b-card-text class="portfolio-text">
                            {{ item.description }}
                        </b-card-text>
                    </b-card-body>

                    <b-list-group flush>
                        <b-list-group-item class="portfolio-text">
                            <b-card-text>
                                <b>
                                    Tech Used:
                                </b>
                            </b-card-text>
                            <b-card-text>
                                <div v-for="(lang, k) in item.language_used" :key="k" style="float:left;">
                                    <b-badge pill variant="default" id="portfolio-badge" class="mr-1">{{ lang.name }}</b-badge>
                                </div>
                            </b-card-text>
                        </b-list-group-item>
                    </b-list-group>

                    <b-card-body>
                        <a v-if="item.url != '#'" class="btn btn-default project-view-btn" :href="item.url" target="_blank">View Project</a>
                        <button v-else class="btn btn-default project-view-btn" disabled>Not Applicable</button>
                    </b-card-body>
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
                    description: 'The administrator will able to see the list of both available and borrowed books. Also, the history of who borrowed the books with their due dates. While the students will be able to see the available books to borrow',
                    url: 'https://lucban-library-system.herokuapp.com/',
                    image: require('@/assets/images/library_system-min.png'),
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
                    image: require('@/assets/images/under_construction-min.png'),                    
                    language_used: [
                        {},
                    ],
                },
                {
                    title: 'Project 3',
                    description: 'Still under recoding',
                    url: '#',
                    image: require('@/assets/images/under_construction-min.png'),                    
                    language_used: [
                        {},
                    ],
                },                                                                             
            ],
        }
    }
}
</script>