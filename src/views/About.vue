<template>
  <section id="about" class="py-5">
    <br>
    <AboutMe/>
    <Skills/>    
  </section>
</template>

<script>
import AboutMe from '@/components/About/AboutMeComponent.vue'
import Skills from '@/components/About/SkillsComponent.vue'

export default {
  name: 'About',
  
  components: {
    AboutMe,
    Skills,
  },

  data() {
    return {}
  },
}

</script>
