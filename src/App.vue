<script setup>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
</script>

<template>
  <Header/>
  <router-view class="pb-16 pt-16"></router-view>
  <Footer/>
</template>