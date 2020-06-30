<template>
    <div xs="12" md="12" class="p-5">
        <h1 style="color:#A9C7DF;">Jeffrey M. Lucban</h1>
        <h4 style="color:gray;">I'm a passionate
            <span style="color:teal;"><b>{</b></span>
            <span style="color:teal"> Back-End Developer </span>
            <span style="color:teal;"><b>}</b></span>
            from Valenzuela
        </h4>
        <!-- <router-link to="/about">Lets get started!</router-link> -->
        <b-button to="/about" size="md" type="submit" variant="outline-dark">Get started</b-button>                
    </div>
</template>

<script>
export default {
    name: 'BannerComponent',

    components: {

    },

    data() {
        return{}
    }
}
</script>