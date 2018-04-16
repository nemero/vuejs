<template>
  <div id="app" class="application">  
    <Header />
    <Body />
    <Footer />
  </div>
</template>

<script>
import Header from './components/templates/header.vue'
import Body from './components/templates/body.vue'
import Footer from './components/templates/footer.vue'

export default {
  name: 'app',
  components: {
    Header,
    Body,
    Footer,
  }
}
</script>

<style>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
