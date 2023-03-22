<template>
  <!-- navbar -->
  <nav class="bg-transparent border-[#1e293b] px-2 sm:px-4 py-2.5 dark:[#1e293b]">
  <div class="flex md:order-2">
<!-- responsive -->
      <button data-collapse-toggle="navbar-cta" type="button" class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
    </button>
  </div>
  <div class="items-center justify-center hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
    <ul class="flex justify-center items-center flex-col p-4 mt-4 border rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 bg-transparent">
      <li>
       <router-link to="/">
        <a class="text-center block py-2 pl-3 pr-4 font-semibold font-manrope rounded hover:bg-gray-100 text-slate-700 bg-transparent md:hover:text-slate-900 md:p-0 dark:hover:bg-slate-700  md:dark:hover:bg-transparent" aria-current="page">home</a>
      </router-link>
      </li>
      <li>
       <router-link to="/about">
        <a class="text-center block py-2 pl-3 pr-4 font-semibold font-manrope rounded hover:bg-gray-100 text-slate-700 bg-transparent md:hover:text-slate-900 md:p-0 dark:hover:bg-slate-700  md:dark:hover:bg-transparent" aria-current="page">about</a>
      </router-link>
      </li>
      <li>
        <router-link to ="/projects">
        <a class="text-center block py-2 pl-3 pr-4 font-semibold font-manrope rounded hover:bg-gray-100 text-slate-700 md:hover:text-slate-900 bg-transparent md:p-0 dark:hover:bg-slate-700  md:dark:hover:bg-transparent ">projects</a>
      </router-link>
      </li>
    </ul>
  </div>
  
</nav>
<router-view></router-view>

<div class="flex justify-center">
  <h1 class="text-center font-semibold font-inter text-4xl text-white pt-96 ">spreehertz.</h1>
<video id="background-video" autoplay loop muted poster="../assets/bg/poster.png">
<source src="../assets/bg/compressed-bg.mp4" type="video/mp4">
</video>
</div>
<h2 class="text-center font-semibold font-inter text-1xl text-slate-200 pt-2">js / web developer.</h2>
<div class="flex justify-center pt-2 gap-2">
  
  <router-link to="/about">
  <a as="a" class="flex gap-2 justify-center items-center 
w-fit font-medium basis-1 p-2 px-5 min-w-max text-sm text-center 
hover:.!text-[#09073a] hover:.bg-white hover:bg-opacity-100 
active:bg-opacity-90 rounded-md backdrop-blur-sm transition-all md:text-base outline-[#09073a]/50
text-orange-50 bg-[#383e47]/20 hover:bg-[#fa7e1e]/20">
About
<svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
</a>
</router-link>
<router-link to="/projects">
<a as="a" class="flex gap-2 justify-center items-center 
w-fit font-medium basis-1 p-2 px-5 min-w-max text-sm text-center 
hover:.!text-[#09073a] hover:bg-opacity-100 
active:bg-opacity-90 font-inter
rounded-md 
backdrop-blur-sm transition-all md:text-base outline-[#09073a]/50
text-orange-50 bg-[#373334]/20 hover:bg-[#8a8082]/20">
Projects
<svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
</a>
</router-link>

</div>


</template>

<script>

import Navbar from '../components/Navbar.vue';

export default {
  name: 'Home',
  components: {
    Navbar,
  },
  data() {
    return {
      songName: ''
    }
  }
}
</script>

<style>
#background-video {
  opacity: 60%;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: -1;
}


</style>
