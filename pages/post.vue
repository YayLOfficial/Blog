<template>
	
	<div id="post-bg">
		<div id="post-back" @click="back()">Go Back</div>
		<div id="post-fg">
			<h1 id="title">
				{{this.data.title}}
			</h1>
			<div id="text-divider"></div>
			<div id="text" v-html="$md.render(require(`~/posts/${this.data.markdown}.md`).default)"></div>
		</div>
	</div>

</template>

<script lang="ts">
	import Vue from 'vue'
	export default Vue.extend({
		data() {
			return {
				data: require('~/static/posts')[Number(this.$route.query.id)]
			}
		},
		methods: {
			back() {
				this.$router.push('/');
			}
		}
	})
</script>

<style scoped>

	#post-bg {
		display: flex;
		background-color: var(--bg-color);

		height: fit-content;
	}

	#post-back {
		
		display: flex;

		font-family: "Playfair Display Regular";
		font-weight: 800;

		width: 5vw;
		height: 4vh;

		background-color: rgba(251, 253, 255, 11%);
		color: rgba(255, 255, 255, 82%);

		margin-left: 1vw;

		border-style: solid;
		border-width: 1px;
		border-radius: 1ch;

		justify-content: center;
		align-items: center;

		transition: 0.3s;

	}

	#post-back:hover {
		
		cursor: pointer;
		text-decoration: underline;

	}

	#post-fg {

		display: flex;
		background-color: var(--markdown-bg-color);

		width: 80vw;
		min-height: 80vh;
		height: fit-content;

		margin-left: auto;
		margin-right: auto;
		margin-bottom: 10vh;
		margin-top: 5vh;

		flex-direction: column;
		transform: translateX(-4%);
	}

	#title {

		margin-left: auto;
		margin-right: auto;

		color: rgba(255, 255, 255, 82%);

	}

	#text-divider {

		display: flex;

		width: 75%;
		height: 1px;

		background-color: rgba(255, 255, 255, 26%);

		margin-left: auto;
		margin-right: auto;

	}

	#text {
		color: rgba(255, 255, 255, 93%);
		margin-left: auto;
		margin-right: auto;
		width: 85%;
	}

</style>