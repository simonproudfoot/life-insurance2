<template>
    <section class="px-0">
        <v-row justify="space-around">
            <v-col cols="10" sm="9" md="8">
                <div class="text-center ">
                    <h2 class="text--primary display-1">What Our Clients Say</h2>
                    <span class="ml-auto mr-auto bigUnderline"></span>
                </div>
            </v-col>
        </v-row>
        <VueSlickCarousel class="my-10" v-bind="settings">
            <div class="px-md-5 my-2">
                <v-card rounded="true" class="mx-auto py-4">
                    <v-card-text>
                        We were given a number of options and everything was explained really clearly. Any questions we had were answered really thoroughly and promptly. All in all a really good experience and would certainly recommend to others!
                    </v-card-text>
                    <v-list-item>
                        <v-list-item-content>
                            <v-list-item-subtitle><b>Jon E</b></v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                </v-card>
            </div>
            <div class="px-5 my-2">
                <v-card rounded="true" class="mx-auto py-4">
                    <v-card-text>
                        I came across their ad on Facebook and was pleasantly surprised at the ease and speed of service. I was able to receive a quote and set up my policy over the phone with a very friendly representative. Would most certainly recommend them! Thanks again
                    </v-card-text>
                    <v-list-item>
                        <v-list-item-content>
                            <v-list-item-subtitle><b>Chris I</b></v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                </v-card>
            </div>
            <div class="px-5 my-2">
                <v-card rounded="true" class="mx-auto py-4">
                    <v-card-text>
                        I’d just like to say thank you to Michael, who helped me find a policy for my wife and I, his knowledge was 2nd to none, really great service, saved a lot of money versus the quotes I had online and via my bank, thanks again, would definitely recommend
                    </v-card-text>
                    <v-list-item>
                        <v-list-item-content>
                            <v-list-item-subtitle><b>James</b></v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                </v-card>
            </div>
            <div class="px-5 my-2">
                <v-card rounded="true" class="mx-auto py-4">
                    <v-card-text>
                        I previously was insured with Zurich and was curious to see what my level of cover and premium faired, I spoke to Stacey who was great, she really knew her stuff and to my surprise I practically doubled the level of my cover for a slightly lower monthly
                        direct debit, I couldn’t be happier and would recommend
                    </v-card-text>
                    <v-list-item>
                        <v-list-item-content>
                            <v-list-item-subtitle><b>Laura C</b></v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                </v-card>
            </div>
        </VueSlickCarousel>
        <div class="text-centre">
            <v-img width="100" class="mx-auto" src="https://www.foreverprotect.com/wp-content/themes/forever-protect/img/xreview.png.pagespeed.ic.KGAg41OvVG.png"></v-img>
        </div>
    </section>
</template>
<script>
import VueSlickCarousel from 'vue-slick-carousel';
import 'vue-slick-carousel/dist/vue-slick-carousel.css';
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css';
export default {
    name: 'faq',
    data() {
        return {

        }
    },
    components: {
        VueSlickCarousel,
    },
}
</script>
