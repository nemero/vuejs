<template>
	<div>
		<h3>{{ msg }}</h3>
		<form action="#/subscribe">
			<div class="field has-addons">
  				<div class="control">
					<input type="text" class="input" name="email" placeholder="Your email" />
				</div>

				<div class="control">
					<input type="submit" class="button is-primary is-outlined" name="Subscribe" />
				</div>
			</div>
		</form>
	</div>
</template>


<script>
export default {
	name: 'Subscribe',
	props: {
	    msg: {
	    	default: 'Sample Title',
	    	type: String
	    }
	}
}
</script>