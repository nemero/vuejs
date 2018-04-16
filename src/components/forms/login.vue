<template>
	<div class="navbar-item">
		<a @click="seen = 'is-active'">Login</a>
		<div :class="seen" class="modal">
		  <div class="modal-background" @click="seen = ''"></div>
		  <div class="modal-content">
		  	<div class="box">
			  	<h3 class="title is-4">{{ msg }}</h3>
			    <form action="#/login" method="POST">
			    	<div class="field">
			    		<p class="control has-icons-left">
							<input type="text" name="email" class="input" placeholder="Your email" v-model.trim="email" @change="postForm()"/>
							<label>{{ email }}</label>
							<span class="icon is-left">
						      <i class="fas fa-envelope"></i>
						    </span>
						</p>
					</div>
					<div class="field">
						<p class="control has-icons-left">
							<input type="password" name="password" class="input" placeholder="Your password" v-model.trim="password"/>
							<span class="icon is-left">
						      <i class="fas fa-lock"></i>
						    </span>
						</p>
					</div>
					<div class="field">
						<label class="checkbox">
						  <input type="checkbox" name="remember-me" v-model="remember_me">
						  Remember me
						</label>
					</div>
					<div class="field">
						<p class="control">
							<input type="submit" class="button is-primary is-outlined" name="Login" @click="postForm()"/>
						</p>
					</div>
				</form>
			</div>
		  </div>
		  <button class="modal-close is-large" aria-label="close" @click="seen = ''"></button>
		</div>
	</div>
</template>


<script>
import {HTTP} from '../core/http-common'

export default {
	name: 'Login',

	data: () => ({
		errors: [],
		seen: '',
		email: '',
		password: '',
		remember_me: ''
	}),

	props: {
	    msg: {
	    	default: 'Login',
	    	type: String
	    }
	},

	methods: {
		postForm() {
			console.log('123');
			HTTP.post('login', {
				body: this.email,
			})
			.then(response => {
				console.log(response)
			})
			.catch(e => {
				this.errors.push(e)
			})
		}
	}
}
</script>