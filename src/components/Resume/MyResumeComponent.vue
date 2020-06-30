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
                    description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa animi nemo quisquam quis explicabo aut soluta, accusamus quae nam fugiat saepe nisi. Labore consequatur, totam quaerat quasi animi in rerum."
                    category="03 / 2007"
                    icon="school"
                    color="turquoise"
                    theme="dark"
                />
                <vue-timeline-update
                    :date=" new Date('2016-04-09')"
                    title="ACLC CALOOCAN"
                    description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa animi nemo quisquam quis explicabo aut soluta, accusamus quae nam fugiat saepe nisi. Labore consequatur, totam quaerat quasi animi in rerum."
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
                    description="
                        <p>12/2015 - 03/2016</p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa animi nemo quisquam quis
                        explicabo aut soluta, accusamus quae nam fugiat saepe nisi. Labore consequatur, totam quaerat quasi animi in rerum."
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
                    description: '',
                    category: "Web Developer Intern",
                },
                {
                    date: "2017-03-11",
                    title: "4th SHIFT GLOBAL",
                    description: '',
                    category: "Web Developer",
                },
                {
                    date: "2017-12-11",
                    title: "IPARENT PORTAL INC",
                    description: '',
                    category: "Web Developer",
                },
                {
                    date: "2020-04-06",
                    title: "WTECH SOLUTIONS",
                    description: '',
                    category: "Jr. Back-end Developer",
                },                                                
            ],
        }
    }
}
</script>