import { createRouter, createWebHistory } from "vue-router";
import { getItemLocalStore } from "../lib/localStoreItem";

const Login = () => import("../views/Login.vue");
const Home = () => import("../views/Home.vue");

const routes = [
	{
		path: "/",
		component: Home,
		meta: { auth: true },
		name: "Home",
	},
	{
		path: "/login",
		component: Login,
		meta: { auth: false },
		name: "Login",
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

router.beforeEach((to, _, next) => {
	const isAuthenticated = getItemLocalStore("isAuthenticated", false);
	if (to.meta.auth && !isAuthenticated) {
		next({ name: "Login" });
	} else if (!to.meta.auth && isAuthenticated) {
		next({ name: "Home" });
	} else {
		next();
	}
});

export default router;
