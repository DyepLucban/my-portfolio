<template>
  <section id="home-banner">
    <b-container>
      <b-row id="banner-box" align-v="center">
        <Banner/>
      </b-row>
    </b-container>
  </section>
</template>

<script>
import Banner from '@/components/Home/BannerComponent.vue'

export default {
  name: 'Home',
  components: {
    Banner
  }
}
</script>
