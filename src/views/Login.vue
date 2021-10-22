<script setup>
	import { inject, ref } from "vue";
	const loginProvided = inject("auth_login");

	const login = () => {
		loginProvided(data.value);
	};

	const data = ref({
		name: "",
		password: "",
	});
</script>

<template>
	<div class="login">
		<h1>Iniciar Sesion</h1>
		<form @submit.prevent="login()" class="login__fields">
			<label for="name">Nombre</label>
			<input id="name" type="text" v-model="data.name" />
			<label for="password">Contraseña</label>
			<input id="password" type="password" v-model="data.password" />
			<button type="submit">Loguearse</button>
		</form>
	</div>
</template>

<style scoped>
	.login {
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
	.login__fields {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.login__fields label {
		margin-bottom: 1rem;
	}

	.login__fields input {
		margin-bottom: 1rem;
	}

	.login__fields button {
		margin-top: 1rem;
		border: none;
		padding: 7px 0;
		width: 100%;
		background-color: rgb(62, 175, 124);
		color: white;
		font-weight: 700;
	}
</style>
