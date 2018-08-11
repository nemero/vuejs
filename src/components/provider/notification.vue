<template>
	<div class="modal-notification">
		<Notification v-for="notification in notifications" :notification="notification"/>
	</div>
</template>

<script>
import Notification from '../core/notification.vue'
import { NotificationState } from '../core/notifications/notificationState'


export default {
	name: 'NotificationProvider',
	components: {
		Notification
	},
	data: () => ({
		notifications: NotificationState.state,
	}),
}
</script>

<style lang="scss">
	
.modal-notification {
	position: absolute;
	top: 20px;
	width: 600px;
	padding: 20px;
	left: calc(50% - 300px);
    z-index: 9;

    article {
    	box-shadow: 0 0 10px lightgrey;
    }
}

</style>