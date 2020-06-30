<template>
    <section id="resume" class="py-5">
        <br>
        <MyResume/>
    </section>
</template>

<script>
import MyResume from '@/components/Resume/MyResumeComponent.vue'

export default {
    name: 'Resume',

    components: {
        MyResume,
    },

    data() {
        return {}
    },
}
</script>
