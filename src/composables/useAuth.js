import { ref, provide, readonly } from "vue";
import { useRouter } from "vue-router";
import { getItemLocalStore } from "../lib/localStoreItem";

export const useAuth = () => {
	const router = useRouter();
	const isAuthenticated = ref(getItemLocalStore("isAuthenticated", false));

	const login = ({ name, password }) => {
		if (name == "admin" && password == "admin") {
			isAuthenticated.value = true;
			localStorage.setItem("isAuthenticated", isAuthenticated.value);
			router.push({ name: "Home" });
		}
	};

	const logout = () => {
		isAuthenticated.value = false;
		localStorage.setItem("isAuthenticated", isAuthenticated.value);
		router.push({ name: "Login" });
	};

	provide("auth_login", login);
	provide("auth_logout", logout);
	provide("isAuthenticated", readonly(isAuthenticated));

	return {
		isAuthenticated: readonly(isAuthenticated),
		login,
		logout,
	};
};
