<template>
  <div class="content">
  	<router-view></router-view>
  </div>
</template>


<script>
export default {
  name: 'Body',
}
</script>

<style scoped>
	.content {
	    min-height: 400px;
	    max-width: 900px;
	    margin: 0 auto;
	}
</style>