<template>
	<div id="index-bg">
		<img id="image" src="other_image.jpg" alt="hej">
		<h2 id="post-header">
			Blog Posts
		</h2>
		<div id="posts">
			<PostButton class="pb" v-for="[i, post] of Object.entries(posts)" :key="i" :index="i" :title="post.title" :description="post.description" />
		</div>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue'
	import PostButton from '~/components/PostButton.vue'
	export default Vue.extend({
		components: {
			PostButton
		},
		data() {
			return {
				posts: require('~/static/posts')
			}
		}
	})
</script>

<style scoped>

	#index-bg {
		display: flex;

		height: auto;
		width: 100%;

		background-color: var(--bg-color);
		flex-direction: column;
	}

	#image {
		height: 50vh;
		width: 90%;
		object-fit: cover;
		margin-top: 1%;
		margin-left: auto;
		margin-right: auto;
	}

	#posts {

		display: grid;

		grid-template-columns: repeat(3, 5fr);
		grid-auto-rows: minmax(100px, auto);

		column-gap: 3rem;
		row-gap: 2rem;

		width: fit-content;

		margin-left: auto;
		margin-right: auto;
		margin-top: 2vh;
		margin-bottom: 5vh;

		flex-wrap: wrap;
		/* margin */
		
	}

	#post-header {

		color: rgba(255, 255, 255, 1);

		font-family: "Playfair Display Regular";
		font-weight: 700;
		font-size: 2rem;
		line-height: 1.13;

		margin-left: auto;
		margin-right: auto;
		margin-top: 5rem;

	}

</style>