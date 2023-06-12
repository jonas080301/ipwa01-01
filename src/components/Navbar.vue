<template>
    <nav :dir="langDirection" class="relative flex flex-wrap items-center justify-between px-2 py-3 bg-gray-200 mb-3">
      <div class="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div class="w-full relative flex justify-between lg:w-auto  px-2 lg:static lg:block lg:justify-start">
          <a class="text-sm font-bold leading-relaxed inline-block mr-4 whitespace-nowrap uppercase" href="#">
            <img class="w-72" src="/logo.png" />
          </a>
          <button class="text-black cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none" type="button" v-on:click="toggleNavbar()">
            <svg v-bind:class="{'hidden': showMenu, 'flex': !showMenu}" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" height="32px" id="burger" version="1.1" viewBox="0 0 32 32" width="32px" xml:space="preserve"><path fill="#000" d="M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z"/></svg>
            <p v-bind:class="{'hidden': !showMenu, 'flex': showMenu}" >X</p>
          </button>
        </div>
        <div v-bind:class="{'hidden': !showMenu, 'flex': showMenu, 'lg:flex-grow': langDirection=='ltr'}" class="lg:flex items-center">
          <ul class="flex flex-col lg:flex-row list-none ml-auto">
            <li class="nav-item">
              <a class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75" href="#help">
                <span class="ml-2">Hilfe</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75" href="#impressum">
                <span class="ml-2">Impressum</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75" href="#datenschutz">
                <span class="ml-2">Datenschutz</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    name: "Navbar",
    data() {
      return {
        showMenu: false,
        langDirection: "ltr"
      }
    },
    mounted(){
      //Sprachen die von rechts nach links geschrieben werden - Quelle: https://lingohub.com/academy/best-practices/rtl-language-list
      let rtlLanguages = ["ar", "arc", "dv", "fa", "ha", "he", "khw", "ks", "ku", "ps", "ur", "yi"];

      //Check, ob die Navigator-Sprache in den rtl-Sprachen vorhanden ist
      if(rtlLanguages.includes(navigator.language)){
        this.langDirection = "rtl"
      }
      else{
        this.langDirection = "ltr"
      }
    },
    methods: {
      toggleNavbar: function(){
        this.showMenu = !this.showMenu;
      }
    }
  }
  </script>