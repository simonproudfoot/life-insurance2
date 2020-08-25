<template>
    <div id="theForm" class="theForm" light>
        <v-progress-linear v-model="percentageDone" color="orange accent-4"></v-progress-linear>
        <div v-for="(question, key, index) in questions" :key="key">
            <transition name="fade">
                <v-form v-on:submit.prevent v-model="isValid" v-if="key == 'id_like_quotes_for' && stepInner == index">
                    <div class="formSectionInner">
                        <h2 class="mb-5 mt-3 text-center">I'd like quotes for...</h2>
                        <v-row>
                            <v-col>
                                <v-btn color="accent" height="80" x-large block @click="stepInner++, isSingle(), toTop()">
                                    <v-icon class="mdi-36px">mdi-human-male</v-icon>
                                </v-btn>
                                <p class="button-label text-center mt-2">Just me</p>
                            </v-col>
                            <v-col>
                                <v-btn height="80" color="accent" x-large block @click="stepInner++, hasPartner(), toTop()">
                                    <v-icon class="mdi-36px">mdi-human-male-female</v-icon>
                                </v-btn>
                                <p class="button-label text-center mt-2">Me & my partner</p>
                            </v-col>
                        </v-row>
                    </div>
                    <v-row class="trustLogos" align="center">
                        <v-col class="text-center  col">
                            <v-img class="ml-auto mr-auto" src="/reviews-trust-logo.png" width="65" />
                        </v-col>
                        <v-col class="text-center  col">
                            <v-img class="ml-auto mr-auto" src="/comodo.png" width="65" />
                        </v-col>
                        <v-col class="text-center  col">
                            <v-img class="ml-auto mr-auto" src="/ico.png" width="65" />
                        </v-col>
                    </v-row>
                </v-form>
            </transition>
            <!-- smoker -->
            <transition name="fade">
                <v-form v-on:submit.prevent v-model="isValid" v-if="key == 'have_you_smoked_in_the_last_12_months' && stepInner == index">
                    <div class="formSectionInner">
                        <h2 class="mb-5 mt-3 text-center">Have you smoked in the last 12 months?</h2>
                        <v-row>
                            <v-col>
                                <v-btn height="80" x-large block color="accent" @click="stepInner++, questions[key] = 'yes', toTop()">
                                    <v-icon class="mdi-36px">mdi-smoking</v-icon>
                                </v-btn>
                                <p class="button-label text-center mt-2">Yes</p>
                            </v-col>
                            <v-col>
                                <v-btn height="80" color="accent" x-large block @click="stepInner++, questions[key] = 'no', toTop()">
                                    <v-icon class="mdi-36px">mdi-smoking-off</v-icon>
                                </v-btn>
                                <p class="button-label text-center mt-2">No</p>
                            </v-col>
                        </v-row>
                    </div>
                </v-form>
            </transition>
            <!-- critical_illness_cover -->
            <transition name="fade">
                <v-form v-on:submit.prevent v-model="isValid" v-if="key == 'critical_illness_cover' && stepInner == index">
                    <div class="formSectionInner">
                        <h2 class="mb-5 mt-3 text-center">Critical illness cover?</h2>
                        <v-row>
                            <v-col>
                                <v-btn height="80" x-large block color="accent" @click="stepInner++, questions[key] = 'yes', toTop()">
                                    <v-icon class="mdi-36px">mdi-check-circle-outline</v-icon>
                                </v-btn>
                                <p class="button-label text-center mt-2">Yes</p>
                            </v-col>
                            <v-col>
                                <v-btn height="80" color="accent" x-large block @click="stepInner++, questions[key] = 'no', toTop()">
                                    <v-icon class="mdi-36px">mdi-close-circle-outline</v-icon>
                                </v-btn>
                                <p class="button-label text-center mt-2">No</p>
                            </v-col>
                        </v-row>
                    </div>
                </v-form>
            </transition>
            <!-- type_of_insurance -->
            <transition name="fade">
                <v-form v-on:submit.prevent v-model="isValid" v-if="key == 'type_of_insurance' && stepInner == index">
                    <div class="formSectionInner">
                        <h2 class="mb-5 mt-3 text-center">Type of insurance?</h2>
                        <v-row no-gutters>
                            <v-col cols="4" class="px-1">
                                <v-btn height="80" x-large block color="accent" @click="stepInner++, questions[key] = 'level term', toTop()">
                                    <svg style="width:36px;height:36px" viewBox="0 0 24 24">
                                                    <path fill="currentColor" d="M12,2A9,9 0 0,1 21,11H13V19A3,3 0 0,1 10,22A3,3 0 0,1 7,19V18H9V19A1,1 0 0,0 10,20A1,1 0 0,0 11,19V11H3A9,9 0 0,1 12,2Z" />
                                            </svg>
                                </v-btn>
                                <p class="button-label text-center mt-2">Level term</p>
                            </v-col>
                            <v-col cols="4" class="px-1">
                                <v-btn height="80" color="accent" x-large block @click="stepInner++, questions[key] = 'mortgage', toTop()">
                                    <v-icon class="mdi-36px">mdi-home</v-icon>
                                </v-btn>
                                <p class="button-label text-center mt-2">Mortgage</p>
                            </v-col>
                            <v-col cols="4" class="px-1">
                                <v-btn height="80" color="accent" x-large block @click="stepInner++, questions[key] = 'whole of life', toTop()">
                                    <v-icon class="mdi-36px">mdi-cards-heart</v-icon>
                                </v-btn>
                                <p class="button-label text-center mt-2">Whole of life</p>
                            </v-col>
                        </v-row>
                    </div>
                </v-form>
            </transition>
            <!-- amount of cover required -->
            <transition name="fade">
                <v-form v-on:submit.prevent v-model="isValid" v-if="key == 'amount_of_cover_required' && stepInner == index">
                    {{prePopAmount}}
                    <div class="formSectionInner">
                        <h2 class="mb-5 mt-3 text-center">Amount of cover required?</h2>
                        <v-row justify="center">
                            <v-col cols="10" md="6">
                                <v-select prepend-icon="£" v-model="questions[key]" :rules="[validationRules.required]" :items="coverAmounts" menu-props="auto" label="Select" single-line></v-select>
                            </v-col>
                        </v-row>
                        <v-btn :disabled="!isValid" color="accent" x-large block class="btn-ntx" @click="stepInner++, toTop()">Next</v-btn>
                    </div>
                </v-form>
            </transition>
            <!-- length_of_cover -->
            <transition name="fade">
                <v-form v-on:submit.prevent v-model="isValid" v-if="key == 'length_of_cover' && stepInner == index">
                     {{prePopLength}}
                    <div class="formSectionInner">
                        <h2 class="mb-5 mt-3 text-center">Length of cover?</h2>
                        <v-row justify="center">
                            <v-col cols="10" md="6">
                                <v-select v-model="questions[key]" :rules="[validationRules.required]" :items="coverYears" menu-props="auto" label="Select" single-line></v-select>
                            </v-col>
                        </v-row>
                        <v-btn :disabled="!isValid" color="accent" x-large block class="btn-ntx" @click="stepInner++, toTop()">Next</v-btn>
                    </div>
                </v-form>
            </transition>
            <!-- DOB -->
            <transition name="fade">
                <v-form v-on:submit.prevent v-if="key == 'dob' && stepInner == index" ref="form" v-model="isValid" :rules="ageCheck ? isValid = true : isValid = false">
                    <div class="formSectionInner">
                        <h2 class="mb-5 mt-3 text-center">Date of birth</h2>
                        {{prePopDob}}
                        <v-row v-if="!$vuetify.breakpoint.xs">
                            <v-col>
                                <v-autocomplete label="Day" autofocus single-line v-model="questions[key][0]" :items="listDays"></v-autocomplete>
                            </v-col>
                            <v-col>
                                <v-autocomplete label="Month" single-line v-model="questions[key][1]" :items="listMonths"></v-autocomplete>
                            </v-col>
                            <v-col>
                                <v-autocomplete single-line label="Year" v-model="questions[key][2]" :items="listYears"></v-autocomplete>
                            </v-col>
                        </v-row>
                        <v-row v-else>
                            <v-col :cols="6" class="py-0">
                                <v-select class="pb-0 mb-0" label="Day" autofocus single-line v-model="questions[key][0]" :items="listDays"></v-select>
                            </v-col>
                            <v-col :cols="6" class="py-0">
                                <v-select class="pb-0 mb-0" label="Month" single-line v-model="questions[key][1]" :items="listMonths"></v-select>
                            </v-col>
                            <v-col cols="12" class="py-0">
                                <v-select label="Year" single-line v-model="questions[key][2]" :items="listYears"></v-select>
                            </v-col>
                        </v-row>
                        <div v-if="questions[key].length >= 3 && !ageCheck" class="py-2" style="color: red">Sorry. You must be between 50 to 75 to qualify</div>
                        <v-btn :disabled="!isValid" color="accent" x-large block class="btn-ntx" @click="stepInner++, toTop()">Next</v-btn>
                    </div>
                </v-form>
            </transition>
            <!-- Partner DOB -->
            <transition name="fade">
                <v-form v-on:submit.prevent v-if="key == 'partners_dob' && stepInner == index" ref="form" v-model="isValid">
                    <div class="formSectionInner">
                        <h2 class="mb-5 mt-3 text-center">What is your partners date of birth</h2>
                        <v-row v-if="!$vuetify.breakpoint.xs">
                            <v-col>
                                <v-autocomplete label="Day" autofocus single-line v-model="questions[key][0]" :rules="[validationRules.required]" :items="listDays"></v-autocomplete>
                            </v-col>
                            <v-col>
                                <v-autocomplete label="Month" single-line v-model="questions[key][1]" :rules="[validationRules.required]" :items="listMonths"></v-autocomplete>
                            </v-col>
                            <v-col>
                                <v-autocomplete @click="defaultYear" single-line label="Year" v-model="questions[key][2]" :rules="[validationRules.required]" :items="listYears"></v-autocomplete>
                            </v-col>
                        </v-row>
                        <v-row v-else>
                            <v-col :cols="6" class="py-0">
                                <v-select class="pb-0 mb-0" label="Day" autofocus single-line v-model="questions[key][0]" :rules="[validationRules.required]" :items="listDays"></v-select>
                            </v-col>
                            <v-col :cols="6" class="py-0">
                                <v-select class="pb-0 mb-0" label="Month" single-line v-model="questions[key][1]" :rules="[validationRules.required]" :items="listMonths"></v-select>
                            </v-col>
                            <v-col cols="12" class="py-0">
                                <v-select label="Year" color="accent" v-model="questions[key][2]" :rules="[validationRules.required]" :items="listYears"></v-select>
                            </v-col>
                        </v-row>
                        <v-btn :disabled="!isValid" color="accent" x-large block class="btn-ntx" @click="stepInner++, toTop()">Next</v-btn>
                    </div>
                </v-form>
            </transition>
            <!-- Name -->
            <transition name="fade">
                <v-form v-on:submit.prevent v-model="isValid" v-if="key == 'name' && stepInner == index">
                    <div class="formSectionInner formSectionInner--narrow">
                        <h2 class="mb-5 mt-3 text-center">Your name</h2>
                        <v-radio-group v-model="questions[key][2]" row class="justify-space-between" :rules="[validationRules.required]">
                            <template v-for="(title, i ) in titles"><v-radio :label="title" :value="title" :key="i"></v-radio>
                        </template>
                        </v-radio-group>
                        <v-text-field outlined single-line label="First name" :rules="[validationRules.required]" v-model="questions[key][0]"></v-text-field>
                        <v-text-field outlined single-line label="Surname" :rules="[validationRules.required]" v-model="questions[key][1]"></v-text-field>
                         <v-btn :disabled="!isValid" color="accent" x-large block class="btn-ntx" @click="stepInner++, toTop()">Next</v-btn>
                    </div>
                </v-form>
            </transition>
            <!-- Email -->
            <transition name="fade">
                <v-form v-on:submit.prevent v-if="key == 'email' && stepInner == index" ref="form" v-model="isValid">
                    <div class="formSectionInner formSectionInner--narrow">
                        <h2 class="mb-5 mt-3 text-center">Email address</h2>
                        <v-text-field type="email" outlined single-line label="Email" :rules="validationRules.email" v-model="questions[key]"></v-text-field>
                        <v-btn :disabled="!isValid" color="accent" x-large block class="btn-ntx" @click="stepInner++, toTop()">Next</v-btn>
                    </div>
                </v-form>
            </transition>
            <!-- Tel -->
            <transition name="fade">
                <v-form v-on:submit.prevent v-if="key == 'phone' && stepInner == index" ref="form" v-model="isValid" :rules="phoneValidated ? isValid = true : isValid=false">
                    <div class="formSectionInner formSectionInner--narrow telephone">
                        <h2 class="mb-5 mt-3 text-center">Contact number</h2>
                        <v-text-field outlined :hint="telSearching ? 'Verifying telephone number' : null" :append-icon="telSearching ? 'mdi-loading' : 'mdi-loadingf'"  ref="telephoneField" type="tel"  single-line label="Telephone number" v-model="questions[key]" @keyup="phoneValidate"></v-text-field>
                        <p v-if="phoneValidated == false">Invalid UK telephone number</p>
                        <v-btn v-if="isLocalHost" @click="stepInner++, toTop()">local host skip ></v-btn>
                        <v-btn :disabled="!isValid" color="accent" x-large block class="btn-ntx" @click="stepInner++, toTop()">Next</v-btn>
                    </div>
                </v-form>
            </transition>
            <!-- Address  -->
            <transition name="fade">
            <v-form v-on:submit.prevent transition="fade-transition" v-if="key == 'address' && stepInner == index"  :rule="questions[key].length !== 0 && questions[key].line_1 && questions[key].postcode && questions[key].post_town ? isValid = true: isValid = false" >
                <div class="formSectionInner">
                    <h2 class="mb-5 mt-3 text-center">What is your address?</h2>
                    <v-row>
                        <v-col cols="8">
                            <input type="text" outlined v-model="searchPostcode" ref="postcodeField" class="addressLookup" :placeholder="!$vuetify.breakpoint.xs ? 'Please type your postcode' : 'Your postcode'" @change="requestAddress(key)">
                        </v-col>
                        <v-col cols="4">
                            <v-btn @keyup.enter="requestAddress(key)" @click="requestAddress(key)" color="primary" x-large block>Find</v-btn>
                        </v-col>
                    </v-row>
                    <br>
                    <v-dialog v-model="popUp" scrollable dark max-width="400px">
                        <v-card>
                            <v-card-title>Select address</v-card-title>
                            <v-divider></v-divider>
                            <v-card-text style="height: 300px;">
                                <v-list>
                                    <v-list-item-group v-model="questions[key]">
                                        <v-list-item v-for="(address, i) in addressList" :key="i" :value="address" @click="popUp = false">
                                            {{address.line_1}}
                                        </v-list-item>
                                    </v-list-item-group>
                                </v-list>
                            </v-card-text>
                            <v-divider></v-divider>
                        </v-card>
                    </v-dialog>
                <template v-if="questions[key]">
                    <v-row class="addressDeets">
                        <v-col cols="12" class="py-0">
                            <v-text-field outlined type="text" v-model="questions[key].line_1" single-line label="Address line 1" />
                        </v-col>
                        <v-col cols="12" class="py-0">
                            <v-text-field outlined type="text" v-model="questions[key].line_2" single-line label="Address line 2" />
                        </v-col>
                        <v-col cols="12" class="py-0">
                            <v-text-field outlined type="text" v-model="questions[key].line_3" d single-line label="Address line 3" />
                        </v-col>
                        <v-col cols="12" class="py-0">
                            <v-text-field outlined type="text" v-model="questions[key].post_town" d single-line label="Town/city" />
                        </v-col>
                        <v-col cols="12" class="py-0">
                            <v-text-field disabled outlined type="text" v-model="questions[key].postcode" single-line label="Postcode" />
                        </v-col>
                    </v-row>
                </template>
                    <v-btn :disabled="!isValid" color="accent" x-large block class="btn-ntx" @click="stepInner++, toTop()">Next</v-btn>
                </div>
            </v-form>
            </transition>
            <transition name="fade">
            <div v-if="key == 'success' && stepInner == index" class="formSectionInner formSectionInner--narrow">
                <h1 class="text-center">Almost there, <span style="text-transform: capitalize">{{questions.name[0]}}</span></h1>
                <h2 class="mb-5">Please submit to get your free quote.</h2>
                <v-btn accent class="submitButton" height="80" x-large block color="success" @click="postLead" :disabled="sending" :loading="sending" >Get my Free Quote
                  <v-icon lass="mb-0 text-white" large>mdi-chevron-double-right</v-icon>
                </v-btn>
                <div v-if="sending">Please wait whilst we submit your details</div>
                 <v-alert class="mt-5" v-if="submitError" type="error">
                    {{submitError}}
                 </v-alert>
                 <p class="mt-5">By clicking <i>"Get my Free Quote"</i> you agree to be contacted by telephone or email by Promis Life, an FCA Authorised Firm, and confirm that you have read and agreed to our <a href="/terms-and-conditions" target="_blank">Terms & Conditions</a> and <a href="/privacy" target="_blank">Privacy Policy</a></p>
                <!-- 
                <v-checkbox v-model="contactTicked">
                        <template v-slot:label>
                            <div> would like to use email, text and display notifications to let you know about <b>forever-protect-over-50.com</b> products and services. If you do not want to receive these, un-tick this box.
                                <v-tooltip bottom>
                                    <template v-slot:activator="{ on }">
                                    <a target="_blank"  href="http://vuetifyjs.com" @click.stop v-on="on" ></a>
                        </template>
                        </v-tooltip>
                    </div>
                </template>
                </v-checkbox> 
                -->
            </div>
        </transition>
        </div>
        <v-btn :disabled="sending" v-if="stepInner !== 0" text @click="stepInner--, toTop()" block class="btnBck"><v-icon class="mdi-36px">mdi-menu-left-outline</v-icon>Back</v-btn>
    </div>
