<template>
        <Navbar />
        <h1 class="font-inter font-semibold text-slate-200 text-3xl pl-9">Projects</h1>
        <p class="font-inter font-semibold text-slate-300 text-2xl max-w-1xl pl-9 pt-2">I have made numerous projects, mainly focusing on Instagram, Discord and Minecraft. I've also ran a discord server.</p>
        <div class="flex pl-8 pt-4 gap-3">
  <div
    class="block max-w-sm rounded-lg bg-white shadow-lg dark:bg-slate-600/20">
    <a href="#!" data-te-ripple-init data-te-ripple-color="light">
      <img
        class="rounded-t-lg"
        src="../assets/projects/Cleckzie.png"
        alt="" />
    </a>
    <div class="p-6">
      <h5
        class="mb-2 text-xl font-inter font-medium leading-tight text-neutral-800 dark:text-neutral-50">
        Cleckzie
      </h5>
      <p class="mb-4 text-base font-inter text-neutral-600 dark:text-neutral-200">
        A multi-purpose bot that includes 100+ commands from categories like moderation, music, giveaways, image generation, memes, and much more.
      </p>

    </div>
  </div>
  <div
    class="block max-w-sm rounded-lg bg-white shadow-lg dark:bg-slate-600/20">
    <a href="#!" data-te-ripple-init data-te-ripple-color="light">

      <img
        class="rounded-t-lg"
        src="../assets/projects/sandminejs.png"
        alt="sandminejs" />
      
    </a>
    
    <div class="p-6">
      <h5
        class="mb-2 text-xl font-inter font-medium leading-tight text-neutral-800 dark:text-neutral-50">
        Sandmine.js
      </h5>
      <p class="mb-4 text-base font-inter text-neutral-600 dark:text-neutral-200">
      A minecraft bot packed with PvP and pathfinding featues, completely made with JavaScript.
      </p>

    </div>
  </div>
</div>

</template>

<script>
import Navbar from '../components/Navbar.vue'
import GithubOverlayBtn from '../components/GitHubOverlayBtn.vue';

export default { 
    name: "Projects", 
    components: {
        Navbar,
        GithubOverlayBtn
    }
}
</script>
