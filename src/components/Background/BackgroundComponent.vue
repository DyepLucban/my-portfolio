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
                    description: "Architected and maintained RESTful APIs using Node.js for a document management platform. Integrated Advance.AI eKYC for identity verification, Xendit for payment links and subscription billing, and Stripe for payment method management. Built an admin portal for real-time user and document monitoring, and implemented PDFTron for document processing pipelines. Ensured code reliability through unit and functional testing, code reviews, and refactoring. Utilized Claude Code and GitHub Copilot to accelerate API integrations, test generation, and boilerplate workflows.",
                    category: "Senior Backend Developer",
                },
                {
                    date: "2021-06-21",
                    title: "CPE Games Ltd",
                    description: "Designed and integrated admin portal endpoints for an online gaming platform, covering social features (friend/rival systems) and an XP/rewards engine. Implemented a secure in-game purchase flow via Nuvei. Contributed to game content pipelines by authoring new assets and levels in Unreal Engine.",
                    category: "Backend Developer",
                },
                {
                    date: "2020-04-06",
                    title: "WTECH SOLUTIONS",
                    description: "Developed and maintained backend services using Node.js, including user authentication and authorization systems. Applied OOP principles to build modular, reusable components for scalable application architecture.",
                    category: "Jr. Back-end Developer",
                },
                {
                    date: "2017-12-11",
                    title: "IPARENT PORTAL INC",
                    description: "Built full-stack features connecting frontend and backend layers for a school management system. Integrated DragonPay for payment processing and automated recurring tasks via cron jobs. Engineered an RFID-based login and POS system for a school canteen, handling hardware integration, building-wide deployment, and end-user training.",
                    category: "Web Developer",
                },
                {
                    date: "2017-03-11",
                    title: "4th SHIFT GLOBAL",
                    description: "Developed responsive UI components using HTML, CSS, and JavaScript in collaboration with senior engineers. Gained hands-on experience with CodeIgniter for server-side scripting and adopted Git for version control and team workflows.",
                    category: "Web Developer",
                },
            ],
        }
    }
}
</script>