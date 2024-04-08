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
                    icon="code"
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
                    description: "The role involved integrating front-end data into database operations, \n managing billing services with Stripe, and developing an admin portal for user monitoring and document tracking. Document processing was supported using Pdftron, while server-side logic and RESTful APIs were built using Node.js. The engineer conducted thorough testing, including unit tests and functional testing, to ensure application reliability. Collaboration with cross-functional teams ensured smooth integration of front-end and back-end code. Additionally, the engineer played a key role in debugging and resolving issues to enhance overall web application stability, and contributed to code reviews and refactoring sessions to improve code structure and readability.",
                    category: "Backend Developer (Part-time)",
                },
                {
                    date: "2021-06-21",
                    title: "POLKER",
                    description: "The role involved creating and integrating endpoints on an admin portal, incorporating game features such as friend/rival interactions and experience/reward point accrual upon winning games. A secure payment processing system for in-game purchases was implemented using Nuvei, and new assets and game levels were added using Unreal Engine. Server-side logic and RESTful APIs were developed using technologies like Node.js, accompanied by unit tests and functional testing to ensure application reliability. Collaboration with cross-functional teams facilitated seamless integration of front-end and back-end code, while active debugging and issue resolution contributed to enhancing the overall stability of the web application.",
                    category: "Backend Developer",
                },
                {
                    date: "2020-04-06",
                    title: "WTECH SOLUTIONS",
                    description: "The responsibilities included establishing site layout and user interface design, integrating data for database storage and retrieval, and leveraging Node.js expertise throughout project development. The engineer implemented robust user authentication and authorization systems, actively debugged and resolved issues to improve web application stability, and collaborated with team members to implement design patterns enhancing code organization and scalability. Object-Oriented Programming (OOP) principles were applied to design modular components easily integrable across different application sections.",
                    category: "Jr. Back-end Developer",
                },
                {
                    date: "2017-12-11",
                    title: "IPARENT PORTAL INC",
                    description: "The role involved designing the user interface (UI) based on provided concepts using HTML, CSS, and JavaScript standards. Payment method integration with DragonPay was implemented seamlessly. End-to-end feature development facilitated a smooth connection between front-end and back-end components. Recurring scripts were created and scheduled using cron syntax to optimize resource utilization and task efficiency. Cron job schedules were meticulously optimized for peak performance and resource efficiency. Batch processes were managed and executed using cron jobs to ensure timely execution and system reliability. Code changes were tracked and managed using version control systems like Git to maintain project integrity and facilitate collaborative development.",
                    category: "Web Developer",
                },
                {
                    date: "2017-03-11",
                    title: "4th SHIFT GLOBAL",
                    description: "The role involved contributing to responsive and visually appealing user interfaces using HTML, CSS, and JavaScript. Collaborating with senior developers, the engineer implemented and integrated front-end components into projects. Git was learned and utilized for version control, code tracking, and fostering effective collaboration within the team. Additionally, the engineer gained experience in server-side scripting with technologies like CodeIgniter, demonstrating a strong willingness to learn and adapt to new technologies and frameworks throughout the role.",
                    category: "Web Developer",
                },
            ],
        }
    }
}
</script>