<template>
  <Navbar />
      <h1 class="font-inter font-semibold text-slate-200 text-3xl pl-9">About</h1>
    <p class="font-inter font-semibold text-slate-300 text-2xl max-w-2xl pl-9">I am a highly passionate 15-year-old JavaScript/web developer based in India, mainly focusing on web applications made on Vue, Discord and Minecraft bots, Instagram utilities and more. I also have more than 2 years of adminstrating 20+ Discord servers. </p>
    <h1 class="font-inter font-semibold text-slate-200 text-3xl pl-8 pt-3">Socials</h1>
    <div class="flex gap-2 pl-6 pt-2">
      <GithubButton />
      <InstagramButton />
      <TwitterButton />
    </div>
  
</template>

<script>
import Navbar from '../components/Navbar.vue';
import DiscordButton from '../components/DiscordButton.vue';
import InstagramButton from '../components/InstagramButton.vue';
import TwitterButton from '../components/TwitterButton.vue';
import GithubButton from '../components/GithubButton.vue';

export default {
  name: 'About',
  components: {
    Navbar,
    DiscordButton,
    InstagramButton,
    TwitterButton,
    GithubButton,
  }
}
</script>

<style>
body {
    background: linear-gradient(284deg, #374151, #111827, #000000);
    background-size: 600% 600%;

    -webkit-animation: AnimationName 15s ease infinite;
    -moz-animation: AnimationName 15s ease infinite;
    animation: AnimationName 15s ease infinite;
}

@-webkit-keyframes AnimationName {
    0%{background-position:34% 0%}
    50%{background-position:67% 100%}
    100%{background-position:34% 0%}
}
@-moz-keyframes AnimationName {
    0%{background-position:34% 0%}
    50%{background-position:67% 100%}
    100%{background-position:34% 0%}
}
@keyframes AnimationName {
    0%{background-position:34% 0%}
    50%{background-position:67% 100%}
    100%{background-position:34% 0%}
}
</style>
