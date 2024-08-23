import { createMemoryHistory, createRouter } from "vue-router";
import About from "../views/AboutView.vue";
import Home from "../views/HomeView.vue";


const routes = [
  { path: '/home', component: Home },
  { path: '/about', component: About },
  { path: '/', component: Home },
]

export const router = createRouter({
  history: createMemoryHistory(), routes
})