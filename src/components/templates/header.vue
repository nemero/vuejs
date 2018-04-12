<template>
	<header>
		<ul>
			<li><router-link to="/home">Home</router-link></li>
    		<li><router-link to="/about-us">About Us</router-link></li>
    		<li><router-link to="/contact-us">Contact Us</router-link></li>
		</ul>

	</header>
</template>


<script>
export default {
  name: 'Header',
}
</script>

<style scoped lang="scss">
	header {
		padding: 5px;
		margin: 0;
		background: #35495E;
		border-bottom: 10px solid #41B883;
	}

	ul {
		list-style: none;
		display: flex;
		justify-content: space-evenly;

		
		a {
			color: #fefefe;
			text-decoration: none;

			&:hover {
				color: #41B883;
			}
		}

		li {
			color: #fff;
		}	
	}
</style>