<script setup>
	import { ref } from "vue";

	defineEmits(["onSubmit"]);

	const user = ref({
		name: "",
		password: "",
	});
</script>

<template>
	<form @submit.prevent="$emit('onSubmit', user)" class="login-form">
		<label for="name">Nombre</label>
		<input id="name" type="text" v-model="user.name" />
		<label for="password">Contraseña</label>
		<input id="password" type="password" v-model="user.password" />
		<button type="submit">Loguearse</button>
	</form>
</template>

<style scoped>
	.login-form {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.login-form label {
		margin-bottom: 1rem;
	}

	.login-form input {
		margin-bottom: 1rem;
	}

	.login-form button {
		margin-top: 1rem;
		border: none;
		padding: 7px 0;
		width: 100%;
		background-color: var(--primary-color);
		color: var(--white-color);
		font-weight: 700;
	}
</style>
