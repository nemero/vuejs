export const NotificationState = {
	state: [],

	addNotification: function(notification){
		this.state.push(notification)
	},
	removeNotification: function(notification){
		this.state.$remove(notification)
	},
}