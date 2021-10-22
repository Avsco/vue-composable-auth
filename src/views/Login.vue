<script setup>
	import { inject } from "vue";
	import LoginForm from "../components/LoginForm.vue";
	const loginProvided = inject("auth_login");

	const login = (user) => {
		loginProvided(user);
	};
</script>

<template>
	<div class="login">
		<h1>Iniciar Sesion</h1>
		<LoginForm @onSubmit="login" />
	</div>
</template>

<style scoped>
	.login {
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
</style>
