<template>
    <section id="portfolio" class="py-5">
        <br>
        <MyWorks />
    </section>
</template>

<script>
import MyWorks from '@/components/Portfolio/PortfolioComponent.vue'

export default {
    name: 'Portfolio',

    components: {
        MyWorks
    },

    data() {
        return {}
    },
}
</script>
