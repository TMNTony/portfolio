import { createRouter as createRouter, createWebHistory } from 'vue-router'
import { useStore } from 'vuex'


// Import components
import Resume from'../views/Resume.vue'
import Home from "@/views/Home.vue";

/**
 * The Vue Router is used to "direct" the browser to render a specific view component
 * inside of App.vue depending on the URL.
 */
const routes = [
  {
    path: "/",
    name: 'home',
    component: Home,
  },
  {
    path: "/resume",
    name: 'resume',
    component: Resume
  },
  { path: "/:pathMatch(.*)*", redirect: "/profile" },
];

// Create the router
const router = createRouter({
  history: createWebHistory(),
  routes: routes
});

router.beforeEach((to) => {

  // Get the Vuex store
  const store = useStore();
});

export default router;
