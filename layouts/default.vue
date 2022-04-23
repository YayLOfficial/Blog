<template>
	<div>
		<Head />
		<Nuxt />
		<Footer />
	</div>

</template>

<script lang="ts">
	import Vue from 'vue'
	import Head from '../components/Header.vue'
	import Footer from '~/components/Footer.vue'
	export default Vue.extend({
		components: {
			Head,
			Footer
		}
	})
</script>

<style>

	@font-face {
		font-family: "Playfair Display Regular";
		src: local("PlayfairDisplayRegular"),
			url("~static/PlayfairDisplayRegular/PlayfairDisplayRegular.ttf") format("truetype");
	}

	@font-face {
		font-family: "Ubuntu";
		src: local("Ubuntu"),
			url("~static/UbuntuRegular/UbuntuRegular.ttf") format("truetype");
	}

	:root {

		--bg-color: rgb(1, 3, 5);
		--footer-color: rgb(26, 28, 30);
		--post-bg-color: rgb(30, 31, 38);
		--markdown-bg-color: rgba(251, 253, 255, 10%);
		--post-border-color: rgb(40, 41, 48);
		--selected-color: rgb(187, 46, 46);
		--post-selected-color: rgb(5, 152, 122);

	}

	body {

		margin: 0px;
		padding: 0px;

	}

	/* * {
		border-style: solid;
		border-color: red;
		border-width: 0.5vmin;
	} */

</style>