import Games from "./components/Games.vue";
import Developers from "./components/Developers.vue";
import { createRouter, createWebHistory } from "vue-router";
import Platforms from "./components/Platforms.vue";
import Creators from "./components/Creators.vue";

const routes = [
    {
        name: 'Games',
        path: '/games',
        component: Games
    },
    {
        name: 'Developers',
        path: '/developers',
        component: Developers
    },
    {
        name: 'Platforms',
        path: '/platforms',
        component: Platforms
    },
    {
        name: 'Сreators',
        path: '/creators',
        component: Creators
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;