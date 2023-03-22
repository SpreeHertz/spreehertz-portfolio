<template>
  <Navbar />
      <h1 class="font-inter font-semibold text-slate-200 text-3xl pl-9">About</h1>
    <p class="font-inter font-semibold text-slate-300 text-2xl max-w-1xl pl-9">I am a highly passionate 15-year-old JavaScript/web developer based in India, mainly focusing on web applications made on Vue, Discord and Minecraft bots, Instagram utilities and more. I also have more than 2 years of adminstrating 20+ Discord servers. </p>
    <h1 class="font-inter font-semibold text-slate-200 text-3xl pl-8 pt-7">Tech Stack</h1>
     <p class="font-inter font-semibold text-slate-300 text-2xl max-w-1xl pl-9">I mainly use these tools for my projects. </p>
    <div class="flex gap-2 pl-8 pt-2">
      <a href="https://vuejs.org"><img src="../assets/vuejs.svg" alt="" class="h-10 w-10 sm:grayscale-0 md:grayscale md:hover:grayscale-0"></a>
      <a href="https://mongodb.com"><img src="../assets/mongodb.svg" alt="" class="h-10 w-10 sm:grayscale-0 md:grayscale md:hover:grayscale-0"></a>
      <a href="https://git-scm.com"><img src="../assets/git.svg" alt="" class="h-10 w-10 sm:grayscale-0 md:grayscale md:hover:grayscale-0"></a>
      <a href="https://nodejs.org"><img src="../assets/node-js.svg" alt="" class="h-10 w-10 sm:grayscale-0 md:grayscale md:hover:grayscale-0"></a>
      <a href="https://tailwindcss.com"><img src="../assets/tailwindcss.svg" alt="" class="h-10 w-10 sm:grayscale-0 md:grayscale md:hover:grayscale-0"></a>
      <a href="https://flowbite.com"><img src="../assets/flowbite.svg" alt="" class="h-10 w-10 sm:grayscale-0 md:grayscale md:hover:grayscale-0"></a>


    </div>
</template>

<script>
import Navbar from '../components/Navbar.vue';
import DiscordButton from '../components/DiscordButton.vue';
import InstagramButton from '../components/InstagramButton.vue';
import TwitterButton from '../components/TwitterButton.vue';
export default {
  name: 'About',
  components: {
    Navbar,
    DiscordButton,
    InstagramButton,
    TwitterButton,
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
