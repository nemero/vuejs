<template>
	<div class="notification">
		<article class="message">
		  	<div class="message-body">
		  	{{ notification }}
		  	<!-- <div class="messages" v-for="message in messages">
				<div>{{ message }}</div>
			</div> -->
			</div>
		</article>
	</div>
</template>


<script>
export default {
	name: 'Notification',
	props: [
		'notification',
	],
	watch: {
		notification: function(val) {
			console.log(val);
			//this.fullName = val + ' ' + this.lastName
		}
	}
}
</script>