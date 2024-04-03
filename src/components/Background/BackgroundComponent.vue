<template>
    <b-container id="background-holder" class="p-4">
        <b-row>
            <b-col cols="12">
                <h5 style="color:gray;">BACKGROUND <span style="color:teal;">{ }</span></h5>
                <h1 class="mb-3" style="color:white;">PROFESSIONAL EXPERIENCE</h1>
            </b-col>
            <!-- Working Experience -->
            <b-col cols="12" class="mt-5">
                <vue-timeline-update v-for="(items, i) in works" :key="i"
                    :date="new Date(items.date)"
                    :title="items.title"
                    :description="items.description"
                    :category="items.category"
                    icon="mouse"
                    color="turquoise"
                />                
            </b-col>  
        </b-row>
    </b-container>
</template>

<script>
export default {
    name: 'BackgroundComponent',

    components: {
        
    },

    data() {
        return {
            works: [
                {
                    date: "2020-10-16",
                    title: "TWALA",
                    description: 'Integrate elements and data provided by the front end developer to store or retrieve. Handled, integrate and maintain billing service and payment method (Stripe)',
                    category: "Backend Developer (Part-time)",
                },
                {
                    date: "2021-06-21",
                    title: "POLKER",
                    description: 'Integrate elements and data provided by the front end developer to store or retrieve. Handled, integrate and maintain billing service and payment method (Stripe)',
                    category: "Backend Developer",
                },
                {
                    date: "2020-04-06",
                    title: "WTECH SOLUTIONS",
                    description: 'My main task was focused on doing the back-end. This is where I realized the I want to focus on being a Back-End Developer. We have been handling online casino games. I\'ve completed 3 successful projects with this company.',
                    category: "Jr. Back-end Developer",
                },
                {
                    date: "2017-12-11",
                    title: "IPARENT PORTAL INC",
                    description: 'A start-up company where I continued to handle their project. A very tough and challenging for me. Because I am studying the framework they are using that I am not familiar with, and at the same time I am implementing/debugging the personalized system.',
                    category: "Web Developer",
                },
                {
                    date: "2017-03-11",
                    title: "4th SHIFT GLOBAL",
                    description: 'In this company, I become officially a Web Developer. Doing both Front and Back-end at the same time. This is where my skills and knowledge gets deeper',
                    category: "Web Developer",
                },
                {
                    date: "2016-03-11",
                    title: "IMERGEX I.T INC.",
                    description: 'As an intern, I developed some static website that already have templates. I used basic HTML,CSS, Javascript and Bootstrap Framework. This helps me a lot to foresee what challenges I may have encounter on my future',
                    category: "Web Developer Intern",
                },
            ],
        }
    }
}
</script>