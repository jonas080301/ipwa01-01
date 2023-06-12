<script setup>
//importiere Router
import { RouterView } from "vue-router";

//importiere Navbar
import Navbar from "./components/Navbar.vue"

//importiere Footer
import Footer from "./components/Footer.vue"

</script>

<template>
  <Navbar></Navbar>
  <RouterView />
  <Footer></Footer>
</template>


