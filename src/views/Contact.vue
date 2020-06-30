<template>
    <section id="contact" class="py-5">
        <br>
        <ContactComponent/>
    </section>
</template>

<script>
import ContactComponent from '@/components/Contact/ContactComponent.vue'

export default {
    name: 'Contact',

    components: {
        ContactComponent,
    },

    data() {
        return {}
    },
}
</script>
