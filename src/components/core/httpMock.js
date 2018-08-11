import { postLogin } from '../seeds/postLogin'
import { getUser } from '../seeds/getUser'

let actions = {
	postLogin, 
	getUser
}

export const httpMock = {
	factoryDir: '../factory/',
	capitalizeFirstLetter: function(string) {
	    return string.charAt(0).toUpperCase() + string.slice(1);
	},
	create: function() {
		return this
	},
	post: function(action, ...params) {
		let factory = 'post' + this.capitalizeFirstLetter(action)
		// validate requeried params
		return new Promise((resolve, reject) => {
			resolve(actions[factory])
		});
	},
	get: function(action, ...params) {
		// validate requeried params
		return new Promise((resolve, reject) => {
			resolve(actions[factory])
		});
	}
}