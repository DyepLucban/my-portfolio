<template>
  <div id="app">
    <Navbar v-if="Page()"/>
    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>
    <Footer v-if="Page()"/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/views/Footer.vue'

export default {
  
  name: 'App',

  components: {
    Navbar,
    Footer,
  },

  data() {
    return {
    };
  },

  methods: {
    Page() {
      if (this.$route.path != "/") {
        return true;
      }
    }
  },
};
</script>

<style scoped>
  #app {
    background-image: url('./assets/images/laptop.jpg');
    left: 0;
    right: 0;
    top: 0;
    height: 100%;
    z-index: -1;
    bottom: 100px;
  }
</style>
