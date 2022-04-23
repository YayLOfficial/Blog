<template>
	
	<div id="header-background"> 
		<h1 id="header-title" @click="redirect('/')">
			THE MATH BLOG
		</h1>
		<h3 id="header-desc">
			a-z
		</h3>
		<div id="header-divider"></div>
		<div id="header-menu">
			<p @click="redirect('about')">
				ABOUT
			</p>
		</div>
	</div>

</template>

<script lang="ts">
	import Vue from 'vue'
	export default Vue.extend({
		methods: {
			redirect(link: string) {
				this.$router.push(link);
			}
		}
	})
</script>

<style scoped>

	#header-background {
		height: fit-content;
		width: 100%;
		background-color: var(--bg-color);

		display: flex;
		flex-direction: column;
	}

	#header-title {
		color: #fff;
		font-family: "Playfair Display Regular";

		width: 100%;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 0;
		margin-top: 2vh;
		width:fit-content;

		font-size: 3ch;
		letter-spacing: 7px;
		line-height: 29.9px;
		font-weight: 400;

	}

	#header-title:hover {
		cursor: pointer;
	}

	#header-desc {
		display: flex;
		color: rgba(255, 255, 255, 82%);
		letter-spacing: 4px;
		font-family: "Playfair Display Regular";

		margin-left: auto;
		margin-right: auto;
		margin-top: 1ch;
		margin-bottom: 1%;

		border-width: 1px;

		font-size: 1.6ch;

	}

	#header-divider {
		width: 60vw;
		height: 1px;
		background-color: rgb(41, 43, 45);
		margin: auto;
	}


	#header-menu {
		display: flex;
		font-family: "Open Sans", sans-serif;
		width: 20vw;
		height: 4vh;

		justify-content: center;
		margin-left: auto;
		margin-right: auto;
	}


	#header-menu > p {
		color: rgba(255, 255, 255, 92%);
		font-weight: 600;
		font-size: 1rem;

		height: 100%;

		margin: 0;
		display: flex;
		align-items: center;

		padding-top: 0.5ch;

		transition: 0.2s;
		-moz-transition: 0.2s;
		-o-transition: 0.2s;
		-webkit-transition: 0.2s;
	}

	#header-menu > p + p {
		margin-left: 1.5vw;
	}

	#header-menu > p:hover {

		color: #cf2e2e;
		cursor: pointer;
		border-top-style: solid;
		border-width: 1px;
	}



</style>