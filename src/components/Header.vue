<script setup>
	import { inject, computed } from "vue";
	import { useRoute } from "vue-router";

	const route = useRoute();

	const logout = inject("auth_logout");
	const isAuthenticated = inject("isAuthenticated");
	const currentRoute = computed(() => route.matched[0]);

	const links = [
		{
			name: "Home",
			text: "Home",
			requireLoged: false,
		},
		{
			name: "Login",
			text: "Login",
			requireLoged: true,
		},
	];
</script>

<template>
	<div class="header">
		<template v-for="{ name, text, requireLoged } of links" :key="name">
			<router-link
				v-if="!isAuthenticated == requireLoged"
				:class="['header__link', { 'header__link--actual': currentRoute?.name == name }]"
				:to="{ name }"
			>
				{{ text }}
			</router-link>
		</template>
		<button @click="logout()" class="header__link" v-if="isAuthenticated">Logout</button>
	</div>
</template>

<style scoped>
	.header {
		display: flex;
		position: absolute;
		margin: 1rem;
		top: 0;
	}
	.header button {
		text-decoration: underline;
		border: none;
		background-color: inherit;
		font-size: inherit;
	}
	.header__link {
		display: flex;
		align-items: center;
		padding: 10px;
		color: var(--primary-color);
	}

	.header__link--actual {
		color: var(--font-color);
	}
</style>
