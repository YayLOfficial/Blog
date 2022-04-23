<template>
	<div id="footer">
		<p>
			Created by Zimon Moudi
		</p>

	</div>
</template>

<script lang="ts">
	import Vue from 'vue'
	export default Vue.extend({
		
	})
</script>

<style scoped>

	#footer {
		display: flex;
		width: 100%;
		height: 10vh;

		background-color: var(--footer-color);

	}

	#footer > p {

		margin: 0;
		color: rgba(255, 255, 255, 87%);
		font-family: "Playfair Display Regular";

		margin: auto;
		width: fit-content;

	}

</style>