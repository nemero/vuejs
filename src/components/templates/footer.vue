<template>
	<footer>
		<div class="row">
			<div class="section">
				<ul>
					<li>Home</li>
					<li>About Us</li>
					<li>Contact</li>
				</ul>
			</div>
			
			<div class="section">
				<Subscribe msg="123"/>
			</div>
		</div>

		<div>Copyright. etc.</div>
	</footer>
</template>

<script>
import Subscribe from '../../components/subscribe.vue'

export default {
  name: 'Footer',
  components: {
  	Subscribe
  }
}
</script>


<style lang="scss" scoped>
	footer {
		padding: 5px;
		margin: 0;
		border-bottom: 10px solid #41B883;

		.row {
			display: flex;
			justify-content: center;

			.section {
				border-right: 1px solid #cecece;
				justify-content: space-evenly;
				padding: 10px;
				margin-bottom: 20px;
			}
		}
	}

	ul {
		list-style: none;
		display: flex;
		justify-content: space-evenly;
		flex-direction: column;

		> li {
			color: green;
			margin: 15px 10px;
		}
	}
</style>