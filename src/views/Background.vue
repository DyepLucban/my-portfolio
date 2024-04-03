<template>
    <section id="background" class="py-5">
        <br>
        <MyResume/>
    </section>
</template>

<script>
import MyResume from '@/components/Background/BackgroundComponent.vue'

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