</template>

<script>
import Vue from 'vue';
export default {
    name: 'theForm',
    data() {
        return {
            questions: {
                id_like_quotes_for: '',
                type_of_insurance: '',
                critical_illness_cover: '',
                have_you_smoked_in_the_last_12_months: '',
                amount_of_cover_required: '',
                length_of_cover: '',
                dob: [],
                address: [],
                name: [],
                email: '',
                phone: null,
                success: false,
            },
            userIP: '',
            coverAmounts: [
                "100,000",
                "25,000",
                "30,000",
                "35,000",
                "40,000",
                "45,000",
                "50,000",
                "55,000",
                "60,000",
                "65,000",
                "70,000",
                "75,000",
                "80,000",
                "85,000",
                "90,000",
                "95,000",
                "100,000",
                "105,000",
                "110,000",
                "115,000",
                "120,000",
                "125,000",
                "130,000",
                "135,000",
                "140,000",
                "145,000",
                "150,000",
                "155,000",
                "160,000",
                "165,000",
                "170,000",
                "175,000",
                "180,000",
                "185,000",
                "190,000",
                "195,000",
                "200,000",
                "210,000",
                "220,000",
                "230,000",
                "240,000",
                "250,000",
                "260,000",
                "270,000",
                "280,000",
                "290,000",
                "300,000",
                "325,000",
                "350,000",
                "375,000",
                "400,000",
                "425,000",
                "450,000",
                "475,000",
                "500,000",
                "525,000",
                "550,000",
                "575,000",
                "600,000",
                "650,000",
                "700,000",
                "750,000",
                "800,000",
                "850,000",
                "900,000",
                "950,000",
                "1,000,000",
                "1,100,000",
                "1,200,000",
                "1,300,000",
                "1,400,000",
                "1,500,000",

            ],
            searchTelephone: '',
            searchPostcode: '',
            phoneValidated: null,
            contactTicked: true,
            popUp: false,
            titles: ['Mr', 'Mrs', 'Miss', 'Ms'],
            addressList: [],
            sCount: 0,
            stepInner: 0, // must start at 0
            current: 0,
            numberOfsections: 0,
            isValid: false,
            gotVal: 0,
            submitError: "",
            notEligable: false,
            sending: false,
            formSuccess: false,
            validationRules: {
                required: (value) => !!value || "Required.",
                counter: (value) => !!value.length <= 11 || "Min 11 numbers",
                email: [
                    (v) => !!v || "E-mail is required",
                    (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) || "E-mail must be valid",
                ],
                telephoneRules: [
                    (v) => !!v || "Required",
                    (v) => v.match(/^[0-9]+$/) || "Not a valid number",
                    (v) => v.length > 10 || "Not a valid number",
                ],
            },
        }
    },
    methods: {
        hasPartner() {
            this.questions.id_like_quotes_for = 'myself_and_partner'
            //this.addItem('questions', 'has_your_partner_smoked_in_the_last_12_months', '', 2);
            //this.addItem('questions', 'partners_dob', [], 4);
            //this.addItem('questions', 'partnersGender', '', 6);
        },
        isSingle() {
            this.questions.id_like_quotes_for = 'myself'
            //this.removeItem('has_your_partner_smoked_in_the_last_12_months')
            //this.removeItem('partners_dob')
            //this.removeItem('partnersGender')
        },
        removeItem(q) {
            // finds the index
            Vue.delete(this.questions, q);
        },
        addItem(s, k, v, o) {
            //section - key - value - order/index
            // make a new array
            const newArr = new Array();
            // push old values to the new array
            Object.entries(this[s]).forEach(([key, value]) => {
                newArr.push([key, value]);
            });
            // add new items to array
            newArr.splice(o, 0, [k, v]);
            this.questions = Object.fromEntries(newArr)
        },
        requestAddress(qKey) {
            this.$axios.$get('https://api.ideal-postcodes.co.uk/v1/postcodes/' + this.searchPostcode.replace(/\s/g, '') + '?api_key=ak_jr1wo74l0sgSldKnJeTPAEo5QpHxw')
                .then((response) => {
                    // console.log(response.result);
                    this.popUp = true
                    this.addressList = response.result
                })
                .catch(function(error) {
                    console.log(error);
                });
        },
        toTop() {
            this.$vuetify.goTo(0)
        },
        phoneValidate() {
            if (this.questions.phone.length > 10) {
                this.telSearching = true
                console.log('searching:' + this.questions.phone);
                this.$axios.$post('https://webservices.data-8.co.uk/TelephoneLineValidation/IsValidAdvanced.json?key=CX3N-IDXM-XEFB-73WE', {
                        "number": this.questions.phone,
                        "options": {
                            "UseMobileValidation": true
                        }
                    })
                    .then((response) => {
                        console.log(response);
                        response.Result == 'Invalid' || response.Result == 'TemporaryInvalid' ? this.phoneValidated = false : this.phoneValidated = true
                        this.telSearching = false
                    })
                    .catch((error) => {
                        this.telError = 'This is not a valid UK number'
                        setTimeout(() => {
                            this.telError = '';
                        }, 2000);
                        console.log(error);
                        this.telSearching = false
                    });
            }
        },
        encodeDataToURL(data) {
            return Object.keys(data).map(value => `${value}=${encodeURIComponent(data[value])}`).join('&');
        },
        postLead() {
            const data = {
                "campid": "FOREVERPROTECT-B",
                "campaign_id": '606',
                "supplier_id": '479',
                "email": this.questions.email,
                "title": this.questions.name[2],
                "firstname": this.questions.name[0],
                "lastname": this.questions.name[1],
                "building": this.questions.address.building_number,
                "street1": this.questions.address.line_1,
                "street2": this.questions.address.line_2,
                "street3": this.questions.address.line_3,
                "towncity": this.questions.address.post_town,
                "county": this.questions.address.county,
                "postcode": this.questions.address.postcode,
                "phone1": this.questions.phone,
                "dob": this.questions.dob.join('/'),
                "consumer_ip_address": this.userIP
            }
            const URL = window.location.href+"/sendData.php"
            console.log(this.encodeDataToURL(data).toString().replace(/[^\x20-\x7E]/g, ''))
            this.$axios.$post(URL + "?" + this.encodeDataToURL(data).toString().replace(/[^\x20-\x7E]/g, '')).then((response) => {
                console.log(response.code);
                window.location.replace('/success')
            }).catch(function(error) {
                console.log(error);
            });
        },
        numberWithCommas(x) {
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
    },
    computed: {
        coverYears() {
            var x = []
            for (let year = 1; year < 50; year++) {
                x.push(year + ' years')
            }
            return x
        },
        isLocalHost() {
            return location.hostname === "localhost" ? true : false
        },
        prePopDob() {
            this.questions.dob = [] ? this.questions.dob = [1, 1, 1969] : null;
        },
        prePopAmount() {
            this.questions.amount_of_cover_required = [] ? this.questions.amount_of_cover_required = "1,500,000" : null;
        },
        prePopLength() {
            this.questions.length_of_cover = [] ? this.questions.length_of_cover = "20 years" : null;
        },
        ageCheck() {
            var today_date = new Date();
            var today_year = today_date.getFullYear();
            var today_month = today_date.getMonth();
            var today_day = today_date.getDate();
            var age = today_year - this.questions.dob[2];
            if (today_month < (this.questions.dob[1] - 1)) {
                age--;
            }
            if (((this.questions.dob[1] - 1) == today_month) && (today_day < this.questions.dob[0])) {
                age--;
            }
            return age >= 50 && age <= 75 ? true : false;
        },
        percentageDone() {
            var countAllQuestions = Object.keys(this.questions).length;
            var countAllValues = [];
            Object.values(this.questions).filter((y) => y == "" || y == 0 || y == [] || y == null)
                .forEach((q) => {
                    countAllValues.push(q);
                });
            var x = countAllValues.length / countAllQuestions;
            var percenage = x * 100;
            return 100 - percenage + "%";
        },
        listMonths() {
            var number = 1;
            var months = []
            for (var i = 1; i <= 12; i++) {
                months.push(number++);
            }
            return months
        },
        listDays() {
            var number = 1;
            var days = []
            for (var i = 1; i <= 31; i++) {
                days.push(number++);
            }
            return days
        },
        listYears() {
            var currentYear = new Date().getFullYear() - 17
            var years = [];
            var startYear = 1920;
            for (var i = startYear; i <= currentYear; i++) {
                years.push(startYear++);
            }
            return years.reverse()
        },
        randNum() {
            if (this.gotVal === 0) {
                var rand = Math.floor(Math.random() * (980 - 880 + 1)) + 880
                this.gotVal = rand
                console.log('new number ')
                return rand
            } else {
                console.log('old number ')
                return this.gotVal
            }
        }
    },
    mounted() {
        fetch('https://api.ipify.org?format=json')
            .then(x => x.json()).then(({ ip }) => {
                this.userIP = ip;
            });
    }
}
</script>

<style scoped lang="scss">
.button-label {
    @media only screen and (max-width: 600px) {
        font-size: 15px;
    }
}

.btn-ntx {
    color: #fff;
    font-family: $heading-font-family !important;
}

.btnBck .v-icon {
    color: orange !important;
}

.formSectionInner .v-btn {
    font-family: $heading-font-family !important;
    font-size: 1em;
    font-weight: bolder;
}

.v-btn .v-icon {
    color: #fff;
}

.theForm {
    overflow: hidden;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 1px 7px 0 rgba(0, 0, 0, .1), 0 1px 2px 0 rgba(0, 0, 0, .37);
    max-width: 600px;
    @media screen and (min-width: 400px) and (max-width:600px) {
        margin: -70px auto 0 auto;
        width: 95%;
    }
    @media screen and (min-width:600px) and (max-width:960px) {
        margin: -100px auto 0 auto;
    }
    @media only screen and (min-width: 960px) {
        margin: -150px auto 0 auto;
    }
}

.fade-enter-active,
.v-stepper__content {
    transition: all .3s ease-in-out !important;
}

.v-stepper {
    box-shadow: none !important;
    box-shadow: 0 !important;
}

.fade-enter-active,
.fade-leave-active,
.v-stepper__content {
    opacity: 1;
    transform: translateY(0)
}

.fade-enter {
    transition-delay: 3s
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
    transform: translateY(10px)
}

.formSectionInner {
    @media only screen and (max-width: 600px) {
        padding: 1em;
    }
    @media only screen and (min-width: 600px) {
        padding: 1em;
    }
}

.addressLookup {
    background-color: #fff;
    padding: 0.5rem 1rem;
    border-radius: 0.3125rem;
    -moz-appearance: textfield;
    background-color: #fff;
    border: 1px solid #ddd !important;
    border-radius: 8px;
    display: block;
    font-size: 1rem;
    line-height: 1.5;
    max-width: 100%;
    min-height: 1.5rem;
    min-width: 3rem;
    padding: 0.4375rem 0.875rem;
    transition: border-color 0.15s;
    width: 100%;
    padding: 13px 10px;
    box-shadow: 0 2px 3px #00000014;
}

.addressDeets {
    .v-text-field__details {
        display: none !important;
    }
}

.addressField-0 {
    width: 40%;
    display: inline-block;
}

.addressField-1 {
    width: 100%;
    display: inline-block;
}

.addressField-2 {
    width: 60%;
    display: inline-block;
    padding-right: 12px;
}

.addressField-3 {
    width: 40%;
    display: inline-block;
}

.trustLogos,
.btnBck {
    border-top: 1px #e3e3e3 solid;
}

.v-text-field__details {
    min-height: 0;
}

.v-text-field__details {
    margin-bottom: 0 !important;
    display: none !important;
}
</style>
