<script setup>
	import Header from "./components/Header.vue";
	import { useAuth } from "./composables/useAuth";
	useAuth();
</script>

<template>
	<div class="app">
		<Header />
		<router-view></router-view>
	</div>
</template>

<style scoped>
	.app {
		min-height: 100vh;
		display: grid;
		place-items: center;
	}
</style>
