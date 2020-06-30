<template>
    <b-container id="resume-holder" class="p-4">
        <b-row>
            <b-col cols="12">
                <h5 style="color:gray;">RESUME <span style="color:teal;">{ }</span></h5>
                <h1 class="mb-5" style="color:white;">CHECK MY RESUME</h1>
            </b-col>
            <br>
            <b-col cols="12">
                <h3 class="ml-5 mb-4" style="color:white;">Education</h3>
                <vue-timeline-update
                    :date="new Date('2007-03-11')"
                    title="Meycauayan College"
                    description="The school where I've spent my 4 years learning and exploring what I want to become. This is where I realized that I want become a Website Developer."
                    category="03 / 2007"
                    icon="school"
                    color="turquoise"
                    theme="dark"
                />
                <vue-timeline-update
                    :date=" new Date('2016-04-09')"
                    title="ACLC CALOOCAN"
                    description="The school that I prefer to enhance my knowledge on computer programming. In that 2 years, I can say that I grew so much on my field. And that resulted me to become a 2x Dean's Lister. Which motivates me more to pursue my chosen career."
                    category="04 / 2016"
                    icon="school"
                    color="turquoise"
                    theme="dark"
                />                  
            </b-col>

            <!-- Working Experience -->
            <b-col cols="12" class="mt-5">
                <h3 class="ml-5 mb-4" style="color:white;">Professional Experience</h3>
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
    name: 'MyResumeComponent',

    components: {
        
    },

    data() {
        return {
            works: [
                {
                    date: "2016-03-11",
                    title: "IMERGEX I.T INC.",
                    description: 'As an intern, i developed some static website that has already have templates. I used basic HTML,CSS, javascript and Bootstrap Framework.',
                    category: "Web Developer Intern",
                },
                {
                    date: "2017-03-11",
                    title: "4th SHIFT GLOBAL",
                    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore commodi aliquam, labore recusandae obcaecati, ducimus explicabo nobis nostrum non exercitationem officia necessitatibus alias expedita ipsa in magnam rem libero ut.',
                    category: "Web Developer",
                },
                {
                    date: "2017-12-11",
                    title: "IPARENT PORTAL INC",
                    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore commodi aliquam, labore recusandae obcaecati, ducimus explicabo nobis nostrum non exercitationem officia necessitatibus alias expedita ipsa in magnam rem libero ut.',
                    category: "Web Developer",
                },
                {
                    date: "2020-04-06",
                    title: "WTECH SOLUTIONS",
                    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore commodi aliquam, labore recusandae obcaecati, ducimus explicabo nobis nostrum non exercitationem officia necessitatibus alias expedita ipsa in magnam rem libero ut.',
                    category: "Jr. Back-end Developer",
                },                                                
            ],
        }
    }
}
</script>