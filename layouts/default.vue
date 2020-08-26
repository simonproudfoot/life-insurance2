<template>
    <v-app light>
        <v-app-bar absolute elevation="0" app class="text-center navbar">
            <nuxt-link style="margin: auto; cursor: pointer" tag="img" :src="'/logo.png'" to="/" width="100">
            </nuxt-link>
        </v-app-bar>
        <v-main light>
            <nuxt />
        </v-main>
        <v-footer class="dark">
            <div class="container text-">
                <div class="row">
                    <div class="col-md-7 white-text">
                        <p><small>Forever Protect is a site that helps customers compare life insurance policies available based on their individual requirements. Our partners are FCA licensed experts and provide quotes based on the information you submit to us. Our service is free, with no obligation to commit to buying an insurance policy.</small></p>
                        <p><small>We take care to make sure that all information that appears on this website is accurate and up-to-date, however, errors and omissions may occur, so you should not take the accuracy of the information and material for granted or rely upon it as a statement or representation of fact. Some products may only be available from selected providers. Final insurance policy premiums are determined by the underwriting insurance company following successful application, and your premiums may vary depending on your own individual circumstance and requirements</small></p>
                        <p><small>Registered office address : Enterprise House The Courtyard, Old Courthouse Road, Bromborough, Wirral, CH62 4UE</small></p>
                    </div>
                    <div class="col-md-5 white-text">
                        <p><small>Protection registration number is : Z314122X</small></p>
                        <p><small>All trademarks, trade names, or logos are the property of their respective owners, and Forever Protect is not affiliated with any individual insurer or brand, and are included in the panel of insurance providers that our partners compare.</small></p>
                        <p><small>Please note that some brokers we work with may not provide quotes from all the insurers featured on our website.</small></p>
                        <p><small>Copyright (c) {{year}} Forever Protect. All rights reserved.</small></p>
                        <p><small>Example of reviews have been permitted from a partner Everyday Insurance, rated 4.96 of 5 (reviews). *£1.62 per week based on a 30-year-old non-smoker taking out £185,000 level term cover over 20 years (L&G) - Prices correct as of January 2020</small></p>
                        <p>
                            <nuxt-link to="/privacy">Privacy</nuxt-link>
                            <nuxt-link to="/terms-and-conditions">Terms &amp; Conditions</nuxt-link>
                        </p>
                        <a href="tel:01619296997">0161 929 6997</a>
                    </div>
                </div>
            </div>
        </v-footer>
    </v-app>
</template>
<script>
export default {
    computed: {
        year() {
            return new Date().getFullYear()
        }
    }
}
</script>
<style scopped>
.navbar {
    background-color: #0b3868 !important;
}
</style>
