<template>
    <b-container id="about-holder" class="p-4">
        <b-row>
            <b-col cols="12">
                <h5 style="color:gray;">ABOUT <span style="color:teal;">{ }</span></h5>
                <h1 class="mb-3" style="color:white;">DISCOVER MORE</h1>
            </b-col>
            <br>
            <b-col lg="4" cols="12" class="text-center pb-4">
                <b-img fluid :src=image.sample></b-img>
            </b-col>
            <b-col md="8" cols="12">
                <h3 style="color:teal;">Full Stack Developer</h3>
                <h5 id="about-sub-header">Driven Full Stack Developer well versed in team collaboration to formulate and conceptualize corporate web presence. Specialty embracing challenging projects requiring detailed coding changes, search engine-related considerations and security. Integrates knowledge of visual arts to develop functional, appealing, custom-made web products and services.</h5>
                <b-row>
                    <b-col md="6" xs="12" id="about-list-info">
                        <ul>
                            <li> <span>{ }</span> <span class="list-label">Email:</span> lucbanjep@gmail.com </li>
                            <li> <span>{ }</span> <span class="list-label">City:</span> Pasig City </li>
                            <li> <span>{ }</span> <span class="list-label">Years of exp:</span> 7 Years </li>
                        </ul>
                    </b-col>
                    <b-col md="6" xs="12" id="about-list-info">
                        <ul>
                            <li> <span>{ }</span> <span class="list-label">Graduated at:</span> ACLC Caloocan </li>
                            <li> <span>{ }</span> <span class="list-label">Degree:</span> Vocational </li>
                            <li> <span>{ }</span> <span class="list-label">Course:</span> Diploma in Web Application </li>
                        </ul>
                    </b-col>                            
                </b-row>
                <br>
                <!-- <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus corrupti facere ad sunt magnam quae esse ut magni, ipsam enim hic praesentium quisquam fuga voluptate cumque nostrum tempore modi eum.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis totam omnis unde, doloribus illum ullam eum, pariatur, amet esse dolores voluptatem libero ut consequatur architecto magni delectus dolorem aut vel?</p> -->
            </b-col>        
        </b-row>        
    </b-container>
</template>

<script>
export default {
    name: "AboutMeComponent",

    components: {},

    data() {
        return{
            image: {
                sample: require('@/assets/images/picture-grayscale-min.jpeg')
            }
        }
    },
}
</script>