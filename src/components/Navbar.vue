<template>
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
        <a class="text-center block dark:md:text-slate-300 dark:md:hover:text-slate-400 py-2 pl-3 pr-4 font-semibold font-manrope rounded hover:bg-gray-100 text-slate-700 bg-transparent md:hover:text-slate-900 md:p-0 dark:hover:bg-slate-700  md:dark:hover:bg-transparent" aria-current="page">home</a>
      </router-link>
      </li>
      <li>
       <router-link to="/about">
        <a class="text-center block dark:md:text-slate-300 dark:md:hover:text-slate-400 py-2 pl-3 pr-4 font-semibold font-manrope rounded hover:bg-gray-100 text-slate-700 bg-transparent md:hover:text-slate-900 md:p-0 dark:hover:bg-slate-700  md:dark:hover:bg-transparent" aria-current="page">about</a>
      </router-link>
      </li>
      <li>
        <router-link to ="/projects">
        <a class="text-center block dark:md:text-slate-300 dark:md:hover:text-slate-400 py-2 pl-3 pr-4 font-semibold font-manrope rounded hover:bg-gray-100 text-slate-700 md:hover:text-slate-900 bg-transparent md:p-0 dark:hover:bg-slate-700  md:dark:hover:bg-transparent ">projects</a>
      </router-link>
      </li>
    </ul>
  </div>
  
</nav>
<router-view></router-view>
</template>

<script>
export default {
  name: 'Navbar',
  
}
</script>