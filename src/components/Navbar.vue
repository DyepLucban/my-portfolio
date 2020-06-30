<template>
    <div>
        <b-navbar fixed="top" toggleable="lg" type="dark" variant="dark" position="fixed">
            <b-container>
                <b-navbar-brand to="/">Jeffrey M. Lucban</b-navbar-brand>

                <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

                <b-collapse id="nav-collapse" is-nav>

                <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto">
                    <b-nav-item v-for="(link, i) in nav" :key="i" :to="link.url">
                        {{ link.text}}
                    </b-nav-item>
                </b-navbar-nav>

                
                </b-collapse>                
            </b-container>
        </b-navbar>
    </div>
</template>

<script>
export default {
    name: 'Navbar',
    
    components: {

    },

    data() {
        return{
            nav: [
                {
                    text: 'Home',
                    url: '/',
                },
                {
                    text: 'About',
                    url: '/about',
                },
                {
                    text: 'Resume',
                    url: '/resume',
                },
                {
                    text: 'Portfolio',
                    url: '/portfolio',
                },
                {
                    text: 'Contact',
                    url: '/contact',
                },                                                
            ],
        }
    },
}
</script>
