<template>
	<div>
		<h4>{{ msg }}</h4>
		<form action="/subscribe">
			<input type="text" name="email" placeholder="Please enter email" />
			<input type="submit" name="Subscribe" />
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