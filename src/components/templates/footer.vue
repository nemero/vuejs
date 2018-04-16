<template>
	<footer class="footer">
	  <div class="container">
	  	<div class="columns">
		  <div class="column">
		    First column
		  </div>
		  <div class="column">
		    Second column
		  </div>
		  <div class="column">
		    Third column
		  </div>
		  <div class="column">
		    <Subscribe msg="Please to subscribe on newsletter"/>
		  </div>
		</div>

	    <div class="content has-text-centered">
	      <p>
	        <strong>Copyright</strong> etc. Bulma
	      </p>
	    </div>
	  </div>
	</footer>
</template>

<script>
import Subscribe from '../../components/forms/subscribe.vue'

export default {
  name: 'Footer',
  components: {
  	Subscribe
  }
}
</script>


<style lang="scss" scoped>

</style>