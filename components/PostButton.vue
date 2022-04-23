<template>
	
	<div id="post" @click="open()">
		<h2 id="post-title">{{title ? title : "Missing title"}}</h2>
		<p id="post-desc">{{description ? description + "..." : "Summary unavailable"}}</p>
		<div id="post-divider"></div>
		<p id="post-continue">Press to read...</p>
	</div>

</template>

<script lang="ts">
	import Vue from 'vue'
	export default Vue.extend({
		props: {
			index: String,
			title: String,
			description: String,
			markdown: String,
		},
		methods: {
			open() {
				this.$router.push({ path: '/post', query: { id: this.index } });
			}
		}
	})
</script>

<style scoped>

	#post {
		display: flex;
		flex-direction: column;
		background-color: var(--post-bg-color);

		border-style: solid;
		border-width: 2px;
		border-color: var(--post-border-color);
		
		width: 40ch;
		height: 25vh;

		margin-left: auto;
		margin-right: auto;
		margin-top: 2vh;

		transition: 0.5s;

	}

	#post-title {

		color: rgba(255, 255, 255, 87%);

		font-size: 2.2ch;
		font-family: "Ubuntu";

		margin-left: 1vw;
		max-height: 10%;

	}

	#post-desc {
		margin-bottom: 0;
		margin-left: 1vw;
		width: 90%;
		height: 25%;
		margin-top: 5%;

		color: rgba(255, 255, 255, 62%);

	}

	#post-divider {
		width: 90%;
		height: 2px;

		background-color: rgba(255, 255, 255, 21%);

		margin-top: auto;
		margin-right: auto;
		margin-left: auto;

		transition: 0.5s;

	}

	#post-continue {

		display: flex;

		font-family: "Ubuntu";
		width: 85%;
		height: 3vh;

		margin-left: auto;
		margin-right: auto;

		/* border-style: solid; */
		background-color: var(--post-border-color);
		color: rgba(255, 255, 255, 52%);

		transition: 0.5s;

		align-items: center;

		padding-left: 2%;
	}

	#post:hover {
		cursor: pointer;
		border-color: var(--post-selected-color);
	}

	#post:hover > #post-continue {
		color: var(--post-selected-color);
	}

	#post:hover > #post-divider {
		background-color: var(--post-selected-color);
	}

</style>