<template>
	
	<div id="about-bg"> 
		<div id="about-fg">
			<h1 id="title">About</h1>
			<div id="text-divider"></div>
			<div id="text" v-html="$md.render(require(`~/posts/about.md`).default)"></div>
		</div>
	</div>

</template>

<script lang="ts">
	import Vue from 'vue'
	export default Vue.extend({

	})
</script>

<style scoped>

	#about-bg {
		display: flex;
		background-color: var(--bg-color);
	}

	#about-fg {

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