import { createMemoryHistory, createRouter } from "vue-router";
import About from "../views/About.vue";
import Home from "../views/Home.vue";


const routes = [
  { path: '/home', component: Home },
  { path: '/about', component: About },
  { path: '/', component: Home },
]

export const router = createRouter({
  history: createMemoryHistory(), routes
})