<template>
    <div>
        <header class="primary text-center white--text py-4">
            <h1 class="display-1 py-6">Cookie policy</h1>
        </header>
        <v-container class="mt-5 py-16">
            <v-row>
                <v-col cols="11" md="8" justify="center" class="offset-md-2">
                    <p>We use cookies to distinguish you from other users of our Sites and Services. This helps us to provide you with a good experience when you use our Sites and Services and also allows us to improve them. You can set your browser to refuse
                        all or some browser cookies, or to alert you when websites set or access cookies. If you disable or refuse cookies, please note that some parts of this website may become inaccessible or not function properly.</p>
                    <p>We use the pieces of information that cookies record to help us improve services for you by, for example:</p>
                    <ul>
                        <li>Enabling a service to recognise your device so you don’t have to give the same information several times during one task</li>
                        <li>Recognising that you may already have given a username and password so you don’t need to do it for every web page requested</li>
                        <li>Measuring how many people are using services, so they can be made easier to use and there’s enough capacity to ensure they are fast</li>
                        <li>Analysing anonymised data to help us understand how people interact with govt services so we can make them better</li>
                    </ul>
                    <br/>
                    <h3>How to control and delete cookies:</h3>
                    <p>We will not use cookies to collect personally identifiable information about you.</p>
                    <p>However, if you wish to restrict or block the cookies which are set by our websites, or indeed any other website, you can do this through your browser settings. The ‘Help’ function within your browser should tell you how.</p>
                    <p>Alternatively, you may wish to visit the AboutCookies.org website which contains comprehensive information on how to do this on a wide variety of browsers. You will also find details on how to delete cookies from your machine as well as
                        more general information about cookies.</p>
                    <p>Please be aware that restricting cookies may impact on the functionality of our website.</p>
                    <p>If you wish to view your cookie code, just click on a cookie to open it. You’ll see a short string of text and numbers. The numbers are your identification card, which can only be seen by the server that gave you the cookie.</p>
                    <p>For information on how to do this on the browser of your mobile phone, please refer to your handset’s user manual.</p>
                    <br/>
                    <h3>Cookies We Use and Why:</h3><br>
                    <p> <b>Strictly Necessary Cookies</b></p>
                    <p>These cookies let you move around the website and use essential features like secure areas. These cookies don’t gather any information about you that could be used for marketing or remembering where you’ve been on the internet.</p>
                    <p><b>We use these Strictly Necessary cookies to:</b></p>
                    <ul>
                        <li>Remember things like information you’ve entered on forms</li>
                        <li>Make sure you connect to the right service on our website when we make any changes to the way the website works.</li>
                    </ul>
                    <br/>
                    <p><b>Cookies we have defined as ‘Strictly Necessary’ cookies will not be used to:</b></p>
                    <ul>
                        <li>Gather information that could be used to advertise products or services to you.</li>
                        <li>Remember your preferences or username beyond your current visit.</li>
                        <li>Accepting these cookies is a condition of using the website, so if you prevent these cookies we can’t guarantee our website will perform as expected during your visit.
                        </li>
                    </ul>
                    <br/>
                    <p><b>Performance Cookies</b></p>
                    <p>These cookies help identify information about how you use our website e.g. which pages you visit, and if you experience any errors. These cookies don’t collect any information that could identify you – all the information collected is
                        anonymous and is only used to help us improve how our website works, understand what interests our users, and measure how effective our advertising is.</p>
                    <p><b>We use performance cookies to:</b></p>
                    <ul>
                        <li>Provide statistics on how our website is used.</li>
                        <li>See how effective our adverts are (we don’t use these cookies to target adverts to you when you visit other websites).</li>
                        <li>Help us improve the website by measuring any errors that occur.</li>
                        <li>Test different designs of our website.</li>
                    </ul>
                    <p>Using our site indicates that you accept the use of ‘Performance’ cookies. Accepting these cookies is a condition of using the website, so if you prevent them we cannot guarantee how our site will perform for you.</p>
                    <p><b>Functionality cookies</b></p>
                    <p>Functionality cookies are used to provide services or to remember settings to improve your visit. We use Functionality cookies to:</p>
                    <li>
                        Remember settings you’ve applied such as layout, text size, preferences and colours.</li>
                    <li>
                        Remember if we’ve already asked you if you want to fill in a survey or review.</li>
                    <li>
                        Show you when you’re logged in to the website.</li>
                    <p>
                        Cookies defined as ‘Functionality’ will not be used to target you with adverts on other websites.</p>
                    <p>
                        Preventing these cookies may mean we can’t offer you some services and will reduce the support we can offer you. It’s also possible that preventing these cookies will stop us remembering that you didn’t want a specific service.
                    </p>
                    <p>
                        For example, social media sharing cookies apply when you share our content on a social network such as Facebook or Twitter.
                    </p>
                    <p><b>Targeting/marketing cookies</b></p>
                    <p>
                        We have relationships with carefully selected and trusted marketing suppliers. Sometimes you might see our adverts on other websites. This is because a cookie has been used to deliver the ad to you. It is important to understand that these cookies are
                        completely anonymous – they are only stored on your computer. No information is ever shared with other websites and you have the ability to opt-out of targeted marketing directly from these trusted suppliers.
                    </p>
                    <p>
                        Preventing these cookies may stop us from offering you some services. All of these cookies are managed by third parties.
                    </p>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>
<script>
export default {
    head() {
        return {
            script: [
                { hid: 'CookieDeclaration', src: 'https://consent.cookiebot.com/a01a09ef-f0f0-45d4-b516-bd20342681d3/cd.js', async: true }
            ]
        }
    }
}
</script>
