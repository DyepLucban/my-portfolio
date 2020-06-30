<template>
    <b-container id="about-holder" class="p-4">
        <b-row>
            <b-col cols="12">
                <h5 style="color:gray;">ABOUT <span style="color:teal;">{ }</span></h5>
                <h1 class="mb-3" style="color:white;">LEARN MORE ABOUT ME</h1>
            </b-col>
            <br>
            <b-col lg="4" cols="12" class="text-center pb-4">
                <b-img fluid :src=image.sample></b-img>
            </b-col>
            <b-col md="8" cols="12">
                <h3 style="color:teal;">Back-End Developer</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa animi nemo quisquam quis explicabo aut soluta, accusamus quae nam fugiat saepe nisi. Labore consequatur, totam quaerat quasi animi in rerum.</p>
                <b-row>
                    <b-col md="6" xs="12" id="about-list-info">
                        <ul>
                            <li> <span>{ }</span> <b>Birthday:</b> Sept 15, 1990 </li>
                            <li> <span>{ }</span> <b>Phone:</b> 0923-416-0404 </li>
                            <li> <span>{ }</span> <b>City:</b> Valenzuela City </li>
                            <li> <span>{ }</span> <b>Age:</b> 29 </li>
                        </ul>
                    </b-col>
                    <b-col md="6" xs="12" id="about-list-info">
                        <ul>
                            <li> <span>{ }</span> <b>Degree:</b> Vocational </li>
                            <li> <span>{ }</span> <b>Email:</b> lucbanjep@gmail.com </li>
                            <li> <span>{ }</span> <b>Freelance:</b> Available </li>
                        </ul>
                    </b-col>                            
                </b-row>
                <br>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus corrupti facere ad sunt magnam quae esse ut magni, ipsam enim hic praesentium quisquam fuga voluptate cumque nostrum tempore modi eum.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis totam omnis unde, doloribus illum ullam eum, pariatur, amet esse dolores voluptatem libero ut consequatur architecto magni delectus dolorem aut vel?</p>
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
                sample: require('@/assets/images/picture-grayscale.jpeg')
            }
        }
    },
}
</script>