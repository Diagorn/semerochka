import {createRouter, createWebHistory} from "vue-router";
import Main from "@/pages/Main.vue";
import Rules from "@/pages/Rules.vue";
import About from "@/pages/About.vue";
import GamePage from "@/pages/GamePage.vue"
import Support from "@/pages/Support.vue";

const routes = [
    {
        path: '/',
        component: Main
    },
    {
        path: '/rules',
        component: Rules
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/game',
        component: GamePage
    },
    {
        path: '/support',
        component: Support
    }
]

const router = createRouter({
    routes,
    history: createWebHistory()
})

export default router