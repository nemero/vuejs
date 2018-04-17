<template>
	<div class="modal-notification">
		<Notification v-model="messages" />
	</div>
</template>

<script>
import Notification from '../core/notification.vue'

export default {
	name: 'NotificationProvider',
	components: {
		Notification,
	},
	data: () => ({
		messages,
	}),
	methods: {
		showMessage(e) {
			console.log('asdasd');
			this.messages = e
		}
	}
}
</script>

<style lang="scss">
	
.modal-notification {
	position: absolute;
	top: 20px;
	width: 600px;
	padding: 20px;
	left: calc(50% - 300px);
    z-index: 999999;

    article {
    	box-shadow: 0 0 10px lightgrey;
    }
}

</style>