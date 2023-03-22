<template>
    <div class="projects">
        <Navbar />
    <h1 class="text-4xl text-slate-200 font-inter font-semibold pl-8">Projects</h1>
    <p class="font-inter text-xl text-slate-400 pt-4 pl-8">I have made numerous projects, mainly focusing on Instagram, Discord and Minecraft. I've also ran a discord server.</p>
    <h2 class="text-3xl text-slate-200 font-inter font-semibold pt-2 pl-6">Discord server</h2>
    <div class="ml-4 mt-3 max-w-sm rounded overflow-hidden shadow-lg">
  <img class="w-full" src="../assets/card_img/dingoscord.png" alt="dingoskord">
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2 text-slate-200">Dingoscord</div>
    <p class="text-slate-400 text-base">
    Dingoscord is a lenient friend group focused on having fun. We mainly talk about rap and gaming, but you're free to talk about whatever. We've been running since March 2021 and we assure you'll have a good time.
    </p>
  </div>
  <div class="px-6">
    <a href="https://discord.gg/vSmEzaxBp8" class="font-inter inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#404eed] rounded-lg hover:bg-[#404eed]/10 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Join the server
        <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
    </a>
  </div>
  <!-- div for breathing space -->
  <div class="pt-4 pb-2">
  </div>
</div>
<h2 class="text-3xl text-slate-200 font-inter font-semibold pt-4 pl-8">Discord bots</h2>
    <div class="flex gap-4">
        <div class="ml-4 mt-2 max-w-sm rounded-md overflow-hidden shadow-lg">
  <img class="w-full" src="../assets/card_img/cleckzie.png" alt="Sunset in the mountains">
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2 text-slate-200">Cleckzie</div>
    <p class="text-slate-400 text-base">
        Cleckzie is a multi-purpose bot filled with 100+ commands ranging from Music to Moderation.
    </p>
  </div>
  <div class="px-6 pt-4 pb-2">
    <span class="inline-block bg-red-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">discontinued</span>
    <span class="inline-block bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">discord</span>
    <span class="inline-block bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">bot</span>
  </div>
</div>
    

 
 
    </div>
</div>

</template>

<script>
import Navbar from '../components/Navbar.vue'
export default { 
    name: "Projects", 
    components: {
        Navbar
    }
}
</script>