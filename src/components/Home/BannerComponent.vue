<template>
    <div xs="12" md="12" class="p-5">
        <h1 style="color:white;">Jeffrey M. Lucban</h1>
        <h4 style="color:gray;">I'm a passionate
            <span style="color:white;">{</span>
            <span style="color:white"> Back-End Developer </span>
            <span style="color:white;">}</span>
            from Bulacan
        </h4>
        <router-link to="/about">Lets get started!</router-link>
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