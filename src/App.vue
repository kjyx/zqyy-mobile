<template>
  <div id="app">
    <Header v-show="$route.meta.header"></Header>
    <router-view></router-view>
    <Footer v-show="$route.meta.footer"></Footer>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
export default {
  name: 'App',
  components: {Footer, Header}
}
</script>
<style>
#app{
  background-color: black;
}
</style>
