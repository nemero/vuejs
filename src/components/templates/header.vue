<template>
	<section class="hero is-medium">
	  <!-- Hero head: will stick at the top -->
	  <div class="hero-head">
	    <nav class="navbar">
	      <div class="container">
	        <div class="navbar-brand">
	          <a class="navbar-item">
	            <img src="../../assets/logo.png">
	          </a>
	          <span class="navbar-burger burger" data-target="navbarMenuHeroA">
	            <span></span>
	            <span></span>
	            <span></span>
	          </span>
	        </div>
	        <div id="navbarMenuHeroA" class="navbar-menu">
	          <div class="navbar-end">
	          	<router-link to="/home" class="navbar-item">Home</router-link>
	    		    <router-link to="/about-us" class="navbar-item">About Us</router-link>
	    		    <router-link to="/contact-us" class="navbar-item">Contact Us</router-link>
	            
	            <span class="navbar-item">
	              <a class="button is-primary is-inverted">
	                <span class="icon">
	                  <i class="fab fa-github"></i>
	                </span>
	                <span>Download</span>
	              </a>
	            </span>

	          	<Login class="navbar-item"/>
	          </div>
	          
	        </div>
	      </div>
	    </nav>
	  </div>

	  <!-- Hero content: will be in the middle -->
	  <div class="hero-body">
	    <div class="container has-text-centered">
	      <h1 class="title">
	        Page Name
	      </h1>
	      <h2 class="subtitle">
	        Subtitle
	      </h2>
	    </div>
	  </div>

	  <!-- Hero footer: will stick at the bottom -->
	  <div class="hero-foot">
	    <nav class="tabs">
	      <div class="container">
	        <ul>
	          <li class="is-active"><a>Overview</a></li>
	          <li><a>Modifiers</a></li>
	          <li><a>Grid</a></li>
	          <li><a>Elements</a></li>
	          <li><a>Components</a></li>
	          <li><a>Layout</a></li>
	        </ul>
	      </div>
	    </nav>
	  </div>
	</section>
</template>


<script>
import Login from '../forms/login.vue'

export default {
  name: 'Header',
  components: {
  	Login,
  }
}
</script>

<style scoped lang="scss">

</style>